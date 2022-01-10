<template>
  <div class="content">
    <dNav class="nav"></dNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
  <div class="footer">
    <footer />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "@vue/runtime-core";
import { dNav, footer } from "./components/index";
const state = reactive({
  clientHeight: "",
});
onMounted(() => {
  window.onresize = function () {
    let clientHeight = `${document.documentElement.clientHeight}`;
    setPx(clientHeight);
  };
  setPx(document.documentElement.clientHeight);
});
const setPx = (ht) => {
  state.clientHeight = ht - 80 + "px";
};
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  display: flex;
  height: v-bind("state.clientHeight");

  .nav {
    width: 200px;
    background-color: #ccc;
  }
  .main {
    flex: 1;
  }
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 80px;
  background-color: #fff;
  z-index: 2;
}
</style>