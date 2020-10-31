<template>
  <!-- 结算 -->
  <div class="settlement" v-if="Flag">
    <i class="icon_select" :class="{ on: isSelectedAll }" @click="SelectedAll"
      >全选</i
    >
    <!-- 价值 -->
    <div class="total settlement_1" style="" v-if="isEditor != false">
      <div class="t_detail">
        <p class="t_main">
          总计：<em>¥</em><span class="t_price">{{ settlement }}</span>
        </p>
      </div>
      <div class="buy" @click="TheInvoicing">去结算 ({{ ToSettleAccounts }})</div>
    </div>
    <!-- 删除商品 -->
    <div class="delete-box settlement_2" v-else>
      <div class="delete" @click="deletes">删除</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "settlement",
  props: {
    isEditor: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters(["shoppingCart","shoppingCartLength"]),
    Flag() {
      if (localStorage.getItem("Flag") == "isLogin" && this.shoppingCart.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    // 价格
    settlement() {
      return this.shoppingCart
        .filter((item) => {
          return item.IfTheSelected;
        })
        .reduce((prevlue, item) => {
          return prevlue + (item.price / 100) * item.number;
        }, 0)
        .toFixed(2);
    },
    // 视频个数
    ToSettleAccounts() {
      return this.shoppingCart.filter((item) => item.IfTheSelected).length;
    },
    // 选中
    isSelectedAll() {
      return !this.shoppingCart.find((item) => !item.IfTheSelected);
    },
  },
  methods: {
    //   全选
    SelectedAll() {
      if (this.isSelectedAll) {
        this.shoppingCart.forEach((element) => (element.IfTheSelected = false));
      } else {
        this.shoppingCart.forEach((element) => (element.IfTheSelected = true));
      }
    },
    //  编辑删除
    deletes() {
      if(this.shoppingCart.filter( (item) => !item.IfTheSelected).length !=  this.shoppingCartLength){
        this.$store.state.shoppingCartList = this.shoppingCart.filter( (item) => !item.IfTheSelected );
        this.Prompt.showToast({
            title: '已删除',
            mask: false,
            duration: 1500
        });
      }else{
         this.Prompt.showToast({
            title: '请选择删除',
            mask: false,
            duration: 1500
        });
      }
       
     
    },
   
    TheInvoicing(){
        this.Prompt.showMessage({
            title: '功能未实现',
            backgroundColor: 'red',
            duration: 1500
        });
    }
  },
};
</script>

<style scoped>
</style>
