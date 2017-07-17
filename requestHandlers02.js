// 让请求处理程序作出响应：不好的实现方式return
function start() {
    console.log("Request handler for 'start' was called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler for 'upload' was called.")
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;