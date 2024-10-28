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
  text-align: center;
  font-family: var(--main-font-playfair-display);
  font-size: 2.5em;
  z-index: 1;
}
</style>