# vue基本教程

## 深入了解组件
	
### 组件注册

#### 组件名

在注册一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：
```
Vue.component('my-component-name', { /* ... */ })
```
该组件名就是 Vue.component 的第一个参数,我们强烈推荐遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。
你可以在 [风格指南](https://cn.vuejs.org/v2/style-guide/)中查阅到关于组件名的其它建议。


#### 组件示例

 
 #### 监听子组件事件2


 
+ 新建立一个html，命名为404.html
+ 添加以下内容到html中
+ 点击不同按钮传入自定义要改变字体大小的数值

 ```html
<div id="blog-posts-events-demo">
		  <div :style="{ fontSize: postFontSize + 'em' }">
			<blog-post
			  v-for="post in posts"
			  v-bind:key="post.id"
			  v-bind:post="post"
			  v-on:enlarge-text="postFontSize +=$event"
			></blog-post>
		  </div>
		</div>
		
		<script>
		Vue.component('blog-post', {
		  props: ['post'],
		  template: `
			<div class="blog-post">
			  <h3>{{ post.title }}</h3>
			  <button v-on:click="$emit('enlarge-text',0.5)">
				Enlarge text
			  </button>
			  <div v-html="post.content"></div>
			</div>
		  `
		})
		
		new Vue({
		  el: '#blog-posts-events-demo',
		  data: {
		    posts: [
					 { id: 1, title: 'My journey with Vue', content:'content text 1' },
					 { id: 2, title: 'Blogging with Vue', content:'content text 2' },
					 { id: 3, title: 'Why Vue is so fun', content:'content text 3'},
				 ],
		    postFontSize: 1
		  }
		})
		
		</script>
 
 ```
