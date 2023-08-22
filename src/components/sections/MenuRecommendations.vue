<template>
  <section class="menu">
    <div class="container">
      <div class="main-category">
        {{ menuTitle }}
      </div>
      <div class="main-title">
        {{ menuSubTitle }}
      </div>
      <MealCatalogue />
      <MainButton
        class="menu__btn"
        :title="buttonTitle"
      />
    </div>
    <img class="menu__flower" src="../../assets/images/elements/MenuRecommendationsFlower.png" alt="Flower">
    <img class="menu__stick" src="../../assets/images/elements/MenuRecommendationsStick.png" alt="Stick">
  </section>
</template>
<script>
import MealCatalogue from '../MealCatalogue.vue';
import MainButton from '../MainButton.vue';
export default {
  components: {
    MealCatalogue, MainButton
  },
  data() {
    return {
      menuTitle: 'меню',
      menuSubTitle: 'Шеф-повар рекомендует',
      buttonTitle: 'просмотреть все меню'
    }
  }
}
</script>
<style lang="scss">
.menu {
  position: relative;
  padding-top: 32px;
  &__btn {
    margin: 30px 0 0 auto;
  }
  &__flower {
    max-width: 252px;
    position: absolute;
    bottom: 130px;
  }
  &__stick {
    position: absolute;
    top: -45px;
    right: 0;
    z-index: 1;
  }
}
</style>