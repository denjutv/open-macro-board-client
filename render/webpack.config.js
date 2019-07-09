const path  = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

const config = {
    mode: "development",
    target: "electron-renderer",

    entry: path.join( __dirname, "src", "index" ),

    devtool: "inline-source-map",

    output: {
        path: path.join( __dirname, "dist" ),
        filename: "bundle.js",
        publicPath: ""
    },

    module: {
        rules:
        [
            {
                test: /\.(js|jsx)?/,
                include: path.join( __dirname, "src" ),
                loader: "babel-loader"
            }
        ]
    },

    plugins:
    [
        new HtmlWebpackPlugin(
            {
                title: "Open Macro Board Client",
                template: path.join( __dirname, "template", "index.html" )
            }
        )
    ]
};

module.exports = config;