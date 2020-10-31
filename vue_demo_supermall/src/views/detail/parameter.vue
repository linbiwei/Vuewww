<template>
     <div class="dis-flex"  v-if="Object.keys(Getparameter).length !== 0" @click="ShutDown=true">
        <div class="dis-r">参数</div>
        <div class="dis-c">品牌/主材含量...</div>
        <div class="dis-l"></div>
         <div class="popup-window" @click.stop="ShutDown=false" v-if=" ShutDown===true">
            <div class="popup-min">
                <div class="popup-top">
                    <p class="popup-tit">{{Getparameter.info.key}}</p>
                </div>
                <div class="popupSkuArea">
                    <ul class="parameter-ul">
                        <li v-for="i in Getparameter.info.set">
                            <div class="parameter-l">{{i.key}}</div>
                            <div class="parameter-r">{{i.value}}</div>
                        </li>
                    </ul>
                </div>
                <div class="ShoppingCart-buy">
                   <div class="parameter-gb"  @click="ShutDown=false">关闭</div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    name: "parameter",
    data () {
        return {
           ShutDown:false
        }
    },
    props: {
        Getparameter: {
            type: Object,
            default() {
                return [];
            }
        }
    },
    watch: {
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
    },
};
</script>

<style scoped>

</style>