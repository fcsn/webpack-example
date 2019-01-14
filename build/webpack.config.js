const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8080,
        historyApiFallback: true, // index (/) 가 아닌 경로로 직접 접근할 수 있도록 true 값으로 설정합니다.
    },
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './build/index.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1.0',
            },
            chunks: ['app'],
        }),
    ],
    // context: path.join(__dirname, '..', '/'),
}
