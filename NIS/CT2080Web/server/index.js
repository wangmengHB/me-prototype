
let express = require('express');
let app = express();
let http = require('http');
let path = require('path');
let port = 3005;
let publicPath = 'http://localhost:3005/';


let currentDir = path.join(process.cwd(), './public/dev');
app.use(express.static(currentDir));
require('./router.js')(app);
let server = http.createServer(app);
server.listen(port);

console.log(publicPath);


// mock a websocket server

var ws = require("nodejs-websocket")

// Scream server example: "hi" -> "HI!!!"
var ws_server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received " + str);
        setInterval(() => {
            conn.sendText('server message!!!');
        }, 5000);
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(3006);