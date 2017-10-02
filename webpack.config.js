const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        publicPath: 'dist',
        path: path.resolve('dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules'],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loaders: [ 'babel-loader', 'ts-loader' ],
                include: path.resolve('src')
            },
        ],
    },
};
