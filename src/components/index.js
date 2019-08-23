import layoutAside from './home/layout-aside'
import layoutHeader from './home/layou-header'
// elementUl 导出的对象 对象里有一个方法 install
// Vue.use(elementUI)=> 调用其提供的install方法，并且在方法中传入Vue对象
export default {
  install (Vue) {
    // 注册了layout-header 组件
    Vue.component('layout-header', layoutHeader)
    // 注册左侧菜单组件
    Vue.component('layout-aside', layoutAside)
    // this.$message
  }
}
