// 创建自己的模块：
// 把某段代码变成模块意味着我们需要把我们希望提供其功能的部分 导出 到请求这个模块的脚本。
var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request received.")
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World!!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);

    console.log("Server has started.")
}

// 提供给index.js启动服务器模块的入口
exports.start = start;