<template>
  <div class="list_box">

    <div class="list_ri">
      <ul>
        <li
          :class="{ on: listOn == index }"
          v-for="(item, index) in getlistRi"
          @click="getclick(item, index)"
        >
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>

    <div class="list_le">
        <div class="second-module  on" >
            <ul class="third-list">
                <li  v-for="i in linkList">
                    <a href="JavaScript:;">
                        <div class="third-img">
                            <img v-lazy="i.image" alt="">
                        </div>
                        <div class="third-name">{{i.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

  </div>

</template>

<script>
import {getSubcategory} from 'network/category'
export default {
  name: "listRi",
  data() {
    return {
      listOn: 0,
      linkList:[]
    };
  },
  props: {
    getlistRi: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getclick(item, index) {
        this.listOn = index;
         this.getSubcategory_methods(item.maitKey);
    },
    getSubcategory_methods(maitkey) {
      getSubcategory(maitkey).then(res => {
        this.linkList = res.data.data.list   
      })
    }
  },
   watch: {
    getlistRi:{ 
        //深度监听，可监听到对象、数组的变化
        handler (newV, oldV) {
            this.getSubcategory_methods(this.getlistRi[0].maitKey)
        },
        deep:true
    },
  }
};
</script>

<style scoped>
</style>