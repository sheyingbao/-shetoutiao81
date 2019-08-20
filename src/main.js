import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementuI from 'element-ui' // 引入element组件
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import './style/index.less' // 引文件重置基础样式
Vue.config.productionTip = false
Vue.use(ElementuI) // 注册element组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
