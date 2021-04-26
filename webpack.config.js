const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        historyApiFallback: true,
        port: 5050
    },
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.css', '.scss', '.sass'],
    }
}
