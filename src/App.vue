<template>
  <div id="app">
    
    <Index-Head/>
    <transition name="fade" mode="out-in">
       <router-view/>
    </transition>
    <player/>
    
  </div>
</template>

<script>
import IndexHead from "@/components/IndexHead.vue";
import Player from "@/components/Player";
import "@/assets/css/reset.css";
import "@/assets/font/iconfont.css";

export default {
  components: {
    IndexHead,
    Player
  }
};
</script>


<style lang="scss">
//去除滚动条
::-webkit-scrollbar {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
