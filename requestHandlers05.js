// 传递了一个response对象
var exec = require("child_process").exec;

function start(response) {
    console.log("Request handler for 'start' was called.");

    exec("find /",
        { timeout: 10000, maxBuffer: 20000 * 1024 },
        function (error, stdout, stderr) {
            console.log(1);
            setTimeout(function () {
                console.log(2);
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(stdout);
                response.end();
            }, 10000);
        });
}

function upload(response) {
    console.log("Request handler for 'upload' was called.")
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;

/**
 * 按照原来那片博客的代码，"find /"这个命令执行的时间没有10秒
 * 用了setTimeout之后，可以看到并行的效果
 * 当先访问/start，再访问/upload时，请求处理程序结束的顺序会是/upload->/start
 * Request for /start received.
About to route a request for /start
Request handler for 'start' was called.
1
Request for /upload received.
About to route a request for /upload
Request handler for 'upload' was called.
2
 */