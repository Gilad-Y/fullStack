// let country = [
//   "israel",
//   "usa",
//   "spain",
//   "brazil",
//   "england",
//   "paris",
//   "poland",
//   "mexico",
//   "switzerland",
//   "norway",
// ];
// const print = () => {
//   country.map((item) => {
//     $(body).html("<div >" + item + "</div>");
//   });
// };
// const countries = [
//   "Israel",
//   "Jordan",
//   "Egypt",
//   "China",
//   "USA",
//   "Mexico",
//   "France",
//   "Finland",
//   "Iran",
//   "Iraq",
//   "Italy",
//   "Japan",
// ];

const allCountriesURL = "https://restcountries.com/v3.1/all";
let allCountries = [];
let region = {};
// let europe = 0;
// let asia = 0;
// let america = 0;
// let oceania = 0;
// let africa = 0;
//document ready
$(async () => {
  allCountries = await $.get(allCountriesURL);
  console.log(allCountries);
  createCountries(allCountries);
});

const createCountries = (allCountries) => {
  allCountries.map((item) => {
    $("#container").append(
      `<div class="Box">
      <b>${item.name.common} </b><b>${item.population}</b><hr/>
      <b>${item.capital}</b>
        <img src="${item.flags.png}" width="100"/>
      </div>`
    );
    if (!region[item.region]) {
      region[item.region] = 1;
    } else {
      region[item.region] = region[item.region] + 1;
    }
    // console.log(item.region);
    // switch (item.region) {
    //   case "Europe":
    //     europe++;
    //     break;
    //   case "Asia":
    //     asia++;
    //     break;
    //   case "Americas":
    //     america++;
    //     break;
    //   case "Oceania":
    //     oceania++;
    //     break;
    //   case "Africa":
    //     africa++;
    //     break;
    // }
  });
  $("#res").append(`<td>${europe}</td>
  <td>${asia}</td>
  <td>${america}</td>
  <td>${oceania}</td>
  <td>${africa}</td>
  `);
};
console.log();
// $(function () {
//   //   countries.map((item) =>
//   //     $("#container").append(`<div class="Box"><b>${item}</b><hr/></div>`)
//   //   );
//   getCountries();
// });
