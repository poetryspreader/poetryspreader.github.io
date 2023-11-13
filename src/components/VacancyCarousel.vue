<template>
  <div class="vacancy-carousel">
    <div class="vacancy-carousel__blot pre-fade">
      <img src="../assets/images/elements/blot.png" alt="blot">
      <div class="vacancy-carousel__blot-text">{{ $t('vacancies.pre-title') }}</div>
    </div>
    <div class="main-title">
      {{ $t('vacancies.title') }}
    </div>
    <swiper
        :grabCursor="true"
        :slidesPerView="auto"
        :slideToClickedSlide="true"
        :long-swipes="true"
        :navigation="swiperNavigation"
        :coverflowEffect="{
          stretch: 0,
          depth: 1,
          modifier: 3,
          slideShadows: false
          }"
        :pagination="false"
        :modules="modules"
        class="vacancy-carousel__swiper"
    >
      <div class="vacancy-carousel__swiper-buttons">
        <img class="prev" src="../assets/images/arrows/work-at-us-arrow.png" alt="arrow">
        <img class="next" src="../assets/images/arrows/work-at-us-arrow.png" alt="arrow">
      </div>
      <swiper-slide
          v-for="number in 4"
          class="vacancy-carousel__swiper-slide"
          :key="number"
      >
        <div class="vacancy-carousel__item-title">
          {{ $t(`vacancies.options.${number}.label`) }}
        </div>
        <div class="vacancy-carousel__item-text">
          {{ $t(`vacancies.options.${number}.description`) }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [
        EffectCoverflow,
        Pagination,
        Navigation
      ],
      category: 'Вакансии',
      title: 'Сейчас ищем!',
      vacancies: [
        {
          title: 'Официант',
          text: 'У нас есть отличная возможность для амбициозных, трудолюбивых, молодых людей с чувством ответственности и желанием работать в команде и проявить себя с лучшей стороны.'
        },
        {
          title: 'Шашлычник',
          text: 'У нас есть отличная возможность для амбициозных, трудолюбивых, молодых людей с чувством ответственности и желанием работать в команде и проявить себя с лучшей стороны.'
        },
        {
          title: 'Администратор',
          text: 'У нас есть отличная возможность для амбициозных, трудолюбивых, молодых людей с чувством ответственности и желанием работать в команде и проявить себя с лучшей стороны.'
        },
        {
          title: 'Директор',
          text: 'У нас есть отличная возможность для амбициозных, трудолюбивых, молодых людей с чувством ответственности и желанием работать в команде и проявить себя с лучшей стороны.'
        }
      ],
      swiperNavigation: {
        nextEl: ".next",
        prevEl: ".prev",
      }
    }
  }
}
</script>
<style lang="scss">
.vacancy-carousel {
  &__blot {
    position: relative;
    margin: 60px 0 0 0;
    img {
      transform: translateX(-36px);
    }
    &-text {
      position: absolute;
      top: 15%;
      left: 0;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: 20px;
      color: var(--main-color-white);
      z-index: 10;
    }
  }
  &__swiper {
    display: flex;
    flex-direction: column;
    margin: 50px 0 0 0;
    width: 580px;
    .swiper-wrapper {
      display: flex;
      //flex-direction: column;
      /* можно попробовать через grid сделеть если делать по две вакансии за итерацию */
    }
    &-slide {
      margin: 0 0 30px 0;
      width: 100% !important;
    }
    &-buttons {
      margin: 0 0 55px 0;
      .next {
        cursor: pointer;
        margin: 0 0 0 20px;
        transform: rotate(180deg);
      }
      .prev {
        cursor: pointer;
      }
    }
  }
  &__item-title {
    font-size: 16px;
    text-transform: uppercase;
  }
  &__item-text {
    margin: 10px 0 0 0;
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    color: var(--main-color-grey);
  }
}
</style>