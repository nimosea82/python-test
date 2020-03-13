// 项目入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 挂载到Vue的原型$http上
Vue.prototype.$http = axios
// 配置请求的地址
axios.defaults.baseURL = 'https://wxapp.yh2j.com/api/'
// axios.defaults.baseURL = 'http://localhost:8142/api/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
