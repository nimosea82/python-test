// 项目入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/uview.js'
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'
// 挂载到Vue的原型$http上
Vue.prototype.$http = axios
// 配置请求的地址
// axios.defaults.baseURL = 'https://wxapp.yh2j.com/api/'
// vue_shop官方网络请求地址
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// axios.defaults.baseURL = 'http://localhost:8142/api/'

// 添加api请求头，附带token
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
