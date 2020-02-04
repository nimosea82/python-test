# vue基本教程

## vue组件
	
vue组件
	
#### 组件示例

 
+ 新建立一个html，命名为401.html
+ 添加以下内容到html中
+ 点击按钮会自动累计相加


 ```html
 <div id="app">
 	 <button-counter></button-counter>	
 	 <button-counter></button-counter>	
 	 <button-counter></button-counter>	
 
 </div>
 
 <script>
 	Vue.component('button-counter',{
 		data:function(){
 			return {
 				count:0
 			}
 		},
 		template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'
 	})
 	
 	new Vue({
 		el:'#app'
 	})
 </script>
 
 ```
 
 #### 通过 Prop 向子组件传递数据


 
+ 新建立一个html，命名为402.html
+ 添加以下内容到html中
+ 点击按钮会自动累计相加


 ```html
<div id="app">
			<p>prop数据传递</p>
			 <blog-post title="My journey with Vue" countent="hello countent1"></blog-post>
			 <blog-post title="Blogging with Vue" countent="hello countent2"></blog-post>
			 <blog-post title="Why Vue is so fun" countent="hello countent3"></blog-post>

		</div>
		
		<div id="app2">
			<p>prop多数据传递</p>
			<blog-post
			  v-for="post in posts"
			  v-bind:key="post.id"
			  v-bind:title="post.title"
			></blog-post>

		</div>		
		<script>
			Vue.component('blog-post', {
			  props: ['title','countent'],
			  template: '<div><h3>{{ title }}</h3><h2>{{ countent }}</h2></div>'
			})
			
			new Vue({
				el:'#app'
			})
			
			new Vue({
			  el: '#app2',
			  data: {
			    posts: [
			      { id: 1, title: 'My journey with Vue' },
			      { id: 2, title: 'Blogging with Vue' },
			      { id: 3, title: 'Why Vue is so fun' }
			    ]
			  }
			})
			
		</script>
 
 ```
 
  #### 监听子组件事件


 
+ 新建立一个html，命名为403.html
+ 添加以下内容到html中
+ 点击按钮会自动增加字体大小

 ```html
<div id="blog-posts-events-demo">
		  <div :style="{ fontSize: postFontSize + 'em' }">
			<blog-post
			  v-for="post in posts"
			  v-bind:key="post.id"
			  v-bind:post="post"
			  v-on:enlarge-text="postFontSize +=0.1"
			></blog-post>
		  </div>
		</div>
		
		<script>
		Vue.component('blog-post', {
		  props: ['post'],
		  template: `
			<div class="blog-post">
			  <h3>{{ post.title }}</h3>
			  <button v-on:click="$emit('enlarge-text')">
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
