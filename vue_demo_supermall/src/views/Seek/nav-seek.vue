<template>
  <nav-bar>
    <div class="seek-top pc-search" slot="mb-nav">
      <a href="JavaScript:;" @click="rego" class="return" slot="mb-left"></a>
      <div class="seek_input box-sw" slot="mb-center">
        <i class="search-icon"></i>
        <i class="search-shut"></i>
        <input
          class="searchInput"
          name="search"
          type="text"
          placeholder="418火爆开抢 满千减百"
          autocomplete="off"
        />
      </div>
      <button type="submit" id="submit" slot="mb-right">搜索</button>
    </div>
  </nav-bar>
</template>

<script>
import navBar from "components/content/navbar/navbar";
export default {
  name: "nav-home",
  components: {
    navBar,
  },
  methods: {
    rego(){
      this.$router.go(-1)
    }
  }
};
</script>

<style>
</style>
