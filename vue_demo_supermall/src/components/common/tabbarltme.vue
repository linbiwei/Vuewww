<template>
  <div
    class="tabbaritme"
    @click="tabbarclick"
    :class="{on:this.$route.path.indexOf(this.path) !== -1}"
  >
    <div v-if="!isActive">
      <slot name="itme-img"></slot>
    </div>
    <div v-else>
      <slot name="itme-img-active"></slot>
    </div>
    <div>
      <slot name="itme-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-bar-itme",
  props: {
    path: String,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    tabbarclick() {
      if (this.$route.path.indexOf(this.path) == -1) {
        this.$router.replace(this.path);
      }
    },
  },
};
</script>

<style>
.commonNav {
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1120px;
  z-index: 2;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  height: 1.25rem;
  background-color: #fff;
}

.commonNav img {
  display: block;
  width: 0.65rem;
  height: 0.65rem;
  margin: 0.15rem auto 0.05rem;
}

.commonNav .tabbaritme {
  width: 16%;
  margin: 0 0.1rem;
  text-align: center;
}

.commonNav span {
  display: block;
  font-size: 0.3rem;
  color: #666;
  text-align: center;
}

.commonNav .tabbaritme.on span {
  color: #000;
  font-weight: bold;
}
</style>
