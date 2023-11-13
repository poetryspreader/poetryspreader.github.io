<template>
    <div class="button">
      {{ $t(title) }}
    </div>
</template>
<style lang="scss">
.button {
  cursor: pointer;
  display: inline-block;
  padding: 22px 38px;
  border: 2px solid var(--main-color-brown);
  color: var(--main-color-brown);
  font-size: 12px;
  font-weight: 700;
  transition: 0.2s;
  text-transform: uppercase;
  &:hover {
    background-color: var(--main-color-brown);
    color: var(--main-color-white);
  }
}
</style>
<script>
export default {
  props: {
    title: {
      type: String
    }
  },
}
</script>