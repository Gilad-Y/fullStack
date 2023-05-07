const url = "https://restcountries.com/v3.1/";
// const continentsList = [
//   "Africa",
//   "Antarctica",
//   "Asia",
//   "Europe",
//   "North America",
//   "Oceania",
//   "South America",
//   "americas",
// ];
const criterion = () => {
  let keyWord = $("#search_bar").val();
  if (keyWord == "") {
    keyWord = "all";
  } else {
    keyWord = "name/" + keyWord;
  }
  getData(keyWord);
};
const getData = async (keyWord) => {
  const reqCountries = await $.get(url + keyWord);
  $("#countriesForm")[0].reset();
  getStats(reqCountries);
};
const getStats = (reqCountries) => {
  let totalCounties = reqCountries.length;
  let totalPopulation = 0;
  let continents = {};
  let popTableData = `<table>
  <thead>
    <th>country name</th>
    <th>Number of citizens</th>
  </thead><tbody>`;
  let regionTableData = `<table>
  <thead>
    <th>Region</th>
    <th>Number of countries</th>
  </thead>
  <tbody>`;
  console.log(reqCountries);
  reqCountries.map((item) => {
    totalPopulation += item.population;
    popTableData += `<tr>
    <td>${item.name.common}</td>
    <td>${item.population}</td>
    <tr>`;
    if (continents[item.continents]) {
      continents[item.continents]++;
    } else {
      continents[item.continents] = 1;
    }
  });
  const continentsData = Object.keys(continents);
  if (continentsData)
    continentsData.map((item) => {
      if (continents[item]) {
        regionTableData += `<tr>
          <td>${item}</td>
          <td>${continents[item]}</td>
          </tr>
          `;
      }
    });
  popTableData += `</tbody></table>`;
  regionTableData += `</tbody></table>`;
  $("#res").html(``);
  $("#res").append(`
  Total countries result:${totalCounties}
  \nTotal Countries Population:${totalPopulation}
  \nAverage Population: ${Math.round(totalPopulation / totalCounties)}
  `);
  $("#res").append(popTableData);
  $("#res").append(regionTableData);
  console.log(currencies);
};
