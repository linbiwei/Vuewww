<template>
  <div id="Top" ref="top" @click="topclick"></div>
</template>

<script>
export default {
  name: "topclick",
  data() {
    return {
      htmlwidth: 0,
      scrollTop: 0,
      topstyle: {},
      topclickHome: false,
    };
  },
  methods: {
    topclick() {
      this.set = window.setInterval(() => {
        if (this.topclickHome != false) {
          document.getElementById("home").scrollTop = this.scrollTop - this.scrollTop / 10;
        } else {
          document.documentElement.scrollTop = this.scrollTop - this.scrollTop / 10;
          document.body.scrollTop = this.scrollTop - this.scrollTop / 10;
        }
      }, 1);
    },
    scroll() {
      if (this.topclickHome != false) {
        this.scrollTop = document.getElementById("home").scrollTop;
      } else {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      }
      if (this.scrollTop > this.htmlwidth * 1.3) {
        this.Show();
      } else if (this.scrollTop == 0) {
        window.clearInterval(this.set);
      } else {
        this.hidden();
      }
    },
    Show() {
      this.topstyle.opacity = 1;
      this.topstyle.zIndex = 99999999999999999999;
    },
    hidden() {
      this.topstyle.opacity = 0;
      this.topstyle.zIndex = -2;
    },
  },
  mounted() {
    this.htmlwidth = document.documentElement.clientHeight;
    this.topstyle = this.$refs.top.style;
    window.addEventListener("scroll", this.scroll, true);
  },
  watch: {
    $route(to, from) {
      to.meta.box == true ? (this.topclickHome = true) : (this.topclickHome = false);
      if (this.topclickHome == false) {
        this.hidden();
      } else {
        this.Show();
      }
    },
  },
};
</script>

<style>
</style>
