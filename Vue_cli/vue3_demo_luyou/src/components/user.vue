<template>
  <div id="app">
      <h1>
          我是用户中心
      </h1>
      <!-- 获取用户ID  
        $route.params.user_id 
      -->
      <p>{{$route.params.user_id}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

