import Vue from 'vue'
import Router from 'vue-router'
import Mgmt from '@/components/Mgmt'
import Dota from '@/pages/Dota'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/mgmt',
      component: Mgmt,
      children: [
        {
          path: 'dota',
          component: Dota
        }
      ]
    }
  ]
})
