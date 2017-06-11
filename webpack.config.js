/**
 * Created by ForYouForever on 4/1/2017.
 */

const path = require('path');

    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var ExtractTextPlugin = require('extract-text-webpack-plugin');

    var bootstrapEntryPoints = require('./webpack.bootstrap.config');


    module.exports = {

        entry: {
            app : "./src/app.js",
            bootstrap : bootstrapEntryPoints.prod
        },

        output: {
            path:path.resolve(__dirname,'../assets'),
            filename: '../../public/js/[name].min.js'
           // filename: '[name][hash].min.js'
        },

        module :{
            rules:[
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: ['css-loader','sass-loader']
                    })
                },
                {
                    test:/\.(jpg|png|gif)$/i,
                    use:'file-loader?name=[path][hash:12].[ext]',
                },
                {
                    test: /\.(js|jsx?)$/i,
                    exclude: /node_modules/,
                    loader: 'babel-loader?presets[]=es2015&presets[]=react',

                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
                    // use: "url?limit=10000"
                    use: 'url-loader?name=fonts/[name].[ext]',
                },
                {
                    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                    use: 'file-loader?name=fonts/[name].[ext]',
                },
                { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' }
            ]
        },

        plugins:[
            // new HtmlWebpackPlugin({
            //     // title: "krasdfsh",
            //     // sectionName:"Hi krh!",
            //     minify:{
            //         collapseWhitespace : false
            //     },
            //     //hash:true,
            //     // excludeChunks:['contactes'],
            //     // chunks :["app"],
            //     filename:'../views/index.blade.php',
            //     template: "./src/index.html"
            // }),

            // new HtmlWebpackPlugin({
            //     title: "asdf",
            //     sectionName:"asdfasdf",
            //     minify:{
            //         collapseWhitespace : false
            //     },
            //     hash:true,
            //      chunks:['contactes'],
            //     filename:"contact.html",
            //     template: "./src/second.html"
            // }),

            new ExtractTextPlugin({
                filename:'../../public/css/[name].min.css',
                // filename:'[name][contenthash].min.css',
                //disabled:false,
                allChunks:true,

            })
        ],
        devServer : {
            // contentBase : path.join(__dirname,"dist"),
            compress: false,
            // stats : "errors-only",
            open : false,
            port:8080
        }
    }
