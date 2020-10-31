<template>
    <div class="dis-flex" v-if="Object.keys(chooseSizes).length !== 0"  @click="ShutDown=true" >
        <div class="dis-r">已选</div>
        <div class="dis-c"> {{TheChosen.name}}，{{TheChosen.size}}，{{number}}件</div>
        <div class="dis-l"></div>

        <!-- 悬浮窗口 -->
        <div class="popup-window" @click.stop="ShutDown=false" v-if=" ShutDown===true">
            <div class="popup-min"  @click.stop>
                <!-- 选择的详情 -->
                <div class="popup-top">
                    <div class="popup-img">
                        <img v-lazy="TheChosen.img" alt="">
                    </div>
                    <div class="popup-specifications">
                        <div class="popup-price">
                            <span>￥</span>
                            <!-- 保留两位小数 -->
                            <span class="price-span">{{(TheChosen.price/100).toFixed(2)}}</span>
                        </div>
                        <div class="popup-type">
                            <span>已选</span>
                             {{TheChosen.name}}，{{TheChosen.size}}，{{number}}件
                        </div>
                    </div>
                    <i class="popup-ShutDown" @click="ShutDown=false"></i>
                </div>

               <div class="popupSkuArea">
                   <!-- 类型 -->
                   <div class="popupSkuArea-list" v-for="(i,l) in chooseSizes.props" :key="l">
                       <div class="popupSkuArea-tit">{{i.label}}</div>
                       <div>
                          <span v-for="(item,index) in i.list" :key="item.index" @click="clickchoose(index,l)" :class="{on: index === gtchoose['index_'+ l]}" >{{item.name}}</span>
                       </div>
                   </div>
                   <!-- 数量 -->
                    <div class="version-number">
                        <div class="version">
                            <div class="version-tit">数量:</div>
                            <div>
                                <div class="counter"> 
                                    <span class="gray-reduce" @click="reduce" :class="{ on : number > 1 }"></span>
                                    <input type="text" v-model="number"/>
                                    <span class="black-add" @click="increase" :class="{ on : number >= chooseSizes.totalStock }" ></span>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               
                <!-- 加入购物车 购买-->
                <div class="ShoppingCart-buy">
                    <div class="lji" @click="shoppingCart">加入购物车</div>
                    <div class="gmai"  @click="gCart">立即购买</div>
                </div>
            </div>
        </div>
       <div class="suspension"  @click.stop>
            <div class="ggwc" @click="$router.replace('/cart')">
                <span v-if="shoppingCartLength != 0 && Flag ">{{shoppingCartLength}}</span>
                <img src="~assets/img/ggwc.png" alt="">
            </div>
            <div class="suspension-but">
                <button class="lji"  @click="ShutDown=true">加入购物车</button>
                <button class="gmai" @click="gCart">立即购买</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "chooseSize",
        data () {
            return {
                 // 默认选择款式
                gtchoose:{
                    index_0:0,
                    index_1:0,
                }, 
                 // 选择款式的信息默认
                TheChosen:{
                    img:'',
                    name:'',
                    size:'',
                    price:'',
                    number:1
                },
                // 数量默认 1 
                 number:1,
                //  关闭
                ShutDown:false
            }
        },
        props: {
            chooseSizes: {
                type: Object,
                default() {
                    return [];
                }
            }
        },
        computed: {
            ...mapGetters(['shoppingCartLength']),
            Flag(){
                if (localStorage.getItem("Flag") == "isLogin") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        
        methods: {
            clickchoose(index,l){
                this.gtchoose['index_'+ l] = index ;
                // 通过每次点击的类型 进行筛选
                this.skusCalculate(this.chooseSizes,this.gtchoose);
            },
             // 进行筛选
            skusCalculate(GTSizes,GTchooseS){
                let nums_A = GTSizes.skus.filter(function(n){
                    return GTSizes.props[0].list[GTchooseS.index_0].name === n.style;
                });
                let nums_B = nums_A.filter(function(n){
                    return GTSizes.props[1].list[GTchooseS.index_1].name === n.size;
                });
                this.chooseStyle(nums_B[0])
            },
            chooseStyle(style){
                // 选择款式的默认;
                this.TheChosen.img = style.img;
                this.TheChosen.name = style.style;
                this.TheChosen.size = style.size;
                this.TheChosen.price = style.nowprice;
                this.TheChosen.stockId = style.stockId;
            },
            // 减少
            reduce(){
                if(this.number > 1){
                    this.number--;
                }
            },
            // 增加
            increase(){
                if(this.number < this.chooseSizes.totalStock){
                    this.number++;
                }
            },
            // 加入购物车                      
            shoppingCart(){
                // 是否登录
                    this.$emit("itmeShoppingCart",this.TheChosen);
                    this.ShutDown= false
            },
            getshoppingCart(){

            },
            gCart(){
                this.Prompt.showMessage({
                    title: '功能未实现',
                    backgroundColor: 'red',
                    duration: 1500
                });
            }
        },
         watch: {
            chooseSizes:{ 
                //深度监听，可监听到对象、数组的变化
                handler (newV, oldV) {
                    // props 传递过来就改变
                    // 选择款式的默认;
                    console.log(this.chooseSizes);
                    this.chooseStyle(newV.skus[0]);
                    this.TheChosen.sizeKey = this.chooseSizes.sizeKey;
                    this.TheChosen.styleKey = this.chooseSizes.styleKey;
                    this.TheChosen.totalStock = this.chooseSizes.totalStock
                },
                deep:true
            },
            ShutDown:{ 
                handler (newV, oldV) {
                    if(this.ShutDown == true){ //禁止滚动
                        document.body.style.overflow = "hidden";
                    }else if( this.ShutDown == false){ //开启滚动
                        document.body.style.overflow = "";
                    }
                },
                deep:true
            },
            number: function(val){
                // 限制输入只能数字 / 不超过最大值
                if(typeof val != 'number'){
                    this.number = val.replace(/\D/g, '');
                    if(this.number>this.chooseSizes.totalStock){
                        this.number = this.chooseSizes.totalStock;
                    }
                }
               this.TheChosen.number =  this.number
            }
        },
};
</script>

<style scoped>

</style>