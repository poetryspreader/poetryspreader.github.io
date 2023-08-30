<template>
  <div
      class="banquet-card"
      :style="{ background: `url(${imageUrl(banquet.image)}) no-repeat 100%/cover` }"
  >
    <div class="banquet-card__title">
      {{ banquet.title }}
    </div>
    <div v-if="banquet.description" class="banquet-card__description">
      {{ banquet.description }}
    </div>
    <div class="banquet-card__blot">
      <img src="../assets/images/elements/blot.png" alt="blot">
      <div class="banquet-card__blot-text">{{ banquet.hall }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    banquet: {
      type: Object,
      required: true
    }
  },
  methods: {
    imageUrl(imageName) {
      return new URL(`../assets/images/hall/${imageName}`, import.meta.url).href;
    }
  }
}
</script>
<style lang="scss">
.banquet-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 300px;
  object-fit: cover;
  &__title {
    font-family: var(--main-font-playfair-display);
    font-size: 48px;
    color: var(--main-color-white);
  }
  &__description {
    margin: 12px 0 0 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--main-color-white);
  }
  &__blot {
    position: absolute;
    top: 20px;
    right: 20px;
    &-text {
      position: absolute;
      top: 35%;
      left: 60%;
      transform: translateX(-50%) translateY(-50%);
      white-space: nowrap;
      font-size: 16px;
      color: var(--main-color-white);
    }
  }
}
</style>