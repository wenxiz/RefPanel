// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import { Row, Col, Container, Main, Form, FormItem, Input, Select, Option, Button, Tabs, TabPane, Image } from 'element-ui'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'
import 'reset-css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Container)
Vue.use(Row)
Vue.use(Col)
Vue.use(Main)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Image)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
