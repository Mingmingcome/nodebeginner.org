var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

// function upload(response, request) {
//     console.log("Request handler 'upload' was called.");

//     var form = new formidable.IncomingForm();

//     // form.uploadDir = "tmp";//必须设置
//     console.log("About to parse.");
//     form.parse(request, function (error, fields, files) {
//         console.log("parsing done.");
//         console.log(files.upload.path);
//         fs.renameSync(files.upload.path, "./tmp/test.png");
//         var is = fs.createReadStream(files.upload.path);
//         var os = fs.createWriteStream("D:\\tmp\\test.png");
//         is.pipe(os);
//         is.on('end', function () {
//             fs.unlinkSync(files.upload.path);
//         });
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write("received image:<br/>");
//         response.write("<img src='/show' />");
//         response.end();
//     });
// }

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function (error, fields, files) {
        console.log("parsing done");
        fs.renameSync(files.upload.path, "/tmp/test.png");
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.png", function (err, file) {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write(err + "\n");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;

/**
 * TypeError: Cannot read property 'path' of undefined
    at D:\GitRepository\nodebeginner.org\requestHandlers08.js:34:35
    at IncomingForm.<anonymous> (D:\GitRepository\nodebeginner.org\node_modules\formidable\lib\incoming_form.js:105:9)
    at emitNone (events.js:86:13)
    at IncomingForm.emit (events.js:185:7)
    at IncomingForm._maybeEnd (D:\GitRepository\nodebeginner.org\node_modules\formidable\lib\incoming_form.js:553:8)
    at QuerystringParser.parser.onEnd (D:\GitRepository\nodebeginner.org\node_modules\formidable\lib\incoming_form.js:450:10)
    at QuerystringParser.end (D:\GitRepository\nodebeginner.org\node_modules\formidable\lib\querystring_parser.js:25:8)
    at IncomingMessage.<anonymous> (D:\GitRepository\nodebeginner.org\node_modules\formidable\lib\incoming_form.js:130:30)
    at emitNone (events.js:86:13)
    at IncomingMessage.emit (events.js:185:7)
 */