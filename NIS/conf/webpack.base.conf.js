let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const version = require('../package.json').version;
const name = require('../package.json').name;
let outputPath = path.join(__dirname, '../public/', version);

module.exports = {
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(svg|jpeg|png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name]-[hash].[ext]',
                outputPath: 'asset/'
            } 
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }]
    },
    plugins: []
};