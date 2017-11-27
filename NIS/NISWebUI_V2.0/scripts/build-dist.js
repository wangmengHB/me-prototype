let tpl = require('./index_html_tpl.js').tpl;
let fs = require('fs');
let fse = require('fs-extra');
let path = require('path');
const version = require('../package.json').version;
const name = require('../package.json').name;

let resource_path = path.join(__dirname, '../public/release');
let dest_path = path.join(__dirname, `../dist/${version}`);
let lib_src_path = path.join(__dirname, '../lib');
let lib_dest_path = path.join(__dirname, `../dist/${version}/lib`);
let filename = 'index.html';

// empty the release folder first
fse.emptyDir(dest_path)
    .then(() => {

        if (!fs.existsSync(resource_path)) {
            console.error('resource files is not built.');
            return;
        }

        // copy resource folder with version number to release folder
        // copy lib folder to release folder
        // create '../dist/${name}/index.html'
        fse.copy(resource_path, dest_path)
            .then(() => {
                fse.copy(lib_src_path, lib_dest_path).then(() => {
                    createIndexHtml();
                    console.log('build success!');
                }).catch(err => console.error(err));
            }).catch(err => console.error(err));

    }).catch(err => {
        console.error(err)
    });


function createIndexHtml() {
    let file_ws = fs.createWriteStream(path.join(dest_path, filename));
    file_ws.write(tpl);
    file_ws.end();
};



