import Vue from 'vue'
import App from './App.vue'

import KyUi from './plugin'
import router from './router'
import store from './store'
Vue.use(KyUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
