<template>
    <div class="Content_page-evaluation" id="Content_pagetit" >
        <div class="Content_pagetit">
            <span>  评价 <em> {{Getevaluation.cRate}}</em>  </span>
            <!-- <a href=""> 查看全部</a> -->
        </div>
        <div class="Content_page-evaluation-list" v-if=" Getevaluation.cRate!=0">
            <div class="Content_page-evaluation-list-div" v-for="i in Getevaluation.list">
                <div class="Content_page-evaluation-top">
                    <div class="Content_page-evaluation-yonhu">
                        <div>
                            <img v-lazy="i.user.avatar" alt="">
                        </div>
                        <span>{{i.user.uname}}</span>
                    </div>
                    <div class="Content_page-evaluation-sjain">
                        <span>{{i.style}}</span>
                    </div>
                </div>
                <div class="Content_page-evaluation-bot">
                    <div class="Content_page-evaluation-bot-text">
                        <p style="color:#c7afaf;padding-bottom:.2rem"> “ <span v-for=" j in i.extraInfo">{{j}} ，</span> ” </p>
                        {{i.content}}
                    </div>
                    <div class="Content_page-evaluation-bot-img">
                        <ul>
                            <li v-for=" l in i.images">
                                <img v-lazy="l" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p style=" padding: .4rem; font-size: .38rem;text-align: center;">暂无评价</p>
        </div>
        <div class="To-view" v-if=" Getevaluation.cRate!=0">
            <a href="全部评价.html"> 查看全部评价</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "evaluation",
    data () {
        return {
           ShutDown:false
        }
    },
    props: {
        Getevaluation: {
            type: Object,
            default() {
                return [];
            }
        }
    },
   watch: {
        Getevaluation:{ 
            handler (newV, oldV) {
                console.log(this.Getevaluation);
            },
            deep:true
        },
    },
};
</script>

<style scoped>

</style>