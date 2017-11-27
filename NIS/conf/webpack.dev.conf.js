
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let merge = require('webpack-merge');
let base = require('./webpack.base.conf');
let path = require('path');
let outputPath = path.join(__dirname, '../public/dev');
let name = require('../package.json').name;
let publicPath = require('../package.json').config.dev.publicPath;
let config = {
    entry: {
        [name]: './src/app.js',
    },
    output: {
        path: outputPath,
        filename: 'js/[name].js',
        publicPath: publicPath
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ]
};

module.exports = merge(base, config);
