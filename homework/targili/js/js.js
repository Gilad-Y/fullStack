var line = [];
var show = true;
const getData = () => {
  var name = document.getElementById("name").value;
  line.push(name);
  console.log(line);
  document.getElementById("lineForm").reset();
  makeTable();
};
const makeTable = () => {
  var res = "";
  for (var index = 0; index <= line.length - 1; index++) {
    res += ` <tr> <td>${index + 1}</td>
    <td>${line[index]}</td></tr>`;
  }
  document.getElementById("tableLine").innerHTML = res;
};
const nextNumber = () => {
  line[0] == undefined
    ? (document.getElementById("nextNumber").innerHTML = "free")
    : (document.getElementById("nextNumber").innerHTML = line[0]);
  line.shift();
  makeTable();
  setTimeout(() => {
    clearInterval(blink);
    document.getElementById("nextNumber").style.visibility = "visible";
  }, 5000);
};

var blink = setInterval(() => {
  show = !show;
  show == true
    ? (document.getElementById("nextNumber").style.visibility = "hidden")
    : (document.getElementById("nextNumber").style.visibility = "visible");
}, 500);
