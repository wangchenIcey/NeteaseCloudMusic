<template>
  <div class="navs">
    <div class="routerCon">《》</div>
    <div class="userBox">
      <div class="user"></div>
      <navItems  :itemList='state.navList' /> 
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive } from "vue";
import { json } from "../../config/base.js";
import navItems from './navitems.vue'
console.log(json);
const state = reactive({
    navList:[]
})
state.navList = json
</script>
<style scoped lang='scss'>
.navs {
  .userBox {
    padding-right: 5px;
    box-sizing: border-box;
  }
  .user {
    height: 60px;
  }
  .routerCon {
    height: 60px;
    width: 100%;
  }
  .navItem {
    height: 40px;
  }
}
</style>