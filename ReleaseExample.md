# 程序开发日志更新模板
======================================
## 2.5.1.20200103
* 新增 CSS 颜色预览功能 （可Alt+左键，进一步打开颜色选择器）
* 新增 记忆文件折叠状态 （默认关闭；可在【设置】-【编辑器配置】，启用记忆折叠状态）
* 新增 支持WebP格式的图片预览
* 新增 dart、tpl语言代码高亮着色
* 优化 语法提示  es6部分语法 代码提示、转到定义
* 优化 语法提示 补充一批新的 CSS 语法
* 优化 语法提示 vuedoc 支持属性值域描述
* 修复 语法提示 vuedoc nvue中不支持组件语法提示的Bug
* 修复 语法提示 项目下文件过多时，文件路径偶发不提示当前目录下文件的Bug
* 修复 智能回车 js语言，在对象变量行尾回车，自动补充逗号的Bug
* 修复 智能粘贴 某些情况下内容显示成一行的Bug
* 修复 js、html文件，关联JavaScript(ES6+)、HTML（es6+）后，右键菜单【验证本文档语法】失效的Bug
* 修复 自定义代码块 在$1处输入中文之后，使用Tab无法切换到$2处继续编辑的Bug [详情](https://ask.dcloud.net.cn/question/85981)
* 修复 自定义代码块 用户目录下存在不合规范的文件名时造成崩溃的Bug
* 修复 某些情况下 语言服务偶发退出的Bug
* 新增 标签卡右键菜单，增加打开文件所在位置
* 优化 文件关闭后，再次打开，光标显示在上次的位置
* 修复 多光标撤销、恢复撤销操作，光标位置错误的Bug
* 修复 打开查找索引界面后，编辑器光标仍然闪动的Bug
* 修复 多文件字符串搜索，搜索栏重绘导致CPU使用率过高的Bug
* 修复 字符串搜索，焦点在编辑器且文件被改变时，清除搜索结果指示器的Bug
* 修复 Window10 搜索框，微软输入法快速输入时偶发异常的Bug [详情](https://ask.dcloud.net.cn/question/84147)
* 修复 焦点在项目管理器上时，按 Ctrl+Alt+f 多文件搜索时没有按选中文件搜索的Bug
* 修复 格式化 光标在中文附近时，格式化后光标位置跑到开头的Bug [详情](https://ask.dcloud.net.cn/question/84634)
* 修复 折叠 快捷键触发折叠时折叠框的大小不正确的Bug
* 修复 折叠 当某块代码包含多行注释或条件编译时，导致折叠出错的Bug
* 修复 折叠 在独立单行内容上，按下折叠快捷键，行尾出现折叠指示器的Bug
* 修复 拖动标签卡到窗体外面的窗口，修改文件后标签卡状态错误的Bug
* 修复 悬停预览代码后，某些情况下，无法撤销恢复已修改内容的Bug
* 修复 控制台打印时间，某些情况下显示为其它语言格式的Bug
* 修复 在屏幕分辨率低于1024x768的电脑上，首次启动后，顶部菜单栏被遮挡的Bug[详情](https://ask.dcloud.net.cn/question/82376)
* 修复 欢迎页面 高分辨率屏幕上HBuilderX图标过大的的Bug
* 修复 欢迎页面 点击收藏，编辑器崩溃的Bug
* 修复 Mac 搜索文件结果列表，上下键无效的Bug
* 修复 Mac 项目管理器，项目上右键菜单点击【字符搜索】某些情况下无效的Bug
* 修复 Mac 多文件字符搜索，当焦点错误时，输入搜索内容回车，编辑器崩溃的Bug
* 修复 Mac 终端超时设置的最大数时，在弹框提醒中选择【修改设置】崩溃的Bug
* 新增 uni-app 项目js中可以提示浏览器的api
* 新增 uni-app 控制台 增加重启手机应用功能，无需再次编译，软重启手机App
* 新增 uni-app manifest.json App常用其它配置 编译模式添加【v3编译器】和【fast启动模式】
* 新增 App manifest.json SDK配置 增加苹果登录选项
* 修复 App manifest.json 原生插件列表顺序没有按照配置文件中的顺序排列的Bug
* 【uni-app插件】
  + 【重要】App端重大架构升级 `v3编译器`，更快的启动速度、更好的性能、更多vue语法支持、可webview调试视图层。新项目默认开启v3，可通过【manifest.json-App其他设置】开启关闭v3 [详情](https://ask.dcloud.net.cn/article/36599)
  + 【重要】H5平台、QQ小程序 支持运行微信小程序组件 [详情](https://uniapp.dcloud.io/h5/pages/template/vant-button/vant-button)
  + 【重要】App平台 新增 pages.json 配置屏幕方向。横屏应用请在这里配置，app.vue里生效较晚 [详情](https://uniapp.dcloud.io/collocation/pages?id=globalstyle)
  + 优化 非 scoped 样式支持 >>>,/deep/,::v-deep语法[详情](https://github.com/dcloudio/uni-app/issues/1143)
  + App平台 优化 选择位置 支持在搜索结果中选择
  + App平台 优化 picker 组件按钮文字增加多语言支持
  + App平台 修复 v3版本 block 或 template 使用 v-for 且仅包含文本节点时渲染不正确的 Bug [详情](https://github.com/dcloudio/uni-app/issues/1206)
  + App平台 修复 image 组件初始值为空字符串时会执行一次@error事件的Bug
  + App平台 修复 input 组件失焦时会触发一次@input的Bug [详情](https://ask.dcloud.net.cn/question/84456)
  + App平台 修复 webview 组件在非沉浸式状态栏下高度不正确的Bug
  + App平台 修复 chooseImage 传入字符串格式 sizeType 导致报错的Bug
  + App平台 修复 纯 nvue 环境 uni.request 数据格式错误的Bug [#1100](https://github.com/dcloudio/uni-app/issues/1100)
  + App平台 修复 nvue input 组件动态设置 password 属性不生效的Bug
  + App平台 修复 v-for 中监听事件某些情况参数不正确的Bug
  + App平台 修复 picker 组件内容为空字符串时排版错位的Bug [详情](https://ask.dcloud.net.cn/question/85682)
  + App平台 修复 App.vue onError 部分异常未捕获的 Bug [详情](https://github.com/dcloudio/uni-app/issues/1093)
  + App-Android平台 新增 nvue 通用属性 elevation 设置组件的层级阴影，解决 box-shadow 样式在设置圆角或动画时显示不正常的问题 [详情](https://uniapp.dcloud.io/use-weex?id=android平台阴影box-shadow问题)
  + App-Android平台 优化 应用退出后不清掉后台，反复热启动导致底层通信timeout引起的白屏问题
  + App-Android平台 修复 部分使用64位CPU的手机上可能出现白屏的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 nvue image 组件在部分手机上设置 fade-show 属性值为false可能仍然会闪烁的Bug 
  + App-Android平台 修复 nvue swipe 组件设置 circular 属性值为true时从首页直接跳到最后一页可能出现页面无法正常渲染的Bug
  + App-Android平台 修复 tabbar 的 midButton 不设置图片时显示默认图片的Bug [详情](https://ask.dcloud.net.cn/question/84908)
  + App-Android平台 修复 nvue map 组件中标注点设置 translateMarker 旋转角度后，点气泡也会随之旋转的Bug [详情](https://ask.dcloud.net.cn/question/84676)
  + App-Android平台 修复 nvue 页面中使用 animation 动画，关闭页面可能会闪退的Bug [详情](https://ask.dcloud.net.cn/question/84902)
  + App-Android平台 修复 nvue scroll-view 组件中嵌套 list 组件，list高度大于scroll-view剩余高度时高度可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/85496)
  + App-Android平台 修复 tabBar 动态设置某一项的内容会导致选中状态失效的Bug [详情](https://ask.dcloud.net.cn/question/80941)
  + 【重要】App-iOS平台 新增 uni.login 支持Apple登录 [详情](https://ask.dcloud.net.cn/article/36651)
  + App-iOS平台 新增 nvue 普通 view 组件支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617#view)
  + App-iOS平台 修复 nvue input 组件设置 maxlength 属性后，@input事件返回value值与实际显示值不一致的Bug [详情](https://github.com/dcloudio/uni-app/issues/1073)
  + App-iOS平台 修复 tabbar及标题栏上设置字体图标可能无法正常显示的Bug
  + App-iOS平台 修复 nvue map 组件不设置 marker 的 title 及 callout 时会显示空白标注的Bug [详情](https://ask.dcloud.net.cn/question/85874)
  + App-iOS平台 修复 nvue map 组件使用 controls 控件提交云端打包后可能会引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/86521)
  + App-iOS平台 修复 使用 uni.hideKeyboard 输入框无法失去焦点的Bug [详情](https://ask.dcloud.net.cn/question/85681)
  + H5平台 新增 支持 editor 组件 [详情](https://uniapp.dcloud.io/h5/pages/component/editor/editor)
  + H5平台 新增 支持使用 nodesRef.context 获取 VideoContext、CanvasContext 和 MapContext 对象
  + H5平台 新增 video 组件支持 @loadedmetadata、@progress 事件
  + H5平台 优化 发行时 index.css 文件名包含 hash 以便更好的控制缓存 [详情](https://ask.dcloud.net.cn/question/84990)
  + H5平台 优化 video 组件全屏展示效果 [详情](https://ask.dcloud.net.cn/question/85223)
  + H5平台 优化 canvas 组件内存占用
  + H5平台 修复 css 变量 --window-bottom 在全面屏设备不准确的Bug [详情](https://ask.dcloud.net.cn/question/83069)
  + H5平台 修复 canvasContext.measureText 报错的Bug [详情](https://ask.dcloud.net.cn/question/84858)
  + H5平台 修复 uni.createAnimation 动画不正确的Bug [详情](https://ask.dcloud.net.cn/question/84862)
  + H5平台 修复 webview 页面调用 uni API 无效的Bug [详情](https://ask.dcloud.net.cn/question/84977)
  + H5平台 修复 tabBar 文字较多时角标（红点）错位的Bug [详情](https://ask.dcloud.net.cn/question/83293)
  + H5平台 修复 textarea 组件未设置 line-height 时 linechange 事件 lineCount 值错误的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1123)
  + H5平台 修复 swiper 组件动画过程中销毁组件会报错的Bug [#1123](https://github.com/dcloudio/uni-app/issues/1127)
  + H5平台 修复 image 组件 src 包含英文括号时无法正常的Bug [#1090](https://github.com/dcloudio/uni-app/pull/1090)
  + H5平台 修复 globalStyle 下 h5 节点配置不生效的Bug
  + H5平台 修复 editor 组件未配置图像控件时报错的Bug
  + H5平台 修复 在不支持 localStorage 的环境运行时框架报错的Bug [#1155](https://github.com/dcloudio/uni-app/issues/1155)
  + 支付宝小程序平台 新增 支持 onBackPress [详情](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%E9%A1%B5%E9%9D%A2%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
  + 支付宝小程序平台 新增 支持配置 mini.project.json (manifest.json->mp-alipay) [#1164](https://github.com/dcloudio/uni-app/issues/1164)
  + 支付宝小程序平台 修复 使用 createIntersectionObserver 报错的Bug
  + 支付宝小程序平台 修复 使用 createSelectorQuery().in(this) 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/1190)
  + uni-ui 新增 vue doc，在HBuilderX中可以给予更完善的代码提示 [什么是vue doc](https://ask.dcloud.net.cn/article/35814)
  + hello uni-app 新增 canvas 组件示例(App端使用wxs实现高性能动画)
* 【5+App插件】
  + Android平台 更新 高德地图SDK（7.1.0）
  + Android平台 修复 Webview窗口关闭后可能出现内存占用不释放的Bug [详情](https://ask.dcloud.net.cn/question/83587)
  + Android平台 修复 数据库执行SQL语句 plus.sqlite.executeSql 不支持多条sql语句的Bug [详情](https://ask.dcloud.net.cn/question/74376)
  + Android平台 修复 真机运行默认将日志保存到SD卡中，长时间运行可能出现日志文件过大的Bug
  + 【重要】iOS平台 新增 支持苹果授权登录（Sign in with Apple） [教程](https://ask.dcloud.net.cn/article/36651)
  + iOS平台 修复 音频播放对象（AudioPlayer）播放网络音频时，缓存完成恢复播放时没有触发 onPlay 事件的Bug
  + iOS平台 修复 Webview窗口的titleUpdate事件可能不触发导致无法修改页面标题的Bug [详情](https://ask.dcloud.net.cn/question/84115)
  + iOS平台 修复 Webview窗口的标题栏（titleNView）设置titleSize属性不生效的Bug
  + iOS平台 修复 系统日期选择框（plus.nativeUI.pickDate）、时间选择框（plus.nativeUI.pickTime）在横屏时显示不正常的Bug
  + iOS平台 修复 应用切换到后台，从其它应用传参数激活到前台时 plus.runtime.arguments 可能不更新的Bug
  + iOS平台 修复 录音对象（AudioRecorder）录制mp3格式音频设置 channels 参数值为 mono 不生效的Bug [详情](https://ask.dcloud.net.cn/question/85493)
  + iOS平台 修复 录音对象（AudioRecorder）设置音频播放模式 setSessionCategory 可能不生效的Bug
  + iOS平台 修复 iOS13调用 plus.screen.setBrightness 方法可能会导致页面失去响应的Bug
  + iOS平台 修复 在非刘海屏手机获取应用的安全区域 plus.navigator.getSafeAreaInsets 返回 deviceTop 数据可能不正确的Bug

## 2.4.6.20191210
* 修复 鼠标悬停预览代码后，导致撤销失效的Bug
* 【uni-app插件】
  + App平台 修复 纯 vue 项目配置 condition 后运行报错的Bug [详情](https://ask.dcloud.net.cn/question/84752)
  + App-Android平台 修复 选择位置 概率出现定位中心点不居中的Bug [详情](https://ask.dcloud.net.cn/question/84819)
  + H5平台 修复 发行模式启用摇树优化后，运行报 getApp 出错的Bug [详情](https://ask.dcloud.net.cn/question/84763)

## 2.4.5.20191209
* 新增 查找索引符号，可快速查找函数、变量、markdown标题等文档结构图中的内容 （快捷键 Ctrl+Shift+o）
* 新增 鼠标悬停在代码折叠后的省略号处，可悬浮预览被折叠内容
* 优化 文件路径提示
* 优化 字符搜索的性能和指示器样式
* 优化 字符搜索时点击大小写、全词匹配等操作时自动触发重新搜索
* 优化 文件搜索的性能，补充匹配字符高亮
* 修复 某些情况下，git/svn项目，更新代码或切换分支后，文件内容没有更新的Bug
* 修复 无标题文档不更新title的Bug
* 修复 某些情况下，状态栏语言名称丢失的Bug
* 修复 初次修改文档，中文输入法输入卡顿的Bug
* 修复 当文件第一行是空行时，再次打开编辑器折叠计算错误的Bug
* 修复 通过拖拽分栏后的tabbar背景色不正确的Bug
* 修复 某些情况下，分左右两栏，没有对齐的Bug
* 修复 vscode快捷键方案，搜索上一个/下一个字符，快捷键显示错误的Bug
* 修复 win7 安装插件窗口滚动条过细的Bug
* 修复 win7 QQ输入法输入单引号时触发移动光标的Bug
* 修复 项目管理器，焦点在目录文件上时，按Ctrl+Shift+c复制路径不生效的Bug
* 修复 打开WebView调试控制台，菜单状态错误的Bug
* 删除 uni-app项目的manifest.json可视化视图删除自定义组件模式选择，因为已不再支持非自定组件模式
* 【uni-app插件】
  + 新增 支持在页面文件调用 `App.vue` 中定义的函数方法 [#665](https://github.com/dcloudio/uni-app/issues/665)
  + 优化 `babel.config.js` 文件里的 `@vue/babel-preset-app` 支持配置 `modules:false` ，让打包后的代码体积更小，运行更快 [#929](https://github.com/dcloudio/uni-app/issues/929)
  + 修复 发行模式下使用 scss ，部分情况条件编译不生效的 Bug [1013](https://github.com/dcloudio/uni-app/issues/1013)
  + App平台 新增 nvue(uni-app编译模式) 控制是否自动包裹 scroll 组件（通过 pages.json 里 style 的 `disableScroll` 属性配置页面) [详见](https://uniapp.dcloud.io/collocation/pages?id=style)
  + App平台 新增 nvue(uni-app编译模式) webview 组件加载的HTML支持调用部分uni API [详情](https://ask.dcloud.net.cn/question/83399)
  + App平台 优化 选择位置，全新UI、支持传入经纬度参数、一键到达当前位置
  + App平台 修复 真机运行 指定页面为首页时白屏的Bug
  + App平台 修复 nvue 导航栏 titleNView 的 type 属性设置为 transparent 时不生效的Bug [详情](https://ask.dcloud.net.cn/question/66907)
  + App平台 修复 nvue(weex编译模式) uni.scanCode 打开扫码页面空白的Bug [详情](https://ask.dcloud.net.cn/question/83820)
  + App平台 修复 nvue picker 组件多次打开后无法关闭的Bug [详情](https://ask.dcloud.net.cn/question/83417)
  + App-Android平台 优化 应用退出后不清掉后台，再次启动可能出现白屏的问题 [详情](https://ask.dcloud.net.cn/question/77397)
  + App-Android平台 修复 首页为 nvue 时反复启动应用后可能出现假死状态的Bug [详情](https://ask.dcloud.net.cn/question/83611)
  + App-Android平台 修复 应用在 tabbar 页面跳转到其它页面在Android10上可能出现图片闪烁的Bug
  + App-Android平台 修复 nvue scroll-view 组件无法触发 touchstart/touchend 事件及动态设置 scroll-left 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/83256)
  + App-Android平台 修复 nvue input 组件设置 autofocus 属性为 true 在subnvue页面可能出现软键盘弹出后自动隐藏的Bug [详情](https://ask.dcloud.net.cn/question/83014)
  + App-Android平台 修复 nvue map 组件下的view子节点不显示的Bug [详情](https://ask.dcloud.net.cn/question/83719)
  + App-Android平台 修复 nvue live-pusher 组件推流成功后拉流可能显示绿屏或卡在首帧的Bug [详情](https://ask.dcloud.net.cn/question/83198)
  + App-iOS平台 新增 tabbar和navigationBar 支持设置高斯模糊（毛玻璃）效果 [详情](https://ask.dcloud.net.cn/article/36617)
  + App-iOS平台 修复 nvue view 组件设置 border 属性可能引起应用崩溃的Bug [详情](https://ask.dcloud.net.cn/question/83206)
  + App-iOS平台 修复 iOS 13 系统中 textarea 输入的内容，比 placeholder 偏左一点的Bug [详情](https://ask.dcloud.net.cn/question/83373)
  + App-iOS平台 修复 faceID 识别成功时不能正确触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/83068)
  + App-iOS平台 修复 网络请求 uni.request 设置请求的 header 中存在非字符串值可能会引起崩溃的Bug
  + H5平台 新增 uni.chooseImage 、uni.chooseVideo 支持返回文件名
  + H5平台 新增 支持使用 uni.loadFontFace 加载字体
  + H5平台 修复 webview 组件 加载的HTML中调用 uni.getEnv 错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/1011)
  + H5平台 修复 h5 平台组件的自定义事件无法接收多个参数的Bug [#1016](https://github.com/dcloudio/uni-app/issues/1016)
  + H5平台 修复 在企业微信中 uni.chooseImage 无法使用的Bug [详情](https://github.com/dcloudio/uni-app/issues/82872)
  + 小程序平台 修复 不能直接在模版内使用 $emit 的 Bug [详情](https://ask.dcloud.net.cn/question/82865)
  + 微信小程序平台 修复在发行模式使用 lodash@4.17.15 ，运行报错的 Bug[#994](https://github.com/dcloudio/uni-app/issues/994)
  + 支付宝小程序平台 修复 for 循环中 ref 生成的多个组件数组长度不准确的Bug [#930](https://github.com/dcloudio/uni-app/issues/930)
  + 头条小程序平台 修复 当 rpx 后跟着 !important 时，发行模式下 rpx 未被编译成px的Bug [#1014](https://github.com/dcloudio/uni-app/issues/1014)
  + 百度小程序平台 修复 页面 onShow 只能触发一次的Bug
  + uni-ui 新增 uni-transition 过渡动画组件
  + uni-ui 新增 uni-fab 悬浮按钮支持nvue
  + uni-ui 优化 uni-calendar 切换月份必选中每月1号的Bug
  + uni-ui 优化 uni-calendar 视图样式,优化逻辑代码实现,使性能更好
  + uni-ui 优化 uni-calendar 切换月份返回事件
  + uni-ui 优化 uni-grid 用户可自定义宫格内容，如添加角标、红点、修改背景色等
  + uni-ui 优化 uni-load-more 支持调整图标大小
  + uni-ui 优化 uni-popup 弹出层动画，使动画更流畅
  + uni-ui 优化 uni-swipe-action 组件间联动效果更流畅
  + uni-ui 修复 uni-calendar 动态获取 selected 属性就会导致切换不了月份的Bug
  + uni-ui 修复 uni-calendar H5 端选择月份按钮不能点击的Bug
  + uni-ui 修复 uni-grid 正方形宫格显示不正确的Bug
  + uni-ui 修复 uni-grid 动态数据不渲染的Bug
  + uni-ui 修复 uni-popup 点击蒙版关闭后，再次打开弹框失败的Bug
  + uni-ui 修复 uni-popup type 属性为静态值时导致弹出层错误的Bug
  + uni-ui 修复 uni-swipe-action autoClose 属性开启状态下滑动不正常的Bug
* 【5+App插件】
  + Android平台 优化 启动时申请手机存储权限，若用户拒绝则会弹出说明文字。满足部分应用商店要求的权限申请需申明的要求 [详情](https://ask.dcloud.net.cn/article/36549#externalstorage)
  + Android平台 修复 Webview窗口设置drag滑屏操作手势，快速滑动操作可能引起白屏的Bug [详情](https://ask.dcloud.net.cn/question/82668)
  + Android平台 修复 视频播放控件（VideoPlayer）可能无法播放某些本地视频文件的Bug
  + Andrpid平台 修复 数据库执行SQL语句（plus.sqlite.executeSql）传入错误sql语句时，可能在控制台输出错误日志且不触发错误回调的Bug [详情](https://ask.dcloud.net.cn/question/83203)
  + iOS平台 新增 Webview窗口原生标题栏样式属性 blurEffect，支持高斯模糊（毛玻璃）效果 [详情](https://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewTitleNViewStyles)
  + iOS平台 补齐 直播推流（LivePusher）控件支持设置最小码率（min-bitrate）和最大码率（max-bitrate）
  + iOS平台 修复 Webview窗口原生标题栏的搜索框（searchInput）获取焦点会导致placeholder文字移位的Bug [详情](https://ask.dcloud.net.cn/question/83027)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能出现长图片不能滚动的Bug [详情](https://ask.dcloud.net.cn/question/82455)
  + iOS平台 修复 图片预览（plus.nativeUI.previewImage）可能无法正常显示部分网络地址图片的Bug [详情](https://ask.dcloud.net.cn/question/83542)
  + iOS平台 修复 使用UniPush或个推推送在后台统计数据中没有展示数和点击数的Bug [详情](https://ask.dcloud.net.cn/question/83292)
  + iOS平台 修复 用户拒绝访问相机后，调用摄像头拍照或录像时不会触发错误回调的Bug
  + iOS平台 修复 配置使用高德或百度地图后，定位默认没有使用gcj02坐标的Bug
  + iOS平台 修复 系统日期（plus.nativeUI.pickDate）、时间（plus.nativeUI.pickTime）选择框与系统提示框遮罩颜色不一致的Bug
  + iOS平台 修复 苹果应用内支付IAP恢复购买接口（restoreComplateRequest）有可能不会返回恢复购买凭证的Bug


  
## 历史更新日志
[https://update.dcloud.net.cn/hbuilderx/changelog/2.0.0.20190610.html](https://update.dcloud.net.cn/hbuilderx/changelog/2.0.0.20190610.html)
