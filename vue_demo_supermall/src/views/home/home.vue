<template>
  <div class="home" ref="home" id="home">
        <navBarr></navBarr>
        <swiper :cbanners="banners"></swiper>
        <home-recommends :homerecommends="recommend"></home-recommends>
        <newProduct></newProduct>
        <options :titles="['流行', '新款', '精选']" @goodsclick="goodclick"></options>
        <goodsitme :goods="{TheChosen,scrollTopTrueFalse}" @loadMore='homeloadMore' key="" ></goodsitme>
  </div>
</template>

<script>

import navBarr from "./nav-home";
import swiper from "./ShufflingFigure";
import homeRecommends from "./recommends";
import newProduct from "./NewProduct";

import options from "components/content/optionsBar/options";
import goodsitme from "components/content/goods/goodslist";
import { gethomemultiadata, gethomemugooddata } from "../../network/home.js";


export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list:{a:[],b:[]}},
        new: { page: 0, list: {a:[],b:[]}},
        sell: { page: 0, list: {a:[],b:[]}},
      },
      Theselected: "pop",
      scrollTopTrueFalse:true,
      scroll :null
    };
  },
  components: {
    navBarr,
    swiper,
    homeRecommends,
    newProduct,
    options,
    goodsitme,
  },
  created() {
    // 轮播图 跟下面
    this.gethomemultiadatas();
    // 选项
    this.gethomemugooddatas("pop");
    this.gethomemugooddatas("new");
    this.gethomemugooddatas("sell");
  },
  methods: {
    gethomemultiadatas() {
      gethomemultiadata()
        .then((res) => {
          this.banners = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        })
        .catch((error) => {
          this.gethomemultiadatas();
          console.log("请求失败");
        });
    },
    gethomemugooddatas(tit) {
      const page = this.goods[tit].page + 1;
      gethomemugooddata(tit, page)
        .then((res) => {
          const itemindex = Math.floor(res.data.data.list.length / 2);
          this.goods[tit].list.a.push(...res.data.data.list.slice(0, -itemindex));
          this.goods[tit].list.b.push(...res.data.data.list.slice(itemindex));
          this.goods[tit].page += 1;
          this.scrollTopTrueFalse = true;
        })
        .catch((error) => {
          if(error.response === undefined) {
            this.gethomemugooddatas(tit);
          }
          // console.log(error.response.status,"请求失败");
        });
    },
    // 选项栏点击
    goodclick(i) {
      switch (i) {
        case 0:
          this.Theselected = "pop";
          break;
        case 1:
          this.Theselected = "new";
          break;
        case 2:
          this.Theselected = "sell";
          break;
      }
    },
    // 加载更多
    homeloadMore(i){
      this.gethomemugooddatas(this.Theselected);
      this.scrollTopTrueFalse = i
    },

  },
  // 计算属性
  computed: {
    TheChosen() {
      return this.goods[this.Theselected].list;
    }
  },
  // 离开路由
  beforeRouteLeave(to, from, next) {
    from.meta.scrollTop = this.$refs.home.scrollTop
    next()
  },
  // 进入路由之前执行的函数
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$refs.home.scrollTop = to.meta.scrollTop
    })
  }
}
</script>

<style scoped>
 #home{
      height: calc(100vh - 1.2rem);
      
      overflow-y:scroll ;
  }
  #home::-webkit-scrollbar { width: 0 !important }
</style>
