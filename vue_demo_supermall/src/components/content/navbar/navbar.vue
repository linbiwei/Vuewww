<template>
    <div>
        <slot name="mb-nav">
            <slot name="mb-left"></slot>
            <slot name="mb-center"></slot>
            <slot name="mb-right"></slot>
        </slot>
    </div>
</template>

<script>
export default {
  name: "navbar",
  components: {
  },
};
</script>

<style>

</style>
