// 将一系列请求处理程序通过一个对象来传递
var server = require("./server05");
var router = require("./router02");
var requestHandlers = require("./requestHandlers01");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

/**
 * 路由到具体的请求处理程序
 * Server has started.
Request for / received.
About to route a request for /
Request handler for 'start' was called.
Request for /favicon.ico received.
About to route a request for /favicon.ico
No a request handler found for /favicon.ico
Request for /start received.
About to route a request for /start
Request handler for 'start' was called.
Request for /favicon.ico received.
About to route a request for /favicon.ico
No a request handler found for /favicon.ico
 */
