import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/components/SideBar'
import ImportFile from '@/components/ImportFile'
import Vuex from '@/components/Vuex'
import BMap from '@/components/BMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SideBar',
      component: SideBar
    },
    {
      path: '/importFile',
      name: 'ImportFile',
      component: ImportFile
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/map',
      name: 'BMap',
      component: BMap
    }
  ]
})
