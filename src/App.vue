<template>
  <div id="app">
    <Index-Head/>
    <router-view/>
    <!-- <Player> -->
  </div>
</template>

<script>
import IndexHead from '@/components/IndexHead.vue'
import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'


export default {
    components: {
      IndexHead
    }
}
</script>


<style lang="scss">
  //去除滚动条
  ::-webkit-scrollbar{
      display:none;
  }
</style>
