

// This is just a simple file server sample for test
// Formal server should be based on express framework


var http = require("http"),
    url  = require("url"),
    path = require("path"),
    fs   = require("fs");



process.chdir('../../../');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), pathname);
    if (pathname.indexOf('.action') > -1) {
        handleData(pathname);
    } else {
        handleFile(filename);
    }
   
    function handleFile(filename) {
        fs.exists(filename,function(exists){
            if(exists){
                switch(path.extname(filename)){
                    case ".html":
                        res.writeHead(200, {"Content-Type": "text/html"});
                        break;
                    case ".js":
                        res.writeHead(200, {"Content-Type": "text/javascript"});
                        break;
                    case ".css":
                        res.writeHead(200, {"Content-Type": "text/css"});
                        break;
                    case ".gif":
                        res.writeHead(200, {"Content-Type": "image/gif"});
                        break;
                    case ".jpg":
                        res.writeHead(200, {"Content-Type": "image/jpeg"});
                        break;
                    case ".png":
                        res.writeHead(200, {"Content-Type": "image/png"});
                        break;
                    default:
                        res.writeHead(200, {"Content-Type": "application/octet-stream"});
                }

                fs.readFile(filename,function (err,data){
                    res.end(data);
                });
            } else {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("<h1>404 Not Found</h1>");
            }
        });       
    }

    function handleData(url) {
        var fname = url.substring(6);
        var filename = process.cwd() + '/nodejs/app/PatientDoseManagement/json/';
        filename = path.join(filename, fname);
        fs.exists(filename,function(exists){
            if(exists){
                res.writeHead(200, {"Content-Type": "application/json"});
                fs.readFile(filename,function (err,data){
                    res.end(data);
                });
            } else {
                res.writeHead(204, {"Content-Type": "application/json"});
                res.end("");
            }
        }); 
    }

    

}).listen(8000);




console.log("Server running at http://localhost:8000/index/PatientDoseManagementWeb.html");