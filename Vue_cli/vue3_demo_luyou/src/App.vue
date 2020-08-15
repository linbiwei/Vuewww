<template>
  <div id="app">
    <!-- 1. router-link  路由跳转 -->
    <!-- 
        类似 a 标签
        tag 换掉默认渲染的标签 
        replace 取消返回键功能 
        active-class  更改默认选中class 
    -->
    <router-link to="/home" tag="button" replace active-class="active">主页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/'+userid" replace>用户中心</router-link>
    <!-- <router-link to='/profile'>档案</router-link> -->

    <!--  路由传参  query -->
    <!-- <router-link :to="{path:'/profile',query:{name:'linbiwei'}}">档案</router-link> -->
    <!--  -->
    <button @click=" profileclick">档案</button>

    <!-- 2. 通过点击代码跳转路由  -->
    <!-- <button @click="syclick"> 首页</button> -->
    <!-- <button  @click="gyclick"> 关于</button> -->

    <!-- 显示位置 站位 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        userid:'linbiwei'
      }
    },
    methods: {
      syclick(){
        // this.$router.path('/home')
        //   replace 取消返回键功能 
        this.$router.replace('/home')
      },
      gyclick(){
        // this.$router.path('/about')
        this.$router.replace('/about')
      },
      profileclick(){
         this.$router.pust({
           path:'/profile',
           query:{
             name:'linbiwei'
            }
         })
      }
    }

  }
</script>

<style >
.active {
  color: brown;
}
</style>