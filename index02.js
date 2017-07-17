// 在主文件中传递route.js中的route函数
var server = require("./server04");
var router = require("./router01");

server.start(router.route);
/**
 * 添加了路由模块的命令行结果
 * 访问的URL：http://localhost:8888/hello
 * D:\GitRepository\nodebeginner.org>node index02.js
 * Server has started.
 * Request for /hello received.
 * About to route a request for /hello
 * Request for /favicon.ico received.
 * About to route a request for /favicon.ico
 */