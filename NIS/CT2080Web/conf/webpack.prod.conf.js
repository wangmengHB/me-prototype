let path = require('path');
let webpack = require('webpack');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: {
        "ct2080web": './src/index.js'
    },
    output: {
        path: path.join(__dirname, '../public/dist'),
        filename: 'js/[name].js',
        publicPath: '/home/resources/ct2080/'
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /.(css|scss)$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /.(png|jpg|jpeg|svg|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[name]-[hash].[ext]',
                outputPath: 'asset/'
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new UglifyJSPlugin()
    ],
}