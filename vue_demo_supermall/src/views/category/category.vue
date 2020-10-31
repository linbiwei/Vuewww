<template>
  <div id="category">
      <navCategory></navCategory>
      <listRi :getlistRi="menuList"></listRi>
  </div>
</template>

<script>
import navCategory from './nav-category'
import listRi from './listRi'
import {getCategory} from 'network/category.js'
export default {
  name: 'Category',
  components: {
    navCategory,
    listRi
  },
  data() {
    return {
      menuList: [],
    }
  },
  created() {
     getCategory().then(res => {
      //  console.log(res.data.data);
        this.menuList = res.data.data.category.list;
      })
  },
}
</script>

<style scoped>
 
</style>