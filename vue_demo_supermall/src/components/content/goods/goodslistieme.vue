<template>
  <li @click="lid()">
      <img
        v-lazy="goodslist.show.img"
        alt=""
      />
      <div class="recommend-title">
        <span class="recommend-title-p" >{{goodslist.title}}</span>
      </div>
      <div class="recommend-price-box">
        <span class="recommend-sign">￥</span>
        <span class="recommend-price">{{goodslist.price}}</span>
        <span class="recommend-payed"> {{goodslist.cfav}}人已购买</span>
      </div>
  </li>
</template>

<script>
export default {
  name: "goodslistieme", 
  props: {
    goodslist: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    lid(){
      // this.$router.push('/detail/' + this.goodslist.iid)
       this.$router.push({
          path:'/detail/', 
          query:{
            id:this.goodslist.iid
          }
       })
    }
  }
};
</script>

<style>
</style>
