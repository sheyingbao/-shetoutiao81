import layoutHeader from './home/layout-header.vue'
import layoutAside from './home/layout-aside.vue'
import breadCrumb from './common/bread-crumb'
export default {
  install (Vue) {
    Vue.component('layout-header', layoutHeader)
    Vue.component('layout-aside', layoutAside)
    Vue.component('bread-crumb', breadCrumb)// 注册面包屑组件
  }
}
