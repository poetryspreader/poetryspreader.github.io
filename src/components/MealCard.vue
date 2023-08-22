<template>
  <div class="meal-card">
    <img
      v-if="meal.image"
      class="meal-card__image"
      :src="'src/assets/images/food/' + meal.image"
      :alt="meal.title"
    >
    <div class="meal-card__wrapper">
      <div class="meal-card__category">
        {{ meal.category }}
      </div>
      <div class="meal-card__price">
        {{ meal.price }}<span>€</span>
      </div>
      <div class="meal-card__title">
        {{ meal.title }}
      </div>
      <div class="meal-card__description">
        {{ meal.description }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    meal: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.meal-card {
  display: flex;
  flex-direction: row;
  margin: 0 0 40px 0;
  z-index: 1;
  &__wrapper {
    flex-direction: column;
    padding: 0 0 0 45px;
  }
  &__category {
    color: var(--main-color-brown);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }
  &__price {
    font-family: var(--main-font-playfair-display);
    font-size: 24px;
    text-align: end;
    color: var(--main-color-brown);
    span {
      font-size: 16px;
    }
  }
  &__title {
    font-size: 20px;
    font-family: var(--main-font-playfair-display);
    color: var(--main-color-black);
  }
  &__description {
    margin-top: 15px;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>