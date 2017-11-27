let express = require('express');
let app = express();
let http = require('http');
let path = require('path');
let port = require('../package.json').config.dev.port;
let publicPath = require('../package.json').config.dev.publicPath;


let currentDir = path.join(process.cwd(), './public/dev');
app.use(express.static(currentDir));
require('./router.js')(app);
let server = http.createServer(app);
server.listen(port);

console.log(publicPath);