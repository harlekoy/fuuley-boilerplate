import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/state/store'
import '@/components/_globals'
import '@/plugins'

Vue.config.productionTip = false
Vue.prototype.$appName = 'ordern'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
