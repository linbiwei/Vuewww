<template>
  <div>
    <navCart @editorclick="editorclick"> </navCart>
    <isloggedIn v-if="Flag"></isloggedIn>
    <notLogged v-else></notLogged>
    <settlement :isEditor="isEditor"></settlement>
  </div>
</template>

<script>
import navCart from "./nav-cart";
import isloggedIn from "./IsloggedIn";
import settlement from "./settlement";
import notLogged from "./notLogged";
export default {
  name: "cart",
  data() {
    return {
      isEditor: true,
    };
  },
  components: {
    navCart,
    isloggedIn,
    settlement,
    notLogged,
  },
  methods: {
    editorclick(value) {
      this.isEditor = value;
    },
  },
  computed:{
    Flag() {
      if (localStorage.getItem("Flag") == "isLogin") {
        return true;
      } else {
        return false;
      }
    },
  }
};
</script>

<style>
</style>
