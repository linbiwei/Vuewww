<template>
  <div class="header-box" ref="headerBox">
    <div class="header-mobile">
      <nav-bar>
        <div class="header-top" slot="mb-nav" >
          <a href="JavaScript:;" class="classify" slot="mb-left" @click="$router.replace('/category');">
            <img src="~assets/img/157199320847433454.png" alt />
          </a>
          <a href="JavaScript:;" class="logo" slot="mb-center">
            <img src="~assets/img/heade-rlogo.png" alt />
          </a>
          <a href="JavaScript:;" class="logbtn" slot="mb-right" @click="$router.replace('/profile');">
            <!-- <img src="~assets/img/157199321817918653.png" alt="登录"> -->
            <img src="~assets/img/157199322108277118.png" alt="个人中心" />
          </a>
        </div>
      </nav-bar>
       <div class="header-boo">
          <div class="header-search">
            <a class="search" href></a>
            <i class="search-icon"></i>
            <input
              class="searchInput"
              name
              type="text"
              placeholder="418火爆开抢 满千减百"
              autocomplete="off"
            />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/content/navbar/navbar";
export default {
  name: "nav-home",
  components: {
    navBar,
    scrollTop:0,
    logostyle:[],
    targetstyle:[],
    targetWidth:0,
    targetHeight:0
  },
  methods: {
    scrollTopdistance(){
        this.scrollTop = document.getElementById('home').scrollTop;
        if(this.scrollTop < this.targetHeight){
          this.targetstyle.marginTop = -this.scrollTop +'px';
          this.targetstyle.width = this.targetWidth - (this.scrollTop * 1.3) +'px';
          this.logostyle.opacity =  1 - this.scrollTop / 50 ; 
        }else{
          this.targetstyle.marginTop = - this.targetHeight +'px';
          this.targetstyle.width = this.targetWidth - (this.targetHeight * 1.3) +'px';
          this.logostyle.opacity = 0 ; 
        }
    }
  },
  mounted () {
    // 页面加载完毕
    const boo = document.getElementsByClassName('header-boo')[0];
    const logo = document.getElementsByClassName('logo')[0];
    this.targetstyle = boo.style ; 
    this.targetWidth = boo.offsetWidth;
    this.targetHeight = boo.offsetHeight;
    this.logostyle = logo.style;
    window.addEventListener('scroll', this.scrollTopdistance, true);
  },
  watch: {
      // 路由改变时 销毁scroll 事件
      '$route' (val, old) {
        if(val.path != '/home'){
          window.removeEventListener('scroll', this.scrollTopdistance,true)
        }else{
          window.addEventListener('scroll', this.scrollTopdistance, true);
        }
      }
  }
 
};
</script>

<style>

</style>
