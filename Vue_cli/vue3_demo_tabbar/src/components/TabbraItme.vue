<template>
  <div class="tabbaritme" @click="tabbarclick">
    <div v-if="!isActive">
      <slot name="itme-img"></slot>
    </div>
    <div v-else>
      <slot name="itme-img-active"></slot>
    </div>
    <div :style="Color"> <slot name="itme-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tab-bar-itme",
  props: {
      path:String,
      activeColor:{
          type:String,
        //   default 没传 默认
          default:'red'
      }
  },
  data() {
    return {
    //   isActive: true,
    };
  },
   computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !==-1
        },
        Color(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },
  methods: {
    tabbarclick() {
      this.$router.replace(this.path)
    },
  },
};
</script>

<style>
.tabbaritme {
  text-align: center;
  flex-grow: 1;
  font-size: 12px;
}
.tabbaritme img {
  display: block;
  width: 25px;
  margin: 5px auto 0;
}

</style>
