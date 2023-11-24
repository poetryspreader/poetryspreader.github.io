<template>
  <div class='main-title'>
    {{ $t(`${title}`) }}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style lang='scss'>
.main-title {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 0 20px;
  font-family: var(--main-font-playfair-display);
  background-color: var(--main-color-white);
  font-size: 50px;
  z-index: 2;
}
</style>