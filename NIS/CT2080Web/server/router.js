let fs = require('fs');
let path = require('path');




let handleFile = (filename, req, res) => {
    
    fs.readFile(filename, "binary", function (err, file) {
        if (err) {
            res.writeHead(200, {
                "Content-Type": "text/plain"
            });
            res.write(err + "\n");
            res.end();
            return;
        }
        res.writeHead(200, {});
        res.write(file, "binary");
        res.end();
    });
};


let handleConfig = (req, res) => {
    let filename = path.join(__dirname, './mock/config.json');
    handleFile(filename, req, res);
}

let handleI18n = (req, res) => {
    let filename = req.params.filename;
    filename = path.join(__dirname, `./mock/${filename}`);
    console.log(filename);
    handleFile(filename, req, res);
}



module.exports = function (app) {
    app.get('/resources/config.json', (req, res) => {
        handleConfig(req, res);
    });

    app.get('/resources/Language/:filename', (req, res) => {
        handleI18n(req, res);
    });

}