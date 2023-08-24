<template>
  <div class="switcher">
    {{ currentLanguage }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentLanguage: 'РУС'
    }
  }
}
</script>
<style lang="scss">
.switcher {
  cursor: pointer;
  color: var(--main-color-white);
  font-size: 16px;
  text-transform: uppercase;
  border: 1px solid var(--main-color-white);
  padding: 7px 23px;
  transition: 0.2s;
  z-index: 1;
  &:hover {
    background-color: var(--main-color-white);
    color: var(--main-color-dark-grey);
  }
}
</style>