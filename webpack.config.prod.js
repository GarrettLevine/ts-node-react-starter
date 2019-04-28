const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: ['./src/index.tsx', './src/scss/main.scss'],
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/public`,
        publicPath: './',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loaders: [ 'babel-loader', 'ts-loader' ],
                include: path.resolve('src')
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.template.html',
        filename: 'index.html',
        appMountId: 'app',
        inject: true,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new ExtractTextPlugin({
        allChunks: true,
        filename: (getPath) => { // eslint-disable-line
          return getPath('css/[name].css').replace('css/js', 'css');
        },
      }),
      new WriteFilePlugin({ log: true }),
    ],
};
