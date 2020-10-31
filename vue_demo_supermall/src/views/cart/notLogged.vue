<template>
  <div class="Not_logged" >
      <div class="Not_logged_top">
        登录后可同步账户购物车中的商品
        <a href="JavaScript:;" @click="$router.replace('/Login');">登录</a>
      </div>
      <div class="Not_logged_boot">
        <img src="~assets/img/gwccc.png" alt="" />
        登录后可同步购物车中商品
      </div>
    </div>
</template>

<script>

export default {
  name: "notLogged",
 
};
</script>

<style scoped>
</style>
