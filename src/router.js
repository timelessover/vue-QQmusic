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
          component: () => import('./views/HotSongSheet.vue')
        }
      ]
    },
    {
      path:'/singerlist',
      component: () => import('./views/Singerlist.vue'),
      children:[
        {
          path:'/singerlist/singer/:id',
          component:() => import('./views/Singer.vue')
        }
      ]
    },
    {
      path:'/toplists',
      component:() => import('./views/Toplists.vue'),
      children:[
        {
          path:'/toplists/toplist/:id',
          component:() => import('./views/Toplist.vue')
        }
      ]
    },
    {
      path:'/search',
      component:() => import('./views/Search.vue')
    },
    {
      path:'/album/:id',
      component:() => import('./views/Album.vue')
    },
    {
      path:'/user',
      component:() => import('./views/User.vue')
    }
  ]
})
