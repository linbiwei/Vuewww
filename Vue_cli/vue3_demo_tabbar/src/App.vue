<template>
  <div id="app">
    <router-view></router-view>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
// 注册组件
import MainTabbar  from "./components/MainTabbar"
export default {
  name: 'App',
  components: {
    // 引用组件
   MainTabbar
  }
}
</script>

<style>
  /* css 初始化 */
  @import url("./assets/css/index.css");
 
</style>
