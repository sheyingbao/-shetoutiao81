import layoutHeader from './home/layout-header.vue'
import layoutAside from './home/layout-aside.vue'
export default {
  install (Vue) {
    Vue.component('layout-header', layoutHeader)
    Vue.component('layout-aside', layoutAside)
  }
}
