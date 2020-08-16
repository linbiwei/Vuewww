<template>
  <div id="maintab">
    <tabbar>
      <tabbaritme path="/home" activeColor="#4444">
         <img slot="itme-img" src="../assets/img/tabber/sye.png" alt="">
         <img slot="itme-img-active" src="../assets/img/tabber/sye1.png" alt="">
         <div  slot="itme-text"> 首页 </div>
      </tabbaritme>
      <tabbaritme path="/category" activeColor="#4444">
        <img slot="itme-img" src="../assets/img/tabber/mul.png" alt=""> 
        <img slot="itme-img-active" src="../assets/img/tabber/mul1.png" alt="">
        <div  slot="itme-text"> 分类 </div>
      </tabbaritme>
      <tabbaritme path="/cart" activeColor="#4444">
        <img slot="itme-img" src="../assets/img/tabber/gwc.png" alt=""> 
        <img slot="itme-img-active" src="../assets/img/tabber/gwc1.png" alt="">
        <div  slot="itme-text">  购物车    </div>
      </tabbaritme>
      <tabbaritme path="/profile" activeColor="#4444">
        <img slot="itme-img" src="../assets/img/tabber/wod.png" alt="">
        <img slot="itme-img-active" src="../assets/img/tabber/wod1.png" alt="">
        <div slot="itme-text"> 我的 </div>
      </tabbaritme>
    </tabbar>
  </div>
</template>

<script>
// 注册组件
import tabbar  from "./Tabbra"
import tabbaritme  from "./TabbraItme"
export default {
  name: 'maintab',
  components: {
    // 引用组件
    tabbar,
    tabbaritme
  }
}
</script>

<style>

</style>
