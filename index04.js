// 让请求处理程序作出响应：不好的实现方式return
var server = require("./server06");
var router = require("./router03");
var requestHandlers = require("./requestHandlers02");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

/**
 * 请求http://localhost:8888/start,浏览器会输出“Hello Start”，请求http://localhost:8888/upload会输出“Hello Upload”,而请求http://localhost:8888/foo 会输出“404 Not found”。
 */
