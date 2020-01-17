# vue基本教程


## 初识Vue

![](images/readme-img/logo.png)

#### Vue的安装和使用

在网页中使用Vue有两种方式  
+ 第一种方式通过html内引入（新手推荐）
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
+ 第二种方式通过npm等第三方库程序安装vue cli脚手架（高手进阶推荐，现在不知道什么叫脚手架可以不用深究）

#### 第一个Vue实例：Hello World

国际惯例，第一个实例从Hello World开始

+ 新建立一个html，命名为101.html
+ 添加以下内容到html中
```html
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<!-- 引入vue.js -->
				<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
				<title>Hello World</title>
			</head>
			<body>
				<div id="app">
					<p>{{ message }}</p>
				</div>
				<script>
					new Vue({
						el: "#app",
						data: {
							message: "Hello World"
						}
					})
				</script>
			</body>
		</html>
```
运行浏览器，你将看到浏览器输出`Hello World`，现在可以你不用知道这些神奇的事情是怎么发生的，只要能通过案例输出`Hello World`即可。


#### 第二个Vue实例：编程语言列表

+ 新建立一个html，命名为102.html
+ 添加以下内容到html中
```html
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<!-- 引入vue.js -->
				<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
				<title>编程语言列表</title>
			</head>
			<body>
				<div id="app">
					<p>{{ code }}</p>
					<ul>
						<li v-for=" tab in tabs">
							{{ tab.text }}
						</li>
					</ul>

				</div>
				<script>
					new Vue({
						el: "#app",
						data: {
							code:"编程语言列表",
							tabs: [
								{text: 'java'},
								{text: 'python'},
								{text: 'javascript'},
								{text: 'C'},
								{text: 'C++'},
								{text: 'PHP'}
							]
						}
					})
				</script>
			</body>
		</html>
```
		

这个是用到了Vue循环功能的实例，可以非常方便的生成一个列表。

![](images/readme-img/101.png)


## 数据绑定

数据绑定是将`数据`和`视图`相关联，当数据发生变化时，可以自动更新视图。

Hello World案例中：

	<div id="app">
		<p>{{ message }}</p>
	</div>
	<script>	
		new Vue({
			el: "#app",
			data: {
				message: "Hello World"
			}
		})	
	</script>

以上代码中，`<div>..</div>`内我们称为视图区，`<scrip></scrip>`内我们称为脚本区或代码区


+ 数据绑定

  `{{ message }}`是一个标准的数据绑定显示方式,通过`message`这个变量，可以在html标签内动态显示，一旦数据有变化，页面也是自动更新,`{{ message }}`建议标准写法是变量名与大括号之间隔1个空格。
 
+ id绑定

  `div id="app"`是html中div元素的id的名称，该id名称要与vue代码块中的变量`el: "#app"`一致,表示该vue是为id为"app"的DOM元素服务。el变量前面需要加一个#号,id命名可以随意命名，不一定要命为“app”。

+ vue脚本
	- vue脚本代码都写在`<scrip></scrip>`代码对中；
	- new Vue({..})表示新创建一个vue对象，该对象也可以赋值给一个变量；
	- el:"#app"表示绑定的html中的DOM元素，所有操作只对在该元素范围内有效；
	- data:{message: "Hello World"}，为vue对象的data变量，该变量以`键值对`形式存在。


#### 数据绑定实例：自动更新数据

+ 新建立一个html，命名为201.html
+ 添加以下内容到html中  
从本章节开始，标准的html内容不再重复添加，代码块仅显示案例有用的内容，其他html标签内容请参考第一章两个案例。
```html
		<div id="app">
			<p>姓名:{{ name }}</p>
			<p>年龄:{{ age }}</p>
			<button v-on:click="name='慧玩编程',age=2 ">更新数据</button>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					name:"vue编程",
					age:4				
				}
			})			
		</script>
```

![](images/readme-img/102.png)

通过`<button v-on:click="name='慧玩编程',age=2 ">`对变量进行了重新赋值的操作，点击按钮后，页面没有刷新，数据自动更新了。
通过这个简单的例子我们就初步体会到Vue的强大，以往html、javascript编程，想要实现页面元素动态更新数据，需要编写一堆的代码，现在只需要简简单单几句代码即可完成。

### 语法

#### 文本插值
+ 使用双括号`{{}}`(类似于Mustache，称作Mustache标签)
		<p>姓名:{{ name }}</p>
  当标签中name属性变化时，页面跟着联动
  
