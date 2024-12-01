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
            loading="lazy"
          >
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="solutions__container">
      <main-title :title="'solutions.title'" />
      <div class="solutions__description">
        {{ $t('solutions.description') }}
      </div>
      <div class="solutions__label">
        {{ $t(`solutions.options.${this.solutionSlideIndex}.label`) }}:
      </div>
      <ul
        v-if="localeRU"
      >
        <li
          v-for="(_, index) in Object.keys(this.localeRU.solutions.options[this.solutionSlideIndex].descriptions).length"
        >
          {{ $t(`solutions.options.${this.solutionSlideIndex}.descriptions.${index}`) }}
        </li>
      </ul>
      <main-button :label="'solutions.button'" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import MainButton from "@/components/MainButton.vue";
import 'swiper/css';
import 'swiper/css/pagination';
import MainTitle from '@/components/MainTitle.vue'

export default {
  components: {
    MainTitle,
    Swiper, SwiperSlide, MainButton
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
      this.solutionSlideIndex = swiper.realIndex;
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
  .main-title {
    margin: 70px 0 0 0;
  }
  &__title {
    text-align: center;
    margin: 70px 0 0 0;
    padding: 0 1em;
    font-family: var(--main-font-playfair-display);
    font-size: 3em;
  }
  &__description {
    margin: 40px 0 0 0;
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
      margin: 40px 0 50px 75px;
      list-style-type: none;
      li {
        position: relative;
        padding: 0.3em 6em 1.7em 2.8em;
        font-size: 1.3em;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-100%);
          left: 0;
          width: 23px;
          height: 23px;
          background-size: cover;
          background-position: center;
          background-image: url(../../components/icons/check-mark-green.svg);
        }
      }
    }
    .button {
      position: absolute;
      bottom: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &__swiper {
    width: 55%;
    height: 90vh;
    .swiper-slide {
      .card {
        font-family: var(--main-font-playfair-display);
        background-color: transparent;
        &__image {
          display: block;
          width: 100%;
          height: 90vh;
        }
      }
    }
    .swiper-pagination {
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      width: auto;
      &-bullet {
        width: 10px;
        height: 10px;
      }
    }
  }
}
</style>