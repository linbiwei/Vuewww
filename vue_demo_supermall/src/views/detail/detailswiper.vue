<template>
  <swiper class="detailswiper">
    <swiper-item
      v-for="item in topImage"
      :style="{ backgroundImage: 'url(' + item + ')' }"
      class="detailswiperlist"
    >
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/content/Shuffling/";
export default {
  name: "detailswiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImage: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.detailswiper .swiper-box {
  padding: 0;
}
.detailswiper .swiper-box .swiper-container {
  border-radius: 0 !important;
}
.detailswiperlist {
  border-radius: 0 !important;
  height: 10rem;
  width: 100vw;
  background: no-repeat center center;
  background-size:75% ;

}
</style>
