var http = require("http");
httpPort = 8080;
var dt = require("./Functions/DateFunctions");
var url = require("url");
http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html" });
    var query = url.parse(request.url, true).query;
    response.end(`
        name: ${query.name}
        <br>city: ${query.city}
        <br>license: ${query.lic}   
        <br>${new Date().toLocaleDateString()}
        <br>${new Date().toLocaleTimeString()}
        <br>${new Date().toLocaleString("he-IL")}
        
    `);
    //   response.end(
    //     `hello gilad ,you born in 06/06/2001 and you are ${dt.myBday(
    //       request.url
    //     )}years old`
    //   );
  })
  .listen(httpPort);
console.log("webserver:http:localhost:" + httpPort);
// console.log(new Date().toLocaleDateString());
