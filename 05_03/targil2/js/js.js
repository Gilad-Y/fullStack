let colors = [];
let counter = 0;
let currentColor;
const doAlert = () => {
  colors.map((item) => {
    counter++;
    alert(
      "total times:" +
        colors.length +
        "\nevent index:" +
        counter +
        "\ncurrent color:" +
        currentColor +
        "\nevent color:" +
        item
    );
  });
};
const changeColor = () => {
  currentColor = document.getElementById("colorInput").value;
  colors.push(currentColor);
};
const myTimeOut = setTimeout(doAlert, 5000);
