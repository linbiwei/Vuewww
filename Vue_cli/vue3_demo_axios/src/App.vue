<template>
  <div id="app">.</div>
</template>

<script>

// 封装了 axios 的使用
import {request} from './network/request'

export default {
  name: "App",
  components: {},

  created(){

    // 封装了 axios 的使用
    request({
      url: "home/multidata",
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
  },
};
</script>

<style>
</style>
