<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'tab-bar',
}
</script>

<style>
  #tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 5px 0 #9b9494;
    background-color:#f6f6f6 ;
    height: 49px;
  }
</style>
