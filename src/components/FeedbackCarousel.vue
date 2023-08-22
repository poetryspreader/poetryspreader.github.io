<template>
  <swiper
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :slideToClickedSlide="true"
      :long-swipes="true"
      :spaceBetween="25"
      :navigation="swiperNavigation"
      :coverflowEffect="{
      stretch: 0,
      depth: 1,
      modifier: 3,
      slideShadows: false,
      }"
      :pagination="false"
      :modules="modules"
      class="feedback-carousel-swiper"
  >
    <div class="feedback-carousel-swiper__button-prev">
      <img src="../assets/images/arrows/about-us-arrow-pointer.png" alt="arrow">
      <img src="../assets/images/arrows/about-us-arrow-stick.png" alt="arrow">
    </div>
    <div class="feedback-carousel-swiper__button-next">
      <img src="../assets/images/arrows/about-us-arrow-pointer.png" alt="arrow">
      <img src="../assets/images/arrows/about-us-arrow-stick.png" alt="arrow">
    </div>
    <swiper-slide
        v-for="(feedback) in feedbacks"
        class="swiper-slide"
        :key="feedback.author"
    >
      <feedback-card :feedback="feedback"/>
    </swiper-slide>
  </swiper>
</template>
<script>
import FeedbackCard from './FeedbackCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper, SwiperSlide, FeedbackCard
  },
  data() {
    return {
      modules: [
          EffectCoverflow,
          Pagination,
          Navigation
      ],
      swiperInstance: null,
      swiperNavigation: {
        nextEl: ".feedback-carousel-swiper__button-next",
        prevEl: ".feedback-carousel-swiper__button-prev",
      }
    }
  },
  props: {
    feedbacks: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
.feedback-carousel-swiper {
  position: relative;
  margin: 60px 0 0 0;
  padding: 0 70px;
  width: 100%;
  &__button-prev,
  &__button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    &.swiper-button-disabled {
      opacity: 0.3;
      cursor: default;
    }
    &.feedback-carousel-swiper__button-prev {
      left: 100px;
      img:first-child {
        position: absolute;
        left: 2px;
      }
      img:last-child {
        z-index: -1;
        opacity: 0.8;
      }
    }
    &.feedback-carousel-swiper__button-next {
      right: 100px;
      img:first-child {
        transform: rotate(180deg);
        position: absolute;
        right: 2px;
      }
      img:last-child {
        z-index: -1;
        opacity: 0.8;
      }
    }
  }
}
</style>