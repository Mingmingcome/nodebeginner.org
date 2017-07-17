// 引入了一个新的Node.js模块child_process。实现非阻塞操作：exec()
var exec = require("child_process").exec;

function start() {
    console.log("Request handler for 'start' was called.");
    var content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
        console.log("content:" + content);
    });
    return content;
}

function upload() {
    console.log("Request handler for 'upload' was called.")
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;

/**
 * 上述代码是非常直观的： 创建了一个新的变量content（初始值为“empty”），执行“ls -lah”命令，将结果赋值给content，最后将content返回。
和往常一样，我们启动服务器，然后访问“http://localhost:8888/start” 。
之后会载入一个漂亮的web页面，其内容为“empty”。
 */