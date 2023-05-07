String.prototype.returnLast = function () {
  const lastObj = this.split(" ");
  return lastObj[lastObj.length - 1];
};
String.prototype.makeSpace = function () {
  var res = "";
  for (var index = 0; index <= this.length - 1; index++) {
    res += this[index] + " ";
  }
  return res;
};
String.prototype.reverseMe = function () {
  var res = "";
  for (var index = this.length - 1; index >= 0; index--) {
    res += this[index];
  }
  return res;
};
const lastObj = () => {
  var answer = document.getElementById("text").value;
  //console.log(answer.returnLast());
  document.getElementById("res").innerHTML = `${answer.reverseMe()}`;
};
