// requestHandlers模块：请求处理程序
function start() {
    console.log("Request handler for 'start' was called.");
}

function upload() {
    console.log("Request handler for 'upload' was called.")
}

exports.start = start;
exports.upload = upload;