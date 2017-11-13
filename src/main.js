// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/components/App'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import '@/assets/iconfont/iconfont.css'
import '@/assets/styles/main.scss'

Vue.config.productionTip = false

sync(store, router)

Vue.use(ElementUI)

Vue.use(VueProgressBar, {
  color: 'red'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
