<template>
  <section class="banquet-choice">
    <div class="container">
      <div class="main-category">
        {{ mainCategory }}
      </div>
      <div class="banquet-choice__category main-title">
        {{ mainTitle }}
      </div>
      <banquet-catalogue />
      <main-button
          class="banquet-choice__btn"
          :title="buttonTitle"
      />
    </div>
    <img class="banquet-choice__flower" src="../../assets/images/elements/BanquetFlower.png" alt="flower">
  </section>
</template>
<script>
import MainButton from "@/components/MainButton.vue";
import BanquetCatalogue from "@/components/BanquetCatalogue.vue";
export default {
  data() {
    return {
      mainCategory: 'банкет',
      mainTitle: 'Мы предлагаем банкетные залы для вашего мероприятия',
      buttonTitle: 'узнать больше'
    }
  },
  components: {
    MainButton, BanquetCatalogue
  }
}
</script>
<style lang="scss">
.banquet-choice {
  position: relative;
  padding: 120px 0 100px 0;
  &__category {
    max-width: 625px;
  }
  &__btn {
    margin: 50px auto 0;
    padding: 22px 84px;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 45px;
  }
  &__flower {
    position: absolute;
    bottom: 0;
    left: -15px;
    z-index: -1;
  }
}
</style>