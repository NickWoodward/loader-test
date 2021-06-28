const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");


module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        
    },
    module: {
        rules: [
            
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: 'sprite.svg'
                        },
                    },
                    'svgo-loader',
                ]
            },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index']
        }),
        new SpriteLoaderPlugin(),
    ]
}