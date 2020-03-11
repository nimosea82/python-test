# node npm命令

## npm -g , npm -s 和 npm -d 的区别

+ 生产环境安装：npm i module_name -S 即 npm install module_name --save
修改的是 配置文件中的 dependencies
如：只需要打包和项目直接相关的代码就行，但打包工具 等 就不需要 安装到 生产环境中

+ 开发环境安装：npm i module_name -D 即 npm install module_name --save-dev，修改的是 配置文件中的 devDependencies
如：在开发环境中，需要用到打包工具

+ 全局安装：npm i module_name -g 全局安装

+ 项目文件夹安装：npm i module_name 本地安装(将安装包放在项目目录下的/node_modules 中)
