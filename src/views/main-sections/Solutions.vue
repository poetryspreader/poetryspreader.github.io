<template>
  <!-- SOLUTIONS -->
  <div class="solutions">
    <swiper
      class="solutions__swiper"
      :modules="modules"
      :grabCursor="true"
      :loop="true"
      :autoplay="{
        delay: 10500
      }"
      :speed="1000"
      :pagination="{
        clickable: true
      }"
      @slideChangeTransitionEnd="onSlideChange"
    >
      <swiper-slide
        v-for="solution in solutions"
        :key="solution.image"
      >
        <div class="card">
          <img
            class="card__image"
            :src="imageUrl(solution.image)"
            alt="swiper-card-img"
          >
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="solutions__container">
      <div class="solutions__title">
        {{ $t('solutions.title') }}
      </div>
      <div class="solutions__description">
        {{ $t('solutions.description') }}
      </div>
      <div class="solutions__label">
        {{ $t(`solutions.options.${this.solutionSlideIndex}.label`) }}:
      </div>
      <ul
        v-if="localeRU"
        v-for="(_, index) in Object.keys(this.localeRU.solutions.options[this.solutionSlideIndex].descriptions).length"
      >
        <li>
          {{ $t(`solutions.options.${this.solutionSlideIndex}.descriptions.${index}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      localeRU: null,
      solutionSlideIndex: 0,
      modules: [
        Autoplay, Pagination
      ],
      solutions: [
        {
          image: 'scand-sol.webp'
        },
        {
          image: 'classic-sol.webp'
        },
        {
          image: 'standart.webp'
        },
        {
          image: 'standart+.webp'
        }
      ]
    }
  },
  created() {
    import('@/locales/ru.json')
      .then((module) => {
        this.localeRU = module.default;
      })
  },
  methods: {
    onSlideChange(swiper) {
      this.solutionSlideIndex = swiper.realIndex
    },
    imageUrl(image) {
      return new URL(`../../assets/images/solutions/${image}`, import.meta.url).href;
    }
  }
}
</script>
<style lang="scss">
.solutions {
  display: flex;
  flex-direction: row-reverse;
  background-image: repeating-linear-gradient(90deg, hsla(196,0%,79%,0.06) 0px, hsla(196,0%,79%,0.06) 1px,transparent 1px, transparent 96px),repeating-linear-gradient(0deg, hsla(196,0%,79%,0.06) 0px, hsla(196,0%,79%,0.06) 1px,transparent 1px, transparent 96px),repeating-linear-gradient(0deg, hsla(196,0%,79%,0.09) 0px, hsla(196,0%,79%,0.09) 1px,transparent 1px, transparent 12px),repeating-linear-gradient(90deg, hsla(196,0%,79%,0.09) 0px, hsla(196,0%,79%,0.09) 1px,transparent 1px, transparent 12px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
  &__title {
    text-align: center;
    margin: 70px 0 0 0;
    padding: 0 1em;
    font-family: var(--main-font-playfair-display);
    font-size: 3em;
  }
  &__description {
    margin: 60px 0 0 0;
    width: 100%;
    padding: 0 0 0 50px;
    font-size: 1.3em;
    line-height: 1.6;
    font-family: var(--main-font-playfair-display);
  }
  &__label {
    margin: 65px 0 0 50px;
    font-size: 1.9em;
    font-family: var(--main-font-playfair-display);
  }
  &__container {
    position: relative;
    display: flex;
    width: 45%;
    flex-direction: column;
    ul {
      margin: 30px 0 0 75px;
      list-style-type: none;
      li {
        position: relative;
        padding: 0.3em 6em 0.3em 2.8em;
        font-size: 1.3em;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 23px;
          height: 23px;
          background-size: cover;
          background-position: center;
          background-image: url(../../components/icons/check-mark-green.svg);
      }
      }
    }
  }
  &__swiper {
    width: 55%;
    height: 100vh;
    .swiper-slide {
      .card {
        font-family: var(--main-font-playfair-display);
        background-color: none;
        &__image {
          display: block;
          width: 100%;
          height: 100vh;
        }
      }
    }
  }
}
</style>