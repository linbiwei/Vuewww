<template>
   <swiper>
    <div class="slider-bg box-sw" slot="sliderbg"></div>

    <swiper-item v-for="item in cbanners" :key="item.background">
      <a :href="item.link">
        <img v-lazy="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/content/Shuffling/";
export default {
  name: "ShufflingFigure",
   props: {
    cbanners:{
        type:Array,
        default() {
                return []
            }
        }
    },
    components:{
        Swiper,SwiperItem
    }
};
</script>

<style>

</style>
