import Vue from 'vue'
import Router from 'vue-router'
import Mgmt from '@/components/Mgmt'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mgmt',
      component: Mgmt,
      children: [
        {
          path: 'home',
          component: Home
        }
      ]
    }
  ]
})
