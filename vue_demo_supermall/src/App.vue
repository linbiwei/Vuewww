<template>
  <div id="app" class="main search-index">
    <tabbar></tabbar>


    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from 'components/content/tabbar'

export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
  @import 'assets/css/common.css'
</style>
