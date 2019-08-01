import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import cookie from 'js-cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routes from './routes'

Vue.use(Router)

// 关闭spinner
NProgress.configure({ showSpinner: false })

const router = new Router({
  mode: 'history',
  base: '/tool-box',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

// 路由白名单，所有人均可访问
const routeWhiteList = ["/login"]

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
