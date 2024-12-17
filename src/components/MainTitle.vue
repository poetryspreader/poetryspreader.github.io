<template>
  <div class='main-title'>
    {{ $t(this.title) }}
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
  display: block;
  text-align: center;
  font-family: var(--main-font-playfair-display);
  font-weight: 500;
  font-size: 2.6em;
  z-index: 1;
}
</style>