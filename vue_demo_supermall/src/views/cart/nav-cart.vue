<template>
  <nav-bar>
    <div class="seek-top on" slot="mb-nav">
      <a
        href="JavaScript:;"
        @click="$router.go(-1)"
        class="return"
        slot="mb-left"
      ></a>
      <span slot="mb-center">购物车</span>
      <div class="msShortcutMenu" slot="mb-center" @click="editor" >
       <div  v-if="Flag">
          <span v-if="isEditors !=false">编辑</span>
          <span v-else>完成</span>
       </div>
      </div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from "components/content/navbar/navbar";
export default {
  name: "nav-cart",
  data() {
    return {
      isEditors:true
    };
  },
  components: {
    navBar,
  },
  methods: {
    editor() {
      this.isEditors = !this.isEditors;
      this.$emit('editorclick',this.isEditors )
    },
  },
  computed: {
    Flag() {
      if (localStorage.getItem("Flag") == "isLogin" && this.$store.state.shoppingCartList.length != 0) {
        return true;
      } else {
        return false;
      }
    },
  }
};
</script>

<style scoped>
</style>
