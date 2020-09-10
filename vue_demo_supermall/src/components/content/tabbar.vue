

<template>
  <div class="commonNav box-sw">
    <tabbaritme path="/home">
      <img slot="itme-img" src="~assets/img/1.png" alt />
      <img slot="itme-img-active" src="~assets/img/11.png" alt />
      <span slot="itme-text">首页</span>
    </tabbaritme>
    <tabbaritme path="/seek">
      <img slot="itme-img" src="~assets/img/6.png" alt />
      <img slot="itme-img-active" src="~assets/img/66.png" alt />
      <span slot="itme-text">搜索</span>
    </tabbaritme>
    <tabbaritme path="/category">
      <img slot="itme-img" src="~assets/img/5.png" alt />
      <img slot="itme-img-active" src="~assets/img/55.png" alt />
      <span slot="itme-text">分类</span>
    </tabbaritme>
    
    <tabbaritme path="/cart" >
      <img slot="itme-img" src="~assets/img/3.png" alt />
      <img slot="itme-img-active" src="~assets/img/33.png" alt />
      <span slot="itme-text">购物车</span>
    </tabbaritme>

    <tabbaritme path="/profile">
      <img slot="itme-img" src="~assets/img/4.png" alt />
      <img slot="itme-img-active" src="~assets/img/22.png" alt />
      <span slot="itme-text">我的</span>
    </tabbaritme>
  </div>
</template>

<script>
// 注册组件
import tabbaritme from "components/common/tabbarltme";
export default {
  name: "maintab",
  components: {
    // 引用组件
    tabbaritme,
  },
};
</script>

<style>
</style>
