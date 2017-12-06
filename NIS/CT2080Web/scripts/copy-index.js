let path = require('path');
let fse = require('fs-extra');

const src_filename = './index.html';
const dest_filename = './public/dev/index.html';

fse.copy(src_filename, dest_filename)
    .then(() => console.log('copy index.html sucess!'))
    .catch((err) => console.error(err))
