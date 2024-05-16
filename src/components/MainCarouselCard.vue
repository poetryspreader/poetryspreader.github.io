<template>
  <div class="carousel-card">
    <img
      v-for="index in card.image"
      :key="index"
      class="carousel-card__image"
      src="../assets/images/elements/FeedbackStar.png"
      alt="feedback-star"
    >
    <div class="carousel-card__text">
      {{ card.text }}
    </div>
    <div class="carousel-card__author">
      {{ card.author }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.swiper-slide {
  //width: 330px !important;
  .carousel-card {
    margin: 0 auto;
    transform: translateY(50%);
    max-width: 330px;
    font-weight: 400;
    line-height: 14px;
    font-size: 12px;
    opacity: 0.3;
    &__text {
      margin: 15px 0 18px 0;
      font-family: 'Caveat', cursive;
    }
    &__author {
      color: var(--main-color-brown);
      font-family: var(--main-font-playfair-display);
      font-size: 9px;
      font-weight: 400;
    }
    &__star {
      width: 11px;
      height: 11px;
    }
  }
  &-active .feedback-card {
    transform: translateY(0);
    line-height: 30px;
    font-size: 24px;
    max-width: 1200px;
    justify-self: center;
    opacity: 1;
    &__text {
      margin: 30px 0;
    }
    &__author {
      font-size: 20px;
    }
    &__star {
      width: 25px;
      height: 25px;
    }
  }
}

</style>