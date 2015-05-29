var path = require('path');
module.exports = {
    entry: './demo/main.js',
    output: {
        path: './demo',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};