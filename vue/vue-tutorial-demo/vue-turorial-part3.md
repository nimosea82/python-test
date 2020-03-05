# vue基本教程

## 过滤器
	
明确一下`过滤器`的概念，本质上是函数，其作用是用户输入数据后，对数据进行处理，并返回一个数据结果，其语法是用管道符|进行连接。
	
#### 语法示例

	{{'abc' | uppercase }
 
 输出：ABC
 这里使用Vue内置的过滤器uppercase，将字符串中的字母全部转换为大写形式。
 过滤器支持任何形式添加过滤器，除以上mustache风格（双大括号）外，还可以绑定在指令表达式后面调用，如下示例：
 
	<span v-text="message | uppercase "></span>
	
 

#### v-if实例：v-if操作

+ 新建立一个html，命名为301.html
+ 添加以下内容到html中  
```html

```

+ v-if指令要绑定到指定的元素中，v-if="...",引号内容为表达式，man值默认为false，所以`<p>`标签中的内容不显示；
+ 点击按钮后，man值更新为true， `<p>`标签绑定了v-if,自动判别man值为true，内容也跟着显示出来了。

![](images/readme-img/301.png)


### v-else

 `v-else`要搭配`v-if`或`v-if-else`使用才有效，当v-if表达式内容为false后要操作的内容。
 

### vue中的动画


#### 动画案例

+ 新建立一个html，命名为322.html
+ 添加以下内容到html中  
+ 实现文字淡入淡出效果
+ animate.css

