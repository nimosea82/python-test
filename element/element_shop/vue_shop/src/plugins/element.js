import Vue from 'vue'
import { Menu, Submenu, MenuItem, Button, Form, FormItem, Input, Message, Container, Header, Aside, Main } from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

// 全局挂载Message,$message
Vue.prototype.$message = Message
