# vue基本教程

	
## 定义组件

组件是为来拆分页面，减少代码和重复编码

+ 模块化：是从代码逻辑的角度进行划分，方便代码分层开发，保证每个功能模块职能单一
+ 组件化：是从UI界面的角度进行划分，前端的组件化，方便UI组件的重用

### 组件三种定义方式

#### 全局注册

+ 新建立一个html，命名为501.html
+ 使用Vue.extend和Vue.component来定义全局组件


#### 注册方式二

+ 新建立一个html，命名为502.html
+ 使用Vue.extend和Vue.component来定义全局组件

```html
		//全局一步注册到位
		Vue.component('myCom1',Vue.extend({
			template:'<h3>这个是用Vue extend创建的组件</h3>'
		}))

```

#### 另一种写法

+ 新建立一个html，命名为503.html
+ 使用Vue.extend和Vue.component来定义全局组件

```html

		Vue.component('myCom1',{
			template:'<h3>这个是用Vue extend创建的组件</h3>'
		})

```

### 组件根元素唯一

template模板内容必须是有且唯一的根元素

```
<div>...</div>
```



#### 注册方式三

+ 新建立一个html，命名为504.html
+ 使用Vue.extend和Vue.component来定义全局组件

### 私有组件

#### 私有组件案例

+ 新建立一个html，命名为505.html

### 组件属性data

+ data定义为一个function
+ 新建立一个html，命名为506.html

### 父组件向子组件传值

+ data定义为一个function
+ 新建立一个html，命名为507.html