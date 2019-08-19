import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementuI from 'element-ui' // 引入UI
Vue.config.productionTip = false
Vue.use(ElementuI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
