// const colors = {
//   black: "#000000",
//   cyan: "#05c4b2",
//   orange: "#e37448",
//   pink: "#dabfc4",
//   brown: "#5a2815",
//   purple: "#533c6c",
//   lime: "#50c878",
//   yellow: "#fff61e",
//   blue: "#5167a3",
//   green: "#527d65",
// };
const colors = [
  "#000000",
  "#05c4b2",
  "#e37448",
  "#dabfc4",
  "#5a2815",
  "#533c6c",
  "#50c878",
  "#fff61e",
  "#5167a3",
  "#527d65",
];
let speed = 100;
const getData = () => {
  speed = document.getElementById("myRange").value;
};

const changeColor = () => {
  let colorNum = Math.floor(Math.random() * 10);
  document.body.style.background = colors[colorNum];
};

setInterval(changeColor, speed * 2);
