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
      :initialSlide="1"
      :pagination="false"
      :modules="modules"
      class="feedback-carousel"
  >
    <ArrowFeedback class="prev" />
    <ArrowFeedback class="next" />
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
import ArrowFeedback from "@/components/icons/ArrowFeedback.vue";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper, SwiperSlide, FeedbackCard, ArrowFeedback
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
        nextEl: ".next",
        prevEl: ".prev",
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
.feedback-carousel {
  position: relative;
  margin: 60px 0 0 0;
  padding: 0 70px;
  width: 100%;
  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
    path {
      transition: fill 0.2s;
      fill: var(--main-color-brown);
    }
    &:hover {
      fill: black;
      path {
        fill: var(--main-color-grey-dark)
      }
    }
    &.swiper-button-disabled {
      opacity: 0.3;
      cursor: default;
    }
    &.prev {
      left: 100px;
    }
    &.next {
      right: 100px;
      transform: rotate(180deg);
    }
  }
}
</style>