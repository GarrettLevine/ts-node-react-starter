const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        bundle: ['./src/index.tsx', './src/scss/main.scss'],
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/public`,
        publicPath: 'http://localhost:8080/',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [
            {
                oneOf: [
                    { 
                        test: /\.(js|jsx|ts|tsx)$/,
                        loaders: [ 'babel-loader', 'ts-loader' ],
                        include: path.resolve('src')
                    },
                    {
                        test: /\.scss$/,
                        loaders: ['style-loader', 'css-loader', 'sass-loader'],
                    },
                ]
            }
        ],
    },
    devServer: {
        contentBase: `${__dirname}/public`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        historyApiFallback: true,
        hot: true,
        publicPath: 'http://localhost:8080',
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000/'
            },
        ],
        stats: {
            chunkModules: false,
            colors: true,
            path: path.resolve(__dirname, 'public'),
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
              NODE_ENV: JSON.stringify('development'),
            },
          }),
        new WriteFilePlugin({ log: true }),
    ]
};
