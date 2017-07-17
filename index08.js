// 处理POST请求
var server = require("./server08");
var router = require("./router05");
var requestHandlers = require("./requestHandlers06");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

/**
 * url:http://localhost:8888/upload
 * 在前端post过来的文本数据
 * 通过response.write成功输出到页面上
 */