# vue基本教程

## 第三章 指令
	
	指令是vue中带有v-前缀的名称，指令是为了绑定表达式，当表达式的值发生改变时把某些特殊的行为应用到DOM上。
	
### v-if

 `v-if`是最常见的指令，用于判断表达式是否为true，如果为true，执行绑定元素的内容，否则不执行。

#### v-if实例：v-if操作
+ 新建立一个html，命名为301.html
+ 添加以下内容到html中  
```html
		<div id="app">
			<p v-if="man">是男人就学Vue</p>
			
			<button v-on:click="man=true">是男人</button>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					man:false				
				}
			})			
		</script>
```
+ v-if指令要绑定到指定的元素中，v-if="...",引号内容为表达式，man值默认为false，所以`<p>`标签中的内容不显示；
+ 点击按钮后，man值更新为true， `<p>`标签绑定了v-if,自动判别man值为true，内容也跟着显示出来了。

![](images/readme-img/301.png)


### v-else

 `v-else`要搭配`v-if`或`v-if-else`使用才有效，当v-if表达式内容为false后要操作的内容。
	
#### v-else实例：v-else操作
+ 新建立一个html，命名为302.html
+ 添加以下内容到html中  
```html
		<div id="app">
			<p v-if="man">是男人就学Vue</p>
			<p v-else>是女人也要学Vue</p>
			
			<button v-on:click="man=true">是男人</button>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					man:false				
				}
			})			
		</script>
```
+ man值默认为false,显示的内容为v-else绑定的标签，点击按钮后就显示为v-if绑定的标签内容



![](images/readme-img/302.png)

### v-else-if

`v-else-if`必须要与v-if搭配使用，单独无法使用。
+ v-if="..." 结果为false才会执行下一步；
+ v-else-if="..."，表达式内结果为true，执行标签内容；
+ v-else 以上表达式都为false，才会执行v-else绑定的标签内容。

#### v-else-if实例：v-else-if操作

+ 新建立一个html，命名为303.html
+ 添加以下内容到html中  
```html
		<div id="app">
			<p v-if="man">是男人就学Vue</p>
			<p v-else-if="women">是女人也要学Vue</p>
			<p v-else>既然是动物就免学要学Vue了</p>
			
			<button v-on:click="man=true,women=false">是男人</button>
			<button v-on:click="man=false,women=true">是女人</button>
			<button v-on:click="man=false,women=false">是动物</button>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					man:false,
					women:false
				}
			})			
		</script>
```
 该案例，一共有三`<p>`标签，三个按钮，vue对象中有man和woman两个变量，默认都是false，点击不同按钮将改变man和women两个变量的值，同时通过v-if、v-else等指令来判断条件。
 ![](images/readme-img/303.png)
 

### v-show

根据表达式之真假值，切换元素的 display CSS 属性,作用效果和v-if很相似。

#### v-show实例：v-show操作

+ 新建立一个html，命名为304.html
+ 添加以下内容到html中 
```html
		<div id="app">
			<p v-show="man">是男人就学Vue</p>
			
			<button v-on:click="man=true">是男人</button>
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					man:false				
				}
			})			
		</script>
```
+ 以上代码为301实例中的v-if修改为v-show

> v-show和v-if的区别
 + v-show实例的`检查元素`查看
	- 网页右键，选择【检查元素】或叫【查看元素】
	 ![](images/readme-img/304.png)
	- 使用v-show标签CSS状态是被设置成不可见，内容都是存在的；
 + v-if实例的`检查元素`查看
	- 网页右键，选择【检查元素】或叫【查看元素】
	 ![](images/readme-img/305.png)
	- 使用v-if,false状态下，整个标签都不存在；
 + 区别
	- 相对来说，v-show相对来说比较简单，标签元素始终被保留，只是简单的基于CSS的显示切换;
	- v-if有更高的消耗，但v-if可以和v-else等指令组合使用，使用更灵活;
	- v-show不支持`<template语法>`;

### v-text
更新元素的 textContent。
```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

### v-html
用于更新元素的innerHTML,内容按普通HTML插入(如果看不懂，请看以下实例)

#### v-html实例：v-html操作

+ 新建立一个html，命名为305.html
+ 添加以下内容到html中
```html
		<div id="app">
			<p>{{htext}}</p>
			<p v-html="htext"></p>			
		</div>
		<script>
			var vm = new Vue({
				el:"#app",
				data:{
					htext:"<h1>我是标题1</h1>"				
				}
			})			
		</script>
```

 ![](images/readme-img/306.png)
 
 + `<p>{{htext}}</p>`输出的是文本内容
 + `<p v-html="htext"></p>`输出的是带html标签的内容
 + 以上就是启用v-html的作用
 
### v-for
for循环指令和v-if是vue中最常用的几个指令，此指令之值，必须使用特定语法 alias in expression ，为当前遍历的元素提供别名。

#### v-for实例：v-for操作1

+ 新建立一个html，命名为306.html
+ 添加以下内容到html中

```html
		<div id="app">
			<p>{{ text }}</p>
			<ul>
				<li v-for=" item in items">
					{{ item.text }}
				</li>
			</ul>
		</div>
		<script>
			new Vue({
				el: "#app",
				data: {
					text:"程序猿六大标签",
					items: [
						{text: '秃头'},
						{text: '格子衫'},
						{text: '邋遢'},
						{text: '死宅'},
						{text: '无趣'},
						{text: '动漫'}
					]
				}
			})
		</script>
```

 ![](images/readme-img/307.png)
 
 + `v-for=" item in items"`命名一个变量item,通过v-for历遍items数组中的对象；
 + `{{ item.text }}`每次循环，通过该方法输出item对象的text值；
 + 以上就是启用v-html的作用
 
#### v-for实例：v-for操作2（参数1，参数2，参数3）

在v-for指令中，可以指定参数2和参数3，参数2代表键值对名称，参数3代表循环的序号

+ 新建立一个html，命名为307.html
+ 添加以下内容到html中

```html
		<div id="app">
			<h2>v-for 来遍历一个对象的属性</h2>
			<p>{{ coder.name }}</p>
			<ul>
				<li v-for=" item in coder">
					{{ item }}
				</li>
			</ul>
			
			<h2>你也可以提供第二个的参数为 property 名称 (也就是键名)</h2>
			<h4>用name来输出键名，该参数可以重命名</h4>
			<p>{{ coder.name }}</p>
			<ul>
				<li v-for=" (item,name) in coder">
					{{ name }}:{{ item }}
				</li>
			</ul>
			
			<h2>还可以用第三个参数作为索引</h2>
			<h4>用index来输出索引,该参数可重命名</h4>
			<p>{{ coder.name }}</p>
			<ul>
				<li v-for=" (item,name,index) in coder">
					{{ index }}.{{ name }}:{{ item }}
				</li>
			</ul>
								
		</div>
		<script>
			new Vue({
				el: "#app",
				data: {
					coder:{
					name:"一个苦逼的程序猿",	
					age:35,
					address:"浙江某山洞",
					habit:"漂亮的姑娘",
					}					
				}
			})
		</script>
```

 ![](images/readme-img/308.png)
 
 + `(item,name)`第二个参数name为键名，如coder键值对中的name、age等，不一定用name命名，可以任意取变量名。
 + `(item,name,index)`第三个参数index为循环序号，每次循环，通过该方法输出序号，不一定要用index，可以任意取变量名；

 
 
 