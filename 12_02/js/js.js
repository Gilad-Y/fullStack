var shoppingList = [];
const getData = () => {
  var pName = document.getElementById("name").value;
  var qty = document.getElementById("qty").value;
  var price = document.getElementById("price").value;
  var img = document.getElementById("img").value;
  console.log(pName, qty, price, img);

  var list = new Object();
  list.name = pName;
  list.qty = qty;
  list.price = price;
  list.img = img;
  shoppingList.push(list);
  console.log(list);
  document.getElementById("listForm").reset();
  createTable();
};

const createTable = () => {
  var res = " ";
  var fPrice = 0;
  for (var index = shoppingList.length - 1; index >= 0; index--) {
    fPrice += shoppingList[index].qty * shoppingList[index].price;
    res += `<tr>
        <td><img src="${shoppingList[index].img}" width=100"</td>
    <td> <input type="checkbox" id="item" />${shoppingList[index].name}</td>
    <td>${shoppingList[index].qty}</td>
    <td>${shoppingList[index].price}</td>
    <td>${shoppingList[index].qty * shoppingList[index].price}</td>
    </tr>
    <tr>${fPrice}</tr>
    `;
  }
  document.getElementById("res").innerHTML = res;
};
