<template>
    <div class="list-goods box-back_">
        <a :href="i.link" v-for="i in homerecommends">
            <img v-lazy="i.image" alt="">
            <span>{{i.title}}</span>
        </a>
    </div>
</template>

<script>

export default {
  name: "recommendss",
   props: {
        homerecommends:{
            type:Array,
            default() {
                return []
            }
        }
    }
    
};
</script>

<style>

</style>
