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

Vue.use(VueI18n)
let lang = (navigator.languages && navigator.languages[0]) || navigator.language
const i18n = new VueI18n({
    locale: lang.split('-')[0],    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      zh
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
  components: { App },
  template: '<App/>'
})
