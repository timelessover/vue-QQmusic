<template>
  <div id="app">
    <Index-Head/>
    <router-view/>
    <player></player>
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
</style>
