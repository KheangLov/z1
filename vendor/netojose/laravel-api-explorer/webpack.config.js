const path = require("path")

module.exports = {
    entry: "./resources/assets/js/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "resources/assets/build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg/,
                use: {
                    loader: "svg-url-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve("src")
    }
}
