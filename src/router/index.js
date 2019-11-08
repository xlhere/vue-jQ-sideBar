import Vue from 'vue'
import Router from 'vue-router'
import SideBar from '@/views/SideBar'
import ImportFile from '@/views/ImportFile'
import Vuex from '@/views/Vuex'
import BMap from '@/views/BMap'
import Screenshot from '@/views/Screenshot'
import Area from '@/views/Area'
import AMap from '@/views/AMap'

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
    },
    {
      path: '/screenshot',
      name: 'Screenshot',
      component: Screenshot
    },
    {
      path: '/area',
      name: 'Area',
      component: Area
    },
    {
      path: '/aMap',
      name: 'AMap',
      component: AMap
    }
  ]
})
