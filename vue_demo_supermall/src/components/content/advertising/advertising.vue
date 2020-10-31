



<template>
  <div class="topBanner" ref="topBanner" >
    <slot name="toobammerimg"></slot>
    <div class="top-banner-text">
      <p class="js-slogan"> <slot name="toobammername"></slot> </p>
      <span class="js-description">移动客户端</span>
    </div>
    <a href>下载</a>
    <button class="close" type="button" @click="close">×</button>
  </div>
</template>

<script>
    export default {
        name: "advertising",
         data () {
            return {
                height:0,
                scrollTop: 0,
                searchTheOffset: 0,
                headertopwidthmin:0,
                TheOffsetTure:true
            }
        },
        methods: {
            topBanner () {
                document.getElementsByClassName("main")[0].setAttribute('style', `margin-top: ${this.height}px; transition: all .5s ease 0s;`);
                this.scrollTopdistance(.5,this.height)
            },
            scrollTopdistance(speed,TheOffset){
                let headertop = document.getElementsByClassName("header-top")[0]
                let headertopheigth = headertop.offsetHeight;
                let headertopwidth =  headertop.offsetWidth;
                this.headertopwidthmin = headertopwidth;
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollTop !=0 ? TheOffset = this.height - this.scrollTop:'';
                if(this.scrollTop==0){
                    TheOffset = this.height
                    this.searchTheOffset=0;
                }
                if(this.TheOffsetTure == false || TheOffset <= 0){
                    TheOffset = 0
                }
                isNaN(speed) != false ? speed = 0 :'';
                TheOffset == 0 ? this.searchTheOffset = this.scrollTop - this.height : '' ;
                if(this.scrollTop >= this.height ||this.TheOffsetTure == false) {
                    this.headertopwidthmin = headertopwidth - (headertopwidth * .3) * (this.scrollTop / 230)
                }
                if(this.searchTheOffset >=  this.height - headertopheigth/2){
                    this.searchTheOffset = headertopheigth;
                    this.headertopwidthmin = headertopwidth * 0.85
                } 
                this.$refs.topBanner.setAttribute('style', `top:-${this.scrollTop}px;transition: all ${speed}s ease 0s; `);
                document.getElementsByClassName("header-box")[0].setAttribute('style', `top:${TheOffset}px; transition: all ${speed}s ease 0s;`);
                document.getElementsByClassName("header-boo")[0].setAttribute('style', `margin-top:-${this.searchTheOffset}px; width:${this.headertopwidthmin}px;`);
            },
            close(){
                this.height = 0;
                this.TheOffsetTure = false;
                this.$refs.topBanner.remove();
                document.getElementsByClassName("header-box")[0].setAttribute('style', `top:0px; transition: all .5s ease 0s;`)
                document.getElementsByClassName("main")[0].setAttribute('style', `margin-top: 0px; transition: all .5s ease 0s;`);
            }
        },
        mounted () {
            // 页面加载完毕
            setTimeout(()=> {
                this.height = this.$refs.topBanner.offsetHeight; 
                this.topBanner()
                window.addEventListener('scroll', this.scrollTopdistance, true)
            }, 1500);
        },
        destroyed () {
            // 离开该页面需要移除这个监听的事件
           window.removeEventListener('scroll', this.scrollTopdistance)
        },
       
    };
</script>

<style>
</style>
