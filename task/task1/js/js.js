var product = [];
const getData = () => {
  var pName = document.getElementById("pName").value;
  var pPrice = document.getElementById("pPrice").value;
  var reqCategory = document.getElementById("reqCategory").value;
  var pURL = document.getElementById("pURL").value;
  var newProduct = new Object();
  newProduct.name = pName;
  newProduct.price = pPrice;
  newProduct.category = reqCategory;
  newProduct.url = pURL;
  product.push(newProduct);
  console.log(newProduct);
  document.getElementById("productForm").reset();
  makeTable();
};
const makeTable = () => {
  var result = "";
  product.map((item) => {
    result += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.category}</td>
            <td><img src="${item.url}" width="100"/></td>
        </tr>
    `;
  });
  document.getElementById("cartTable").innerHTML = result;
};
