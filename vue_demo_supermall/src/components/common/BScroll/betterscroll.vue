<template>
  <div class="wrapper" id="wrapper" ref="wrapper">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  
  name: "berrerscrll",
  data() {
    return {
        Scroll:null
    };
  },
    mounted () {
      this.Scroll =  new BScroll(this.$refs.wrapper ,{
    })
  }
};
</script>

<style>

</style>
