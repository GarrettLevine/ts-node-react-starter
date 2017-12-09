const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        path: `${__dirname}/public`,
        publicPath: 'http://localhost:8080/',
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    devServer: {
        stats: {
            chunkModules: false,
            colors: true,
            path: path.resolve(__dirname, 'public'),
        },
        contentBase: `${__dirname}/public`,
        historyApiFallback: true,
        publicPath: 'http://localhost:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        proxy: {
            '/': {
                target: 'http://localhost:3000',
            },
        },
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            filename: 'index.html',
            appMountId: 'app',
            inject: true,
        }),
        new WriteFilePlugin({ log: true }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }),
    ]
};
