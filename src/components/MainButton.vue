<template>
  <div class="button">
    {{ $t(this.label) }}
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    }
  }
}
</script>
<style lang="scss">
.button {
  margin: 0 auto;
  background: #5E5DF0;
  border-radius: 9px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  outline: 0 solid transparent;
  padding: 18px 50px;
  width: fit-content;
  word-break: break-word;
  border: 0;
  transition: all 0.2s;
  &:hover {
    box-shadow: #5E5DF0 0 10px 20px -10px;
  }
}
</style>