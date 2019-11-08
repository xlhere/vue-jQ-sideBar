// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.css'
import XLSX from 'xlsx'
import VueI18n from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'
import store from './store/index'
import Axios from 'axios'
import AMap from 'vue-amap'
Vue.use(AMap)
AMap.initAMapApiLoader({
  // 高德key
  key: '6a29c998a625436ca6a21074ee2f3ea8',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geocoder','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation']
})

Vue.prototype.$axios = Axios
Vue.use(VueI18n)
let lang = (navigator.languages && navigator.languages[0]) || navigator.language
const i18n = new VueI18n({
    locale: lang.split('-')[0],    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      zh,
      en
    }
})
Vue.prototype.XLSX = XLSX

Vue.use(Element, {
  // size: Cookies.get('size') || 'medium' // set element-ui default size
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
