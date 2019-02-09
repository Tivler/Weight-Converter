import Vue from 'vue'
import Router from 'vue-router'
import converter from '@/components/converter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'converter',
      component: converter
    }
  ]
})
