import Vue from 'vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  Submenu,
  MenuItem,
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination
} from 'element-ui'

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
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
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Pagination)

// 全局挂载Message,$message
Vue.prototype.$message = Message
