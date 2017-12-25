let path = require('path');
let fse = require('fs-extra');

const src_filename = './index.html';
const dest_filename = './public/dev/index.html';

const src_filename2 = './sockjs-0.3.js';
const dest_filename2 = './public/dev/sockjs-0.3.js';

const src_filename3 = './stomp.js';
const dest_filename3 = './public/dev/stomp.js';

Promise.all([
    fse.copy(src_filename, dest_filename),
    fse.copy(src_filename2, dest_filename2),
    fse.copy(src_filename3, dest_filename3)
]).then(() => console.log('copy files sucess!'))
    .catch((err) => console.error(err))

