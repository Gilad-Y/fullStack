const coinDataLink = "https://api.coingecko.com/api/v3/coins/list";
const coinInfoLink = "https://api.coingecko.com/api/v3/coins/";
const cryptoGraphLink =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=";
const allowedCoins = 5;
let cryptoGraphData = [];
let cryptoData = [];
let checkCounter = 0;
let keyWord = "";
const CACHE_EXPIRATION_TIME = 120000;
let cache = {};
let graphCoinData = {};
let updateGraph;
$(async () => {
  $("#nav_content").html(
    `<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>`
  );
  cryptoData = await $.get(coinDataLink);
  cryptoData = cryptoData.slice(0, 100);
  // console.log(cryptoData);
  createCards(cryptoData, keyWord);
});

const createCards = (cryptoData, keyWord) => {
  stopInterval();
  $("#nav_home").addClass("btn-primary");
  $("#nav_reports").removeClass("btn-primary");
  $("#nav_about").removeClass("btn-primary");
  if (cryptoData.length == 0) {
    $("#nav_content").html(
      `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>`
    );
  } else {
    $("#nav_content").html(``);
  }
  cryptoData.map((item) => {
    if (item.symbol == keyWord || keyWord == "") {
      $("#nav_content").append(`
    <div class="col-sm-4">
          <div class="card text-start w-100">
            <div class="card-body">
              <div class="form-check float-end form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault_${item.symbol}"
                  oninput=checkSwitch(this.id,cryptoData)
                />
              </div>
              <h5 class="card-title">${item.symbol}</h5>
              <p class="card-text">
                ${item.name}
              </p>
              <a class="btn btn-primary " onclick=checkIfOpened(this.id) id="coin_${item.name}" 
              data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="collapseExample">
                More Info
              </a>
              <div class="collapse" id="collaps${item.name}">
                <div class="card card-body" id="coinInfoCard_${item.name}">
                </div>
              </div>
            </div>
          </div>
        </div>
    `);
    }

    if (item.isSwitched) {
      $("#flexSwitchCheckDefault_" + item.symbol).prop("checked", true);
      // console.log(item.symbol, item.isSwitched);
    } else {
      $("#flexSwitchCheckDefault_" + item.symbol).prop("checked", false);
    }
    item.isSwitched =
      $("#flexSwitchCheckDefault_" + item.symbol).prop("checked") == true;
  });
  // console.log(cryptoData);
};
const liveReports = () => {
  stopInterval();
  checkSwitched();
  if (checkCounter <= allowedCoins && checkCounter > 0) {
    graph = true;
    $("#nav_home").removeClass("btn-primary");
    $("#nav_reports").addClass("btn-primary");
    $("#nav_about").removeClass("btn-primary");
    $("#nav_content").html(`
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
    `);

    /* <canvas id="myChart"></canvas> */

    MakeSwitched();
    graphCoinData = {};
    updateGraph = setInterval(getGraphData, 2000);
  }

  if (checkCounter > allowedCoins) {
    $(".alert_div").html(`<div class="alert alert-warning alert-dismissible">
    pick only five coins
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>`);
  }
  if (checkCounter <= 0) {
    $(".alert_div").html(`<div class="alert alert-warning alert-dismissible">
    pick at least five coins
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
      </div>`);
  }
};
const about = () => {
  stopInterval();
  $("#nav_home").removeClass("btn-primary");
  $("#nav_reports").removeClass("btn-primary");
  $("#nav_about").addClass("btn-primary");
  $("#nav_content").html(` 
  <p class="text-left">
  Name: Gilad Yitzhak
  Project description: 
  \n This project featuring a list of every 
  crypto currency that exists 
  and a search bar to filter the coins.
  \nyou can also read some more info about some of the coins and see a live updating graph of the currency value!
  \n enjoy!
  <img src="./img/profile picture.png" class="float-end" width="300">
     </p>`);
};
const search = () => {
  keyWord = $("#searchBar").val();
  // console.log(keyWord);
  createCards(cryptoData, keyWord);
};
const checkIfOpened = (coinNickId) => {
  coinNickId = coinNickId.split("_")[1];
  if ($("#collaps" + coinNickId).hasClass("show")) {
    $("#collaps" + coinNickId).collapse("hide");
  } else {
    getInfo(coinNickId);
  }
};
const getInfo = async (coinNickId) => {
  $("#coinInfoCard_" + coinNickId)
    .html(`<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>`);
  // coinNickId = coinNickId.split("_")[1];
  if (cache[coinNickId]) {
    let cachedData = cache[coinNickId];
    $("#coinInfoCard_" + coinNickId).html(
      `<img src="${cachedData.img}" width="50"/>
    \n prices:
    \n${cachedData.usdP}
    \n${cachedData.eurP}
    \n${cachedData.ilsP}
    `
    );
    // console.log("got it from the cache");
    if (!$("#collaps" + coinNickId).collapse("show")) {
      $("#collaps" + coinNickId).collapse("show");
    } else {
      $("#collaps" + coinNickId).collapse("hide");
    }
  } else {
    await $.get(coinInfoLink + coinNickId, (data) => {
      // console.log(data);
      var coinInfo = new Object();
      coinInfo.img = data.image.thumb;
      coinInfo.usdP = data.market_data.current_price.usd + "$";
      coinInfo.eurP = data.market_data.current_price.eur + "€";
      coinInfo.ilsP = data.market_data.current_price.ils + "₪";
      // console.log(coinInfo);
      // console.log(coinNickId);
      cache[coinNickId] = coinInfo;
      // console.log(cache);
      setTimeout(() => {
        delete cache[coinNickId];
        // console.log(cache + "deleted");
      }, CACHE_EXPIRATION_TIME);
      $("#coinInfoCard_" + coinNickId).html(
        `<img src="${coinInfo.img}" width="50"/>
      \n prices:
      \n${coinInfo.usdP}
      \n${coinInfo.eurP}
      \n${coinInfo.ilsP}
      `
      );
      if (!$("#collaps" + coinNickId).collapse("show")) {
        $("#collaps" + coinNickId).collapse("show");
      } else {
        $("#collaps" + coinNickId).collapse("hide");
      }
    }).fail(() => {
      $("#coinInfoCard_" + coinNickId).html(`
    no more info
    `);
      if (!$("#collaps" + coinNickId).collapse("show")) {
        $("#collaps" + coinNickId).collapse("show");
      } else {
        $("#collaps" + coinNickId).collapse("hide");
      }
    });
  }
};
const checkSwitch = (coinSymbol) => {
  changeSingleValue(coinSymbol, cryptoData);
  checkSwitched();
  if (checkCounter > allowedCoins) {
    // $("#" + coinSymbol).prop("checked", false);
    $("#modalBody").html(``);
    // liveReportsCoins
    cryptoData.map((item) => {
      if (item.isSwitched) {
        $("#modalBody").append(`
      <div class="col-sm-4">
          <div class="card text-start w-100">
            <div class="card-body">
              <div class="form-check float-end form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault_${item.symbol}"
                  oninput=changeSingleValue(this.id,cryptoData)
                  checked
                />
              </div>
              <h5 class="card-title">${item.symbol}</h5>
              <p class="card-text">
                ${item.name}
              </p>
              <a class="btn btn-primary" onclick=getInfo(this.id) id="coin_${item.name}" data-bs-toggle="collapse"  role="button" aria-expanded="false" aria-controls="collapseExample">
                More Info
              </a>
              <div class="collapse" id="collaps${item.name}">
                <div class="card card-body" id="coinInfoCard_${item.name}">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
      }
    });
    $("#exampleModalLong").modal({ backdrop: "static", keyboard: false });
    $("#exampleModalLong").modal("show");
  }
};

const modalClose = () => {
  $("#exampleModalLong").modal("hide");
  createCards(cryptoData, keyWord);
};
const saveModal = () => {
  let modalSwitchedCoins = 0;

  // liveReportsCoins
  cryptoData.map((item) => {
    if (item.isSwitched) {
      modalSwitchedCoins++;
      // liveReportsCoins.splice(liveReportsCoins.indexOf(item), 1);
    }
  });
  if (modalSwitchedCoins <= allowedCoins) {
    $("#exampleModalLong").modal("hide");
    createCards(cryptoData, keyWord);
  } else {
    alert("pick only five");
  }
};
const changeSingleValue = (coinSymbol, coinArr) => {
  coinArr.map((item) => {
    if (item.symbol == coinSymbol.split("_")[1]) {
      item.isSwitched = !item.isSwitched;
    }
  });
};

const checkSwitched = () => {
  checkCounter = 0;

  cryptoData.map((item) => {
    if (item.isSwitched == true) {
      checkCounter++;
    }
  });
};
const MakeSwitched = () => {
  cryptoGraphData = [];
  cryptoData.map((item) => {
    if (item.isSwitched) {
      cryptoGraphData.unshift(item.symbol);
    }
  });
};
const getGraphData = async () => {
  let coinsGraph = await $.getJSON(
    cryptoGraphLink + cryptoGraphData.join(",") + "&tsyms=USD"
  );
  makeGraphDataPoints(coinsGraph);
};
const makeGraphDataPoints = (coinsGraph) => {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  const currentTime = `${currentHour
    .toString()
    .padStart(2, "0")}:${currentMinute
    .toString()
    .padStart(2, "0")}:${currentSecond.toString().padStart(2, "0")}`;
  cryptoGraphData.map((item) => {
    if (graphCoinData[item]) {
      // console.log("true");
      graphCoinData[item].dataPoints.push({
        x: date,
        y: coinsGraph[item.toUpperCase()].USD,
      });
    } else {
      // console.log("false");
      graphCoinData[item] = {};
      graphCoinData[item].type = "line";
      graphCoinData[item].name = item;
      graphCoinData[item].showInLegend = false;
      graphCoinData[item].xValueFormatString = "D/M-HH:m:s";
      graphCoinData[item].yValueFormatString = "$";
      graphCoinData[item].dataPoints = [
        {
          x: date.toLocaleTimeString(),
          y: coinsGraph[item.toUpperCase()].USD,
        },
      ];
    }
  });
  // console.log(graphCoinData);
  makeGraph(graphCoinData);
};

const makeGraph = (graphCoinData) => {
  var options = {
    exportEnabled: true,
    animationEnabled: false,
    title: {
      text: cryptoGraphData.join(",") + " to USD",
    },
    axisX: {
      title: "",
      ValueFormatString: "D/M-HH:m:s",
    },
    axisY: {
      title: "coin value",
      titleFontColor: "#4F81BC",
      lineColor: "#4F81BC",
      labelFontColor: "#4F81BC",
      tickColor: "#4F81BC",
    },
    axisY2: {
      title: "",
      titleFontColor: "#C0504E",
      lineColor: "#C0504E",
      labelFontColor: "#C0504E",
      tickColor: "#C0504E",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "spline",
        name: "Units Sold",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0 Units",
        dataPoints: [
          { x: new Date(2016, 0, 1), y: 120 },
          { x: new Date(2016, 0, 1), y: 120 },
        ],
      },
    ],
  };
  options.data = [];
  cryptoGraphData.map((item) => {
    options.data.push({
      type: graphCoinData[item].type,
      name: graphCoinData[item].name,
      showInLegend: graphCoinData[item].showInLegend,
      xValueFormatString: graphCoinData[item].xValueFormatString,
      yValueFormatString: graphCoinData[item].yValueFormatString,
      dataPoints: graphCoinData[item].dataPoints,
    });
  });

  $("#nav_content").CanvasJSChart(options);

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
const stopInterval = () => {
  clearInterval(updateGraph);
};
