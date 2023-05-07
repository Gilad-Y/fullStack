var foods = ["milk", "cookie", "apple", "fish"];
var res = "";
foods.map((item) => {
  res += " " + item;
});
document.getElementById("res").innerHTML = res;
const updateList = () => {
  var keyWord = document.getElementById("keyWord").value;
  var res = "";
  foods
    .filter((item) => item.includes(keyWord))
    .map((item) => (res += item + "<br/>"));
  document.getElementById("res").innerHTML = res;
};
