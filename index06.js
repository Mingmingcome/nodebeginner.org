// 一种错误的使用非阻塞操作的方式
var server = require("./server06");
var router = require("./router03");
var requestHandlers = require("./requestHandlers04");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);