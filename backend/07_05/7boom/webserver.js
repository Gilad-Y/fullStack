var myResult = " ";
for (let counter = 1; counter <= 1000; counter++) {
  myResult += counter % 7 == 0 ? "boom" : counter;
  myResult += " ";
}
var fs = require("fs");
fs.writeFile("7boomResult.txt", myResult, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
