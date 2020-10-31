<template>
  <div class="Content_page_box">
    <nav-bar>
      <div class="seek-top on" slot="mb-nav" :style="[seekTopStyle]">
        <a
          href="JavaScript:;"
          @click="backclick"
          class="return"
          slot="mb-left"
          :style="[OrSoStyle]"
        ></a>
        <div class="Hidden-surprise" slot="mb-center" :style="[HiddenSurprise]">
          <ul>
            <li
              v-for="(i, index) in titles"
              :class="{ on: classon == index }"
              @click="titleclick(index)"
            >
              {{ i }}
            </li>
          </ul>
        </div>
        <div class="msShortcutMenu" slot="mb-right" :style="[OrSoStyle]" @click="openclick = !openclick" >
          <ul v-if="openclick===true">
            <li class="Menu-Home">
              <a href="JavaScript:;" @click="jumpclick('/home')">首页</a>
            </li>
            <li class="Menu-seeklist" @click="jumpclick('/seek')">
              <a href="JavaScript:;">搜索</a>
            </li>
            <li class="Menu-ka" @click="jumpclick('/cart')">
              <a href="JavaScript:;">购物车</a>
            </li>
            <li class="Menu-wode" @click="jumpclick('/profile')">
              <a href="JavaScript:;">个人中心</a>
            </li>
          </ul>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/content/navbar/navbar";
export default {
  name: "nav-home",
  components: {
    navBar,
  },
  data() {
    return {
      titles: ["商品", "评价", "详情"],
      openclick:false,
      classon: 0,
      seekTopStyle:null,
      HiddenSurprise:null,
      OrSoStyle:null,
      scrollTops:null,
      figure:0,
      ContentPagetit:0,
      GoodsDetails:0,
    };
  },
  methods: {
    titleclick(i) {
      this.classon = i;
      let distance;
      if(i ===0){
        distance = 0
      }else if(i===1){
          distance = this.ContentPagetit 
      }else if(i===2){ 
          distance = this.GoodsDetails
      }
      document.documentElement.scrollTop  = distance;
    },
    backclick() {
      this.$router.go(-1);
    },
    jumpclick(path){
        this.$router.replace(path);
    },
    scrollTop() {
        this.scrollTops = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // 样式改变
        this.scrollTops < 100 ? this.figure = this.scrollTops / 100 : this.figure = 1;
        this.seekTopStyle = {
            'background': 'hsla(0,0%,100%,' + this.figure + ')',
            'border-color': 'hsla(0,0%,90%,' + this.figure + ')',
            'box-shadow': '0 0 ' + Math.round(this.figure * 5) + 'px rgba(0, 0, 0, 0.2)'
        }
        this.HiddenSurprise = {
            'opacity': this.figure,
            'visibility': 'initial'
        }
        this.OrSoStyle = {'box-shadow': '0 0 ' + Math.round(5 - this.figure * 5) + 'px rgba(0, 0, 0, 0.2)'}
        // 滚动位置
        this.ContentPagetit = document.querySelector('#Content_pagetit').offsetTop-55 ;
        this.GoodsDetails = document.querySelector('.goods-details').offsetTop -55;

        if( this.scrollTops < this.ContentPagetit ){
            this.classon = 0 
        }else if( this.scrollTops >= this.ContentPagetit  ){
            this.classon = 1
        } 
        if(this.scrollTops >= this.GoodsDetails){
            this.classon = 2
        }
    }

  },
  mounted() {
    // 页面加载完毕
    window.addEventListener("scroll", this.scrollTop);
  },
  destroyed() {
    //   离开
    window.removeEventListener("scroll", this.scrollTop);
  },
};
</script>

<style scoped>
.Content_page_box {
  padding: 0;
}
</style>
