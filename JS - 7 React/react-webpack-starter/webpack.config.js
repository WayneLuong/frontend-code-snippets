const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entrypoint for react
    entry: './src/main.js',
    output: {
        //output the JSX to dist folder with a bundle.js
        path:path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    //loader
    module: {
        rules: [
            {
                //regular expression looks for .js .jsx
                test:/\.js$/,
                //dont look in node modules folder
                exclude: /node_modules/,
                use: {
                    //use this loader for jsx to js
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //looks in index.html for the template
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}