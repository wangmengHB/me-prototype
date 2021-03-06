let path = require('path');
module.exports = {
    entry: {
        "ct2080web": './src/index.js'
    },
    output: {
        path: path.join(__dirname, '../public/dev'),
        filename: 'js/[name].js',
        publicPath: '/',
        // publicPath: '/home/resources/ct2080/'
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
    }
}