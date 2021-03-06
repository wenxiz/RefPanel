import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect: '/login'
      redirect: '/home'
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }, {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    }
  ]
})
