var missions = [];
const getData = () => {
  var mission = document.getElementById("missionBar").value;
  missions.push(mission);
  console.log(missions);
  saveData();
  retriveData();
  createTable();
};
const saveData = () => {
  localStorage.setItem("missions", JSON.stringify(missions));
};
const retriveData = () => {
  missions = JSON.parse(localStorage.getItem("missions"));
};
const createTable = () => {
  var res = "";
  missions.map((item) => {
    res += `<tr>
    <td>${item}</td>
    </tr>
    `;
  });
  document.getElementById("tBody").innerHTML = res;
};
