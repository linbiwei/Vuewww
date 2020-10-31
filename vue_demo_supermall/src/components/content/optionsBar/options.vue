

<template>
  <div class="options box-back_">
    <div
      v-for="(item, index) in titles"
      :class="{ color: itemindex == index }"
      @click="itemclick(index)"
    >
      <span> {{ item }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "options",
  data() {
    return {
      itemindex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemclick(i) {
      this.itemindex = i;
      this.$emit('goodsclick',i )
    },
  },
};
</script>

<style>
.options {
  display: flex;
  text-align: center;
  z-index: 9999;
}
.options > div {
  flex-grow: 1;
  line-height: 1rem;
}
.options > div span {
  font-size: 0.34rem;
  padding: 0.1rem .2rem;
}
.options > div.color {
  color: #00bcd5;
}
.options > div.color span {
  border-bottom: 2px solid #00bcd5;
}
</style>
