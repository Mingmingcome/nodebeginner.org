// 处理POST请求
var server = require("./server08");
var router = require("./router05");
var requestHandlers = require("./requestHandlers07");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);

/**
 * url:http:localhost:8888/show
 * 通过访问URL，可以显示预先准备好的在D:\tmp\test.png的图片
 */