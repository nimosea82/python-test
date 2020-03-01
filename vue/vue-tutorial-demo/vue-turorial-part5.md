# vue基本教程

## 深入了解组件
	
## 组件注册

## 组件名

在注册一个组件的时候，我们始终需要给它一个名字。比如在全局注册的时候我们已经看到了：
```
Vue.component('my-component-name', { /* ... */ })
```

该组件名就是 Vue.component 的第一个参数,我们强烈推荐遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。
你可以在 [风格指南](https://cn.vuejs.org/v2/style-guide/)中查阅到关于组件名的其它建议。


## 全局注册

 ```
 Vue.component('my-component-name', { /* ... */ })
 ```

以上实例为全局注册，在任何新创建的Vue根实例中都可以使用

## 局部注册

在这些情况下，你可以通过一个普通的 JavaScript 对象来定义组件：

 ```
var ComponentA = { /* ... */ }
var ComponentB = { /* ... */ }
var ComponentC = { /* ... */ }
 ```
 
 然后在 components 选项中定义你想要使用的组件：
 
 ```
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
  ```