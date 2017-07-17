// 以非阻塞操作进行请求响应(正确的方式)：将response对象（从服务器的回调函数onRequest()获取）通过请求路由传递给请求处理程序
var server = require("./server07");
var router = require("./router04");
var requestHandlers = require("./requestHandlers05");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);