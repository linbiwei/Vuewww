<template>
  <div class="carousel-box">
     <slot name="sliderbg"></slot>
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
         <slot></slot>
        </div>
        <div class="swiper-pagination">
          <span v-for="(i,f) in slideCount"  :class="{active: f === currentIndex-1}" :key="f" @click="pagination(i)"></span>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shuffling",
  data: function () {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      animDuration:500, // 滚动时间
      scrolling: false, // 是否正在滚动
    };
  },
  mounted: function () {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom();
      // 2.开启定时器
      this.startTimer();
    }, 100);
  },
  methods: {
   
    // 初始创建元素
    handleDom(){
        // 获取操作元素
        let swiperBox = document.getElementsByClassName('swiper-wrapper');
        let swiperSon = document.getElementsByClassName('swiper-slide')
        // 获取元素个数
        this.slideCount = swiperSon.length;
        // 创建前后子元素
        if(this.slideCount >1){
          swiperBox[0].append(swiperSon[0].cloneNode(true))
          swiperBox[0].insertBefore(swiperSon[this.slideCount-1].cloneNode(true), swiperSon[0])
          this.swiperStyle = swiperBox[0].style;
          this.totalWidth = swiperBox[0].offsetWidth;
          this.setTransform(-this.totalWidth)
        }
    },
    // 定时器
    startTimer () {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, 1000000);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    // 滚动
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    scrollContent (currentPosition) {
      // 0.设置正在滚动
      this.scrolling = true;
      // 1.开始滚动动画
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(currentPosition);
      // 2.判断滚动到的位置
      this.checkPosition();
      // 4.滚动完成
      this.scrolling = false;
    },
    checkPosition: function () {
      window.setTimeout(() => {
        // 1.校验正确的位置
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        // 2.结束移动后的回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },
    // 拖动事件
   touchStart: function (e) {
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return;
      // 2.停止定时器
      this.stopTimer();
      // 3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },
    touchMove: function (e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      // 2.设置当前的位置
      this.setTransform(moveDistance);
    },
    touchEnd: function (e) {
      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance);
      // 2.判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 && currentMove > this.totalWidth * 0.2
      ) {
        // 右边移动超过0.5
        this.currentIndex--;
      } else if (
        this.distance < 0 && currentMove > this.totalWidth * 0.2
      ) {
        // 向左移动超过0.5
        this.currentIndex++;
      }
      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 4.移动完成后重新开启定时器
      this.startTimer();
    },
    /**
     * 控制标点
     */
     pagination(i){
      if (this.scrolling) return;
      this.stopTimer();
      this.swiperStyle.transition = "0ms";
      this.currentIndex = i;
      this.setTransform(-this.currentIndex * this.totalWidth);
      this.startTimer();
    }
  },
};
</script>

<style>
  .swiper-wrapper {
    display: flex;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-pagination {
    position: absolute;
    left: 0;
    right: 0;
    bottom: .2rem;
    justify-content:center;
    display: flex;
  }
  .swiper-box a{
    box-sizing: border-box;
    display:block;
    padding:0 .2rem;
  }
  .swiper-box img{
    height: 4.6rem;
    border-radius: .2rem;
  }
  .swiper-box {
    padding: 2.65rem .2rem 0;
  }
  .swiper-pagination span{
    width: 8px;
    height: 8px;
    box-shadow: 0 1px 2px #000;
    display: inline-block;
    margin: 0 .1rem;
    border-radius: 50%;
    background-color: #ffffff;
  }

  .swiper-pagination span.active{
    background-color: #00bcd5
  }
</style>