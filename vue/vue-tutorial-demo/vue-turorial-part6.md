# vue实例
 
## 跑马灯效果
+ 新建立一个html，命名为601.html
+ 添加以下内容到html中
+ 点击启动字母自动滚动


 ```html
 		<div id="app">
			<button @click="run">跑起来</button>
			<button v-on:click="stop">停止</button>
			<p>{{ msg }}</p>
			
		</div>
		
		<script>
			var vm = new Vue({
				el:'#app',
				data:{
					msg:'我是跑马灯，我跑的是最快的！',
					intervalId:null //在data上定义定时器ID
				},
				methods:{
					run(){
						
						//方案一：设置一个变量that复制外部的this
						// var that = this
						// setInterval(function(){
						// 	//内部 this代表function，不能调取外部的this，解决方案，设置一个变量that复制外部的this
						// 	start = that.msg.substring(0,1)
						// 	end = that.msg.substring(1)
						// 	that.msg = end + start
						// 	console.log(that.msg)							
						// },400)
						
							//bug 不停的按开始，会停止不下来
							//方案一：处罚停止事件
							//this.stop()
							//方案二：判别intervalId是否为null
						if(this.intervalId != null) return;
						
						//方案二：创建箭头函数
						this.intervalId = setInterval( () => {
							start = this.msg.substring(0,1)
							end = this.msg.substring(1)
							this.msg = end + start
							console.log(this.msg)							
						},400)

					},
					stop(){
						clearInterval(this.intervalId)
						this.intervalId = null ;
					}
				}
			})
		</script>
 ```

 