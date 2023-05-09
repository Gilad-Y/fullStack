var http = require("http");
var url = require("url");
var fs = require("fs");
const port = 4000;
http
  .createServer((request, response) => {
    //get query
    let query = url.parse(request.url, true);
    //het path name
    let myPath = "." + query.path;
    console.log(myPath);
    fs.readFile(myPath, (err, data) => {
      if (err) {
        response.writeHead(404, { "content-Type": "text/html" });
        return response.end("page not found");
      } else {
        response.writeHead(200, { "content-Type": "text/html" });
        return response.end(data);
      }
    });
  })
  .listen(port);
