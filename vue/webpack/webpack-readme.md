# webpack

webpack案例项目

## webpack4安装

全局安装：npm i webpack webpack-cli -g

### 建立webpack环境

+ 项目名称：webpack-demo

+ 初始化npm安装包:npm init -y
  - -y代表默认文件名字初始化
  - 初始化后本地目录生成一个nmp包配置文件package.json
  - 以后新建类似项目，可以直接复制package.json，这样可以自动下载包

+ 如果package.json已存在可以应用以下命令进行包安装
  - npm一键安装package.json里的所有依赖文件：`npm install`
  - 只安装package.json里的dependencies（运行依赖）文件:npm `install --dependencies`
  - 只安装开发依赖:`npm install --devDependencies`
  - 更新依赖包到最新版本:npm install -g npm-check-updates
  
+ 本地安装webpack
  - 我们在项目中本地安装webpack：npm i webpack webpack-cli -D

### 建立文件夹目录

+ src
  - 建立目录：css、js、images等
  - 建立index.js、index.html
+ dist
  - 该目录为输出目录



### 测试打包

+ webpack打包：

 直接运行`webpack --mode development`或者`webpack --mode production`

这样便会默认进行打包，入口文件是`'./src/index.js'`，输出路径是`'./dist/main.js'`，其中src目录即index.js文件需要手动创建，而dist目录及main.js会自动生成
这样便能够实现将`'./src/index.js'`打包成`'./dist/main.js'`。 

> 打包运行错误时解决方案：

win + f 找到powershell，点击以管理员运行，输入 set-ExecutionPolicy RemoteSigned，
最后通过 get-ExecutionPolicy 查看当前的状态

## 配置文件

+ 根目录下建立配置文件：webpack.config.js
+ js文件不需要配置loader规则，其他文件都需要配置loader规则


### 配置自动打包

```html
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
    mode:'development',
	//mode:'production'

}
```

### css规则配置

+ 首先要安装css-loader和style-loader

````html
npm i css-loader style-loader -D
````

+ 配置ruler规则

````html
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
````

+ 配置示范

```html
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
```
