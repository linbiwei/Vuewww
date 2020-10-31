<template>
   <div class="Product-information" v-if="Object.keys(basicIlist).length !== 0 ">
        <!-- 价格 -->
        <div class="price">
          <div class="price-now">
             <!-- <span class="price-now-s">¥</span> -->
             <span class="price-now-x">{{basicIlist.lowNowPrice}}</span>
          </div>
          <div class="price-old">
            <span class="price-old-s">¥{{basicIlist.lowPrice}}</span>
            <div class="discount">{{basicIlist.discountDesc}}</div>
          </div>
        </div>
        <!-- 标题 -->
        <div class="sku-name"> 
            <p> {{basicIlist.title}} </p>
        </div>
        <!--  销量 收藏-->
        <div class="sales">
          <span v-for="itme in basicIlist.columuns ">{{itme}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "basicInformation",
  props: {
    basicIlist: {
      type: Object,
      default() {
        return [];
      }
    }
  },
};
</script>

<style>
    .Product-information{
        background: #fff;
    }
    .price{
      display: flex;
    }
    .price-now .price-now-s{
      font-size: .3rem;
      line-height: .3rem;
      display: inline-block;
      padding: 0 .1rem;
    }
     .price-now .price-now-x{
      font-size: .75rem;
    }
    .price-old{
      padding: 0 .3rem;
    }
    .price-old-s{
      display: block;
      font-size: .4rem;
      text-decoration: line-through;
      color: #999;
    }
    .discount{
      display: inline-block;
      padding: 0 .1rem;
      font-size: .35rem;
      text-align: center;
      background-color: rgb(255, 232, 238); 
      color: rgb(255, 34, 85);
    }
    .Product-information .sku-name{
      width: 100%;
      font: .4rem Arial, "microsoft yahei";
      color: #666;
      padding-top: 10px;
      line-height: .7rem;
      position: relative;
      min-height: 1.2rem;
    }
    .sales{
      padding-top: .1rem;
      display: flex;
      justify-content: space-between;
    }
    .sales span{
      font-size: .32rem;
      color: #999;
    }
</style>
