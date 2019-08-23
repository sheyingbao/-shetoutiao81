import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementuI from 'element-ui' // 引入element组件
import Component from './components'// 引入我们自己定义的插件
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import './styles/index.less' // 引文件重置基础样式
import axios from 'axios' //  引入axios
// 将后台接口的地址给axios的bashURL
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios // 把axios插件给了Vue对象的原型属性

Vue.config.productionTip = false
Vue.use(ElementuI) // 注册element组件
Vue.use(Component) // 注册全局的自定义组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
