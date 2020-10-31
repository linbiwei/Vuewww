<template>
  <div class="search_wrap">
    <navBar>
      <div class="seek-top on" slot="mb-nav">
        <a
          href="JavaScript:;"
          @click="goback"
          class="return"
          slot="mb-left"
        ></a>
        <a href="JavaScript:;" class="seek_box_a" slot="mb-center">
          <div class="seek_input box-sw">
            <i class="search-icon"></i>
            <input
              class="searchInput"
              name="search"
              type="text"
              placeholder="华硕猛禽2080Ti"
              autocomplete="off"
            />
          </div>
        </a>
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from "components/content/navbar/navbar";
export default {
  name: "navCategory",
  components: {
    navBar,
  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
</style>