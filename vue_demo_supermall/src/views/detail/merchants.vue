<template>
   <div class="merchants" v-if="Object.keys(getmerchants).length !== 0 ">
       <div class="shop_info">
           <div class="shop_info_img">
               <img v-lazy="getmerchants.shopLogo" alt="">
            </div>
           <div class="shop_info_name">
              <div>{{getmerchants.name}}</div>
               <span class="shop_info_stars">
                    <i v-for="i in 5" :class="{on: i<= getmerchants.level}"></i>
               </span>
           </div>
       </div>
       <div class="info_tab">
            <div class="tab_item">
                <span class="num">{{ getmerchants.cSells |cSells  }}</span>
                <span class="desc">总销量</span>
            </div>
            <div class="tab_item">
                <span class="num">{{getmerchants.cFans}}</span>
                <span class="desc">总关注</span>
           </div>
            <div class="info_tab_evaluation">
               <div class="info_tab_evaluation_list" v-for="i in getmerchants.score">
                   <span class="evaluation_list_head">{{i.name}}</span>
                   <span>{{i.score}}</span>
                   <span class="evaluation_list_color" v-if="i.isBetter!=false">高</span>
                   <span class="evaluation_list_color" v-else>低</span>
               </div>
           </div>
       </div>
       <div class="To-merchants"><a :href="getmerchants.allGoodsUrl"> 进入店铺</a></div>
    </div>
</template>

<script>
export default {
    name: "merchants",
    props: {
        getmerchants: {
            type: Object,
            default() {
                return [];
            }
        }
    },
    filters: {
        cSells(value ){
            if (value < 10000) return value;
            return (value/10000).toFixed(1) + '万'
        }
    }
};
</script>

<style scoped>
    
</style>
