<template>
    <div class="shopping_cart_list" id="shopping_cart_list">
        <div class="shopping_cart_inStock" style="display: block" v-if="shoppingCart.length!=0">
            <div class="order-list" id="order-list">
            <div class="list-item" :id="itme.stockId" v-for="(itme,index) in shoppingCart" >
                <div
                class="icon_select"
                :class="{ on: itme.IfTheSelected == true }"
                @click="itme.IfTheSelected = !itme.IfTheSelected"
                >
                <i></i>
                </div>
                <div class="cmmdty">
                <div class="cmmdty-img">
                    <img :src="itme.img" alt="" />
                </div>
                <div class="cmmdty-info">
                    <a href="JavaScript:;" @click="tiaozhuan(itme.iid)">
                    <p>{{ itme.title }}</p>
                    </a>
                    <div class="info-middle">
                    <p>
                        <span>{{ itme.styleKey }}:{{ itme.name }}</span>
                    </p>
                    <p>
                        <span>{{ itme.sizeKey }}:{{ itme.size }}</span>
                    </p>
                    </div>
                    <div class="info-bottom">
                    <div class="market-price">
                        ¥
                        <span class="market-price-span">{{
                        (itme.price / 100).toFixed(2)
                        }}</span>
                    </div>
                    <div class="counter">
                        <span class="gray-reduce" @click="reduce(index)" :class="{ on : itme.number > 1 }"></span>
                        <input type="text" v-model="itme.number" v-on:input="number(itme.number,index)"/>
                        <span class="black-add"  @click="increase(index)" :class="{ on : itme.number >= itme.totalStock }"></span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <!-- 没有物品 -->
          <div class="Not_logged" v-else>
            <div class="Not_logged_boot">
                <img style="width: 100%;" src="https://s10.mogucdn.com/mlcdn/c45406/180704_3ac3b297lghla2jjdhe23d5jfgddf_1500x1170.png" alt="" />
                快去挑选你喜欢的
            </div>
        </div>

     </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IsloggedIn",
  computed: {
    ...mapGetters(["shoppingCart"]),
   
  },
  methods: {
    // 减少
    reduce(index){
        if(this.shoppingCart[index].number > 1){
            this.shoppingCart[index].number--;
        }
    },
    // 增加
    increase(index){
        if(this.shoppingCart[index].number < this.shoppingCart[index].totalStock){
            this.shoppingCart[index].number++;
        }
    },
    number(value,index){
        if(typeof value != 'number'){
            this.shoppingCart[index].number = value.replace(/\D/g, '');
            if(this.shoppingCart[index].number > this.shoppingCart[index].totalStock){
                this.shoppingCart[index].number = this.shoppingCart[index].totalStock;
            }
        }
    },
    tiaozhuan(iid){
           this.$router.push({
            path:'/detail/', 
            query:{
                id:iid
            }
        }) 
    }
  },
  watch: {
    shoppingCart: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
       localStorage.setItem('shoppingCartList', JSON.stringify(this.shoppingCart));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
</style>
