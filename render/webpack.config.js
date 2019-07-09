const path  = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const CopyPlugin = require( "copy-webpack-plugin" );

const assetsFolder = path.join( __dirname, "assets" );
const distFolder = path.join( __dirname, "dist" );

const config = {
    mode: "development",
    target: "electron-renderer",

    entry: path.join( __dirname, "src", "index" ),

    devtool: "inline-source-map",

    output: {
        path: distFolder,
        filename: "bundle.js",
        publicPath: distFolder
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
        ),
        new CopyPlugin([
            { from: path.join( assetsFolder, "css", "main.css" ), to: path.join( distFolder, "css", "main.css"  ) },
            { from: path.join( assetsFolder, "css", "icon.css" ), to: path.join( distFolder, "css", "icon.css"  ) },
            { from: path.join( assetsFolder, "fonts", "my-font.woff2" ), to: path.join( distFolder, "fonts", "my-font.woff2"  ) },
          ])
    ]
};

module.exports = config;