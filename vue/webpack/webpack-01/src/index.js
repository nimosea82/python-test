/*
index.js:webpack入口起点文件
1.运行指令
开发环境：webpack ./src/index.js -o ./dist/bundle.js --mode=development
生产环境：webpack ./src/index.js -o ./dist/bundle.js --mode=production

2.结论
webpack 能处理 js文件
*/


import data from './data.json'
console.log(data)

//js自己的函数
function add(x, y) {
    return x + y;
}

console.log(add(1, 2))

//打包处理css文件,引入loader处理
import './css/index.css'

//打包处理less文件
import './less/index.less'

//字体文件引入
// import './css/icon/iconfont.css'