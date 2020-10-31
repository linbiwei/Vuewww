<template>
  <div class="detail" id="detail">
    <navbar></navbar>
    <div v-if="ishiddens" class="KeepLoading">
      <div class="LoadingImg"></div>
    </div>
    <detailswiper :topImage="topImages"></detailswiper>
    <bInformation :basicIlist="gppdsinfo"></bInformation>
    <div class="information-parcel">
      <chooseSize
        :chooseSizes="getchooseSize"
        @itmeShoppingCart="indexShoppingCart"
      ></chooseSize>
      <parameter :Getparameter="gettparameter"></parameter>
      <delivery :GTdelivery="gtdeliverydata"></delivery>
    </div>
    <evaluation :Getevaluation="getevaluations"></evaluation>
    <merchants :getmerchants="getmerchantss"></merchants>
    <parameterDetails :getdetails="getdetailss"></parameterDetails>
  </div>
</template>

<script>
import navbar from "./nav-detail.vue";
import detailswiper from "./detailswiper.vue";
import BInformation from "./basicInformation.vue";
import chooseSize from "./chooseSize.vue";
import delivery from "./delivery.vue";
import parameter from "./parameter.vue";
import evaluation from "./evaluation.vue";
import merchants from "./merchants.vue";
import parameterDetails from "./parameterDetails.vue";
import {
  getdetaildata,
  Goods,
  gtdeliverys,
  getdetailsdata,
} from "network/detail.js";

export default {
  name: "detail",
  components: {
    navbar,
    detailswiper,
    BInformation,
    chooseSize,
    delivery,
    parameter,
    evaluation,
    merchants,
    parameterDetails,
  },
  data() {
    return {
      id: null,
      topImages: [],
      gppdsinfo: {},
      getchooseSize: {},
      gtdeliverydata: {},
      gettparameter: {},
      getevaluations: {},
      getmerchantss: {},
      getdetailss: {},
      ishiddens: true,
    };
  },
  created() {
    getdetaildata(this.$route.query.id).then((res) => {
      this.result = res.data.result;
      if (this.result) {
        setTimeout(() => {
          this.ishiddens = false;
        }, 1500);
      }
      // 轮播
      this.topImages = this.result.itemInfo.topImages;
      // 基本信息
      this.gppdsinfo = new Goods(
        this.result.itemInfo,
        this.result.columns,
        this.result.skuInfo
      );
      // 发货信息
      this.gtdeliverydata = new gtdeliverys(
        this.result.itemInfo.extra,
        this.result.shopInfo.services,
        this.result.promotions
      );
      // 选择颜色尺码
      this.getchooseSize = this.result.skuInfo;
      // 参数
      this.gettparameter = this.result.itemParams;
      // 评论
      this.getevaluations = this.result.rate;
      // 店铺
      this.getmerchantss = this.result.shopInfo;
      // 详情 尺寸
      this.getdetailss = new getdetailsdata(
        this.result.itemParams,
        this.result.detailInfo
      );
    });
  },
  methods: {
    indexShoppingCart(chooseSize) {
      if (localStorage.getItem("Flag") == "isLogin") {
        const product = {};
        product.title = this.gppdsinfo.title;
        product.img = chooseSize.img;
        product.name = chooseSize.name;
        product.number = chooseSize.number;
        product.price = chooseSize.price;
        product.size = chooseSize.size;
        product.sizeKey = chooseSize.sizeKey;
        product.stockId = chooseSize.stockId;
        product.styleKey = chooseSize.styleKey;
        product.totalStock = chooseSize.totalStock;
        product.iid = this.result.itemInfo.iid;
        // this.$store.commit("shoppingCarts", product);
        this.$store.dispatch("shoppingCarts", product);
        this.Prompt.showToast({
          title: "已加入购物车",
          mask: false,
          duration: 1500,
        });
      } else {
        this.$router.push({
          path: "/Login",
          query: { redirect: "/detail?id=" + this.result.itemInfo.iid },
        });
      }
    },
  },
};
</script>

<style>
#detail {
  z-index: 99999999999999999999;
  position: relative;
  background-color: #e8e8e8;
  padding-bottom: 1.5rem;
}
</style>
