const coinDataLink = "https://api.coingecko.com/api/v3/coins/list";
const coinInfoLink = "https://api.coingecko.com/api/v3/coins/";
let cryptoData = [];
let cryptoInfo = [];
let coinNick;
let coinName;
let keyWord = "";
$(async () => {
  cryptoData = await $.get(coinDataLink);
  cryptoData = cryptoData.slice(0, 100);
  console.log(cryptoData);
  createCards(cryptoData, keyWord);
});
const createCards = (cryptoData, keyWord) => {
  $("#nav_home").addClass("active");
  $("#nav_reports").removeClass("active");
  $("#nav_about").removeClass("active");
  $("#nav_contant").html(``);
  cryptoData.map((item) => {
    coinNick = item.symbol;
    coinName = item.name;
    if (coinNick == keyWord || keyWord == "") {
      $("#nav_contant").append(`
    <div class="col-sm-4">
          <div class="card text-start w-100">
            <div class="card-body">
              <div class="form-check float-end form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
              <h5 class="card-title">${coinNick}</h5>
              <p class="card-text">
                ${coinName}
              </p>
              <a class="btn btn-primary" onclick="getInfo()" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                More Info
              </a>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
    `);
    }
  });
};
const liveReports = () => {
  $("#nav_home").removeClass("active");
  $("#nav_reports").addClass("active");
  $("#nav_about").removeClass("active");
  $("#nav_contant").html(``);
  console.log("work!!!!");
};
const about = () => {
  $("#nav_home").removeClass("active");
  $("#nav_reports").removeClass("active");
  $("#nav_about").addClass("active");
  $("#nav_contant").html(``);
  console.log("work!!!!");
};
const search = () => {
  keyWord = $("#searchBar").val();
  console.log(keyWord);
  createCards(cryptoData, keyWord);
};
const getInfo = () => {
  console.log("work");
};
