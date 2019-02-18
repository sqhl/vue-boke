import Vue from 'vue'
// import iView from 'iview'
import Router from 'vue-router'
import routers from './routers'

// 使用VueRouter
Vue.use(Router)

// 创建VueRouter实例
const router = new Router({
  mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
