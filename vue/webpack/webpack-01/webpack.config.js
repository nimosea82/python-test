/*
    webpack.config.js webpack的配置文件
    作用：指示webpack 干哪些活，当你运行webpack指令时，会加载里面的配置
    
    loader:1.下载 2使用
    plugins：1.下载 2引入 3使用
*/


//resolve用来拼接绝对路径的方法
const { resolve } = require('path')
//plugins
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    //webpack 配置
    //入口起点
    entry: './src/index.js',
    //输出
    output: {
        filename: 'bundle.js',
        //输出路径,__dirname，nodejs的变量，代表当前文件的目录路径
        path: resolve(__dirname, 'dist')
    },
    //loader配置
    module: {
        rules: [
            //详细loader配置
            {
                //匹配哪些文件,正则表达式，不同文件匹配不同的loader
                test: /\.css$/,
                //使用哪些loader进行处理
                use: [
                    //use执行顺序，从下到上
                    //以下两个包都要下载 npm i css-loader style-loader -D

                    //创建style标签，将js中的css样式资源插入进去，添加到页面head中生效
                    'style-loader',
                    //将css文件变成一个commonjs的模块，加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //比css多了这个less-loader，需要下载：两个包 less和 less-loader
                    //pm i less less-loader -D
                    'less-loader'
                ]
            },
            // {
            //     //打包处理图片资源
            //     test: /\.(jpg|png|gif|bmp)$/,
            //     //需要下载： url-loader，file-loader
            //     //pm i url-loader，file-loader -D
            //     loader: 'url-loader',
            //     options: {
            //         //图片大小小于8kb就会被base64处理
            //         //base64优点：减少请求数量，减轻服务器压力
            //         //缺点：图片体积大
            //         limit: 8 * 1024
            //     }
            // }

            // //打包其他资源，字体图标资源(html,js,img以为资源)
            // {
            //     //test用于检测，exclude用于排除
            //     //需要下载： file-loader
            //     exclude: /\.(css|js|html)$/,
            //     loader:'file-loader'
            // }
        ]
    },
    //plugins插件配置
    plugins: [
        //html-webpack-plugin使用
        //功能：默认会创建一个空的HTML文件，引入打包输出所有的资源
        //需求：需要有结构的HTML文件
        // new HtmlWebpackPlugin({
        //     //复制./src/index.html文件，并自动引入打包的资源
        //     template: './src/index.html'
        // })

    ],
    //模式
    mode: 'development',
    //mode:'production',
}