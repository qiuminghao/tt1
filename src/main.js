import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://123.207.124.70:3001/api/v1'
Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  ElementUI,
  render: h => h(App),
  template: '<App/>'
})
