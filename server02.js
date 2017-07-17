// 基于事件驱动的回调
var http = require("http");

function onRequest(request, response) {
    console.log("Request received.")
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World!!");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.")
/*
在 onRequest （我们的回调函数）触发的地方，我用 console.log 输出了一段文本。在HTTP服务器开始工作之后，也输出一段文本。
当我们与往常一样，运行它node server.js时，它会马上在命令行上输出“Server has started.”。当我们向服务器发出请求（在浏览器访问http://localhost:8888/ ），“Request received.”这条消息就会在命令行中出现。
这就是事件驱动的异步服务器端JavaScript和它的回调啦！
（请注意，当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico )
实际命令行效果：
Server has started.
Request received.
Request received.
*/
