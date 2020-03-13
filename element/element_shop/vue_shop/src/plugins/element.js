import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Container, Header, Aside } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
// 全局挂载Message,$message
Vue.prototype.$message = Message
