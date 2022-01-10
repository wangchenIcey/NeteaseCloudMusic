<template>
      <!-- <li class="navItem" v-for="(i,index) in state.navList" :key="index">{{i.name}}</li> -->
1
</template>
<script setup lang='ts'>
import {defineProps} from 'vue'
const props = defineProps({
  itemList: Array
})
 console.log(props);
 
</script>
<style scoped lang='scss'>
</style>