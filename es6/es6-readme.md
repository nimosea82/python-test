# es6
javascript

## 面向对象编程介绍

### 面向对象编程OOP

三大特性

+ 封装性
+ 继承性
+ 多态性

## ES6中的类和对象

### 面向对象的思维特点

+ 抽取对象公共的属性和行为，封装成一个类（模板）
+ 对类进行实例化，获取类的对象

### 类class

抽象的，泛指

### 对象

实物某个东西

## ES6中创建类和对象

### 创建类

```
	class Person(){
		
	}

	new Star();
	
```

### 类constructor构造函数

constructor作用：

+ 接收传递的参数
+ 返回实例对象
+ 这个是类必须要有的函数

#### constructor实例

+ 101.html

```
        <script>
            class Person {
                constructor(name) {
                    this.name = name;
                }
            }

            var p1 = new Person('张作霖')
            console.log(p1.name)


        </script>
	
```

### 类中添加方法

```
        <script>
            class Person {
                constructor(name) {
                    this.name = name;
                }
                //添加类的方法
                say(){
                    console.log('my name is '+ this.name)
                }
            }

            var p1 = new Person('张作霖')
            console.log(p1.name)
            p1.say();


        </script>

```

## 类的继承

子类继承父类的属性

#### constructor实例

```
class Father{
	//父类
}

class Son Extends Father{
	子类
}

```

+ 102.html


```javascript
        <script>
            class Person {
                constructor(name) {
                    this.name = name;
                }
                //添加类的方法
                say(){
                    console.log('my name is '+ this.name)
                }
            }

            var p1 = new Person('张作霖')
            console.log(p1.name)
            p1.say();

            class Student extends Person {

            }
            var xm = new Student('小明')
            xm.say()

        </script>
```

### super关键字

+ 子类要重新编写父类的构造函数，必须先super调用一下父类的构造函数
+ super可以用来调用父类的方法

+ 103.html

```html
       <script>
            class Person {
                constructor(name) {
                    this.name = name;
                    console.log('父类的构造函数');
                    
                }
                //添加类的方法
                say(){
                    console.log('my name is '+ this.name)
                }
            }

            //子类编写父类的构造函数，出错
            // class Student extends Person {
            //     constructor(name){
            //         this.name = name
            //     }
            // }

            class Student extends Person {
                constructor(name){
					//必须先调用super
                    super(name);  
                    console.log('子类的构造函数');                                      
                }
            }           

            var xm = new Student('小明')
            xm.say()

        </script>
```

## 箭头函数

() => {}

const fn = () => {}
