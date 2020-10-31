<template>
  <div id="container" class="recommend" >
    <div class="col-box">
        <ul class="col">
          <goodslistitme v-for="itme in list.list_a" :goodslist="itme" :key="itme.iid"/>
        </ul>
        <ul class="col">
          <goodslistitme v-for="itme in list.list_b" :goodslist="itme" :key="itme.iid" />
        </ul>
    </div>
    <div class="guaranteed">
    </div> 
  </div>
</template>

<script>
import goodslistitme from "./goodslistieme";

// 滚动创建
import bscroll from "better-scroll";

export default {
  name: "gooddslist",
  components: {
    goodslistitme,
  },
  data() {
    return {
      list: {
        list_a: [],
        list_b: [],
      },
      scrollTop:0,
      scrollTopTrueFalse:true,
      homedemo:[]
    };
  },
  props: {
    goods: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  watch: {
    goods: {
      immediate: true,
      handler(newVal) {
        this.goods = newVal;
        newVal && this.draw();
      },
    },
    '$route' (val, old) {
      // 路由改变时 销毁scroll 事件
        if(val.path != '/home'){
          window.removeEventListener('scroll', this.scrollTopdistance,true)
        }else{
          window.addEventListener('scroll', this.scrollTopdistance, true);
        }
      }
  },
  methods: {
    draw() {
      this.list.list_a = this.goods.TheChosen.a
      this.list.list_b = this.goods.TheChosen.b 
      this.scrollTopTrueFalse = this.goods.scrollTopTrueFalse;
    },
    scrollTopdistance(){
      this.scrollTop = this.homedemo.scrollTop;
      if( (this.homedemo.scrollHeight - this.scrollTop) < document.body.clientHeight*1.2 && this.scrollTopTrueFalse == true ){
        this.$emit('loadMore',false);
      }
    }
  }
  ,
  mounted () {
    // 页面加载完毕
    this.homedemo = document.getElementById('home');
    window.addEventListener('scroll', this.scrollTopdistance, true)
  },
  
};
</script>

<style>
  .col-box{
    overflow: hidden;
  }
  .guaranteed{
    height: 1.5rem;
    line-height: 1.5;
  }
</style>
