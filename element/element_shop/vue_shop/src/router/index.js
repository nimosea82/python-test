import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入login组件
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', name: 'welcome', component: Welcome },
      { path: '/users', name: 'users', component: Users }
    ]
  }

]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫,访问没有权限的页面返回登录页面

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next()是放行，next('/login')是强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // token不存在直接跳转到login
  if (!tokenStr) return next('/login')
  // token存在，放行
  next()
})

export default router
