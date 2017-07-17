// 一个基础的HTTP服务器
var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World!!");
    response.end();
}).listen(8888);