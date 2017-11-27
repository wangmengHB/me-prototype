const version = require('../package.json').version;
const name = require('../package.json').name;
let filename = `${name}-${version}`;

let tpl = 
`<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>NIS WEBUI</title>
        <link rel="stylesheet" href="./css/${filename}.min.css">
        <!--[if IE]>-->
        <script type="text/javascript" src="./lib/polyfill.min.js"></script>
        <!--<![endif]-->
        <script type="text/javascript" src="./lib/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="./lib/react.production.min.js"></script>
        <script type="text/javascript" src="./lib/react-dom.production.min.js"></script>
        <script type="text/javascript" src="./lib/prop-types.min.js"></script>
        <script type="text/javascript" src="./lib/react-router.min.js"></script>
        <script type="text/javascript" src="./lib/react-router-dom.min.js"></script>
        <script type="text/javascript" src="./lib/moment.min.js"></script>
    </head>
    <body>
        <div id="niswebui-app-container"></div>
        <script type="text/javascript" src="./js/${filename}.min.js"></script>
    </body>
</html>`
;


module.exports = {
    tpl: tpl
};