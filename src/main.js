// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'
import 'reset-css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
