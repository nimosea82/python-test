# vue简单实例集合
 
## 案例列表

|-序号|名称|网址|备注说明|
|--|--|--|--|
|1|[跑马灯](#跑马灯效果)|[601.html](pages/601.html)|
|2|[表单添加](#表单添加)|[602.html](pages/602.html)|

## 跑马灯效果

+ 效果：实现文字滚动
+ 网址：新建立一个html，命名为601.html
+ 代码：添加以下内容到html中

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

 ## 表单添加

+ 效果：建立一个表格，可以通过添加操作，将数据添加到表格中
+ 网址：新建立一个html，命名为602.html
+ 代码：添加以下内容到html中

 ```html
	<div id="app">


		<div class="panel panel-primary">
			<div class="panel-heading">
				添加品牌
			</div>
			<div class="panel-body form-inline">
				<label>
					id:<input type="text" v-model="id">
				</label>{{ id }}

				<label>
					name:<input type="text" v-model="name">
				</label>{{ name }}
				<!-- add()可以传参数，不加()代码也正常 -->
				<input type="button" value="添加" class="btn btn-primary" @click="add()">
			</div>

		</div>

		<table class="table table-bordered table-hover table-striped">
			<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>ctime</th>
					<th>option</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in list" :key="item.id">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.ctime }}</td>
					<td><a href="" @click.prevent="delCar(item.id)">删除</a></td>
				</tr>
			</tbody>
		</table>


	</div>

	<script>
		var vm = new Vue({
			el: "#app",
			data: {
				id: '',
				name: '',
				list: [
					{ id: 1, name: "奔驰", ctime: new Date() },
					{ id: 2, name: "宝马", ctime: new Date() },
				]
			},
			methods: {
				add() {

					var car = { id: this.id, name: this.name, ctime: new Date() }
					console.log(car);
					this.list.push(car)
				},
				delCar(id) {

					var index = this.list.findIndex(item => {
						if (item.id == id) {
							return true
						}
					})
					console.log(index);
					this.list.splice(index, 1)

				}
			},


		})
	</script>

 ```

