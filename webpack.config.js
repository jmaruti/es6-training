var path = require('path');
console.log(path.resolve(__dirname) + '/build');

module.exports = {
    entry: ["babel-polyfill", './' +   'main.js'],
    output: {
        path: path.resolve(__dirname) + '/assets/build',
        filename: 'bundle.js',
        publicPath: '/build/'
        
    },

    devServer: {
        contentBase: path.resolve(__dirname) ,
        port: 9090
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    }
}