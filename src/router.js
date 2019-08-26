import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login/index.vue'
import Main from './views/home/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {

      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '',
        component: Main// 默认二级路由组件
      }, {
        path: '/home/comment', // 评论列表组件
        component: () => import('./views/comment') // 按需加载写法
      }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
