<template>
  <div id="app">
      <h1>
          我是主页
      </h1>

      <!-- 路由嵌套 -->
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

