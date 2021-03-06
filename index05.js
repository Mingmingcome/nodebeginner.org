// 阻塞与非阻塞
var server = require("./server06");
var router = require("./router03");
var requestHandlers = require("./requestHandlers03");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

/**
 * 打开两个浏览器窗口或者标签页。在第一个浏览器窗口的地址栏中输入http://localhost:8888/start， 但是先不要打开它！
在第二个浏览器窗口的地址栏中输入http://localhost:8888/upload， 同样的，先不要打开它！
接下来，做如下操作：在第一个窗口中（“/start”）按下回车，然后快速切换到第二个窗口中（“/upload”）按下回车。
注意，发生了什么： /start URL加载花了10秒，这和我们预期的一样。但是，/upload URL居然也花了10秒，而它在对应的请求处理程序中并没有类似于sleep()这样的操作！
 */