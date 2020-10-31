<template>
    <div v-if="Object.keys(GTdelivery).length !== 0 ">
        <div class="dis-flex" v-if=" GTdelivery.promotions!=undefined ">
          <div class="dis-r">优惠</div>
          <div class="dis-c">
              <span class="promotions-span" v-for="i in GTdelivery.promotions.list">{{i}}</span>
          </div>
        </div> 

        <div class="dis-flex" v-if="GTdelivery.extra.sendAddress!=''">
          <div class="dis-r">发货</div>
          <div class="dis-c"> {{GTdelivery.extra.sendAddress }} /  {{GTdelivery.extra.deliveryTime}}小时发货</div>
        </div>
        <div class="dis-flex">
          <div class="dis-r">运费</div>
          <div class="dis-c">免运费</div>
        </div> 

        <div class="slogan">
          <ul>
              <li v-for="i in GTdelivery.services">{{i.name}}</li>
          </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "delivery",
    props: {
        GTdelivery: {
            type: Object,
            default() {
                return [];
            }
        }
    },
};
</script>

<style scoped>

</style>