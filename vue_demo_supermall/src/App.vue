<template>
  <div id="app" class="main search-index" ref="main">
  
    <!-- 下方tab -->
    <tabbar></tabbar>
    <!-- 显示 -->
    <keep-alive include="home">
      <router-view ></router-view>
    </keep-alive>
    <!-- 点击回到顶部 -->
    <topclick />
  </div>
</template>

<script>
import tabbar from 'components/content/tabbar'
import topclick from 'components/content/topclick/top'
export default {
  name: 'App',
  components: {
    tabbar,
    topclick
  },
}
</script>

<style>

  @import 'assets/css/common.css';
  @import 'assets/css/wu_ui.css';
</style>
