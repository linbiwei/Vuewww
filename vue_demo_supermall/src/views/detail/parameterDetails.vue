<template>
  <div class="goods-details" v-if="Object.keys(getdetails).length !== 0">
    <div class="goods-details-tit">
      <div @click="Accordingclick(1)" :class="{ on: According == 1 }">
        商品介绍
      </div>
      <div @click="Accordingclick(2)" :class="{ on: According == 2 }">
        尺码说明
      </div>
    </div>
    <div class="goods-details-nr">
      <!-- 图片 -->
      <div class="jies-tp" :class="{ on: According == 1 }">
        <img v-lazy="i" alt="" v-for="i in getdetails.detailInfo.detailImage[0].list" />
      </div>
      <!-- 参数 -->
      <div class="parameter" :class="{ on: According == 2 }">
       <div class="size">
           <p class="size_title">{{getdetails.rule.disclaimer}}</p>
            <div v-for="(i,index) in getdetails.rule.tables"  class="size_list">
                <div v-for="j in i" :class="{no:index!=0}">
                    <div v-for="(u,n) in j" :class="{color:n==0}">{{u}}</div>
                </div>
            </div>
       </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "parameterDetails",
  data() {
    return {
      According: 1,
    };
  },
  props: {
    getdetails: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  methods: {
    Accordingclick(index) {
      this.According = index;
    },
  },
};
</script>

<style scoped>
</style>