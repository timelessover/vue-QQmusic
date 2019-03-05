import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Home.vue'),
      children:[
        {
          path:"/index/songsheet",
          // component:HotSongSheet
        }
      ]
    },
    {
      path:'/singerlist',
      component: () => import('./views/SIngerlist.vue'),
      children:[
        {
          path:'/singerlist/singer/:id',
          // component:() => import('./view/Singer.vue')
        }
      ]
    },
    {
      path:'/toplists',
      // component:() => import('./view/')
      children:[
        {
          path:'/toplists/toplist/:id',
          // component:() => import('')
        }
      ]
    },
    {
      path:'/search',
      // component:() => 
    },
    {
      path:'/album/:id',
      // component:() => import('')
    },
    {
      path:'/user',
      // component:() => import('')
    }
  ]
})
