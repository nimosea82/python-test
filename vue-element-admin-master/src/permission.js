import router from './router' // 导入路由用于路由挂载beforeEach
import store from './store' // 导入store，用于vuex的获得与存储
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条控件
// nprogress安装：npm install --save nprogress
import 'nprogress/nprogress.css' // 导入进度条样式
import { getToken } from '@/utils/auth' // 从cookie获得token的函数
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // 想禁用进度环？设置 showSpinner 为 false

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  /**
   * 挂载路由导航守卫,访问没有权限的页面返回登录页面
   * to  Route: 即将要进入的目标 路由对象
   * from 代表从哪个路径跳转而来
   * next 是一个函数，表示放行
   * next()是放行，next('/login')是强制跳转
   * start progress bar
  */
  NProgress.start()

  // 获得路由的标题名称，赋值到网站标签的title
  document.title = getPageTitle(to.meta.title)

  // 是否登陆过
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已经登录，访问了/login页面自动进入首页
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // 访问其他页面处理
      // 首先从store获得用户信息
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 设置用户信息
          /**
           * import store from './store'
           * 导入store整个文件夹，目录在src/store
           * 导入的store对象入口文件为store/index.js，必须取名为index.js,作为对外的唯一接口
           */
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
