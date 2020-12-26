const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'postcss-loader'],
            },
        ],
    },
}