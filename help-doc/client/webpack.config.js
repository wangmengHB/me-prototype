const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: {
    app: './client/src/app.js',
    vendor: [
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/docs'),
    filename: '[name].js'
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false,
        postcss: [
          require('autoprefixer')({
            browsers: ['last 3 versions']
          })
        ]
      }
    }, {
      test: /\.js$/,
      loader: 'buble-loader',
      exclude: /node_modules/,
      options: {
        objectAssign: 'Object.assign'
      }
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader',
      options: {
        limit: 1024000,
        name: 'css/[name].[ext]?[hash]'
      }
    }, {
      test: /\.md$/,
      loader: 'vue-markdown-loader'
    }]
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
  plugins: [
    new HTMLPlugin({
      chunks: ['app', 'vendor', 'manifest'],
      title: '文档-Demo',
      filename: 'index.html',
      template: './client/src/index.template.html',
      favicon: './client/src/assets/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // Specify the common bundle's name.
    })
  ],
  resolve: {
    extensions: ['.js', '.vue']
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/docsserver': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: {
          '^/docsserver': '/docsserver'
        }
      },
      '/rest': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: {
          '^/rest': '/rest'
        }
      }
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  config.output.filename = 'js/[name].[hash].js'

  config.plugins.push(
    new ExtractTextPlugin('css/styles.[chunkhash].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  )
} else {
  config.devtool = '#source-map'
}

module.exports = config