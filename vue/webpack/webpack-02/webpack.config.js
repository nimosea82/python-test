//webpack配置文件

//resolve用来拼接绝对路径的方法
// const { resolve } = require('path')
const path = require('path')

//webpack 配置
module.exports = {    
    //入口起点
    entry: './src/index.js',
    //出口地址和名称
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
         //详细loader配置
        rules:[
            //css配置
            {
                test: /\.css$/,
                //使用哪些loader进行处理
                use: [
                    'style-loader',
                    'css-loader'
                ]  
            }
        ]
    },

    mode:'development'

}