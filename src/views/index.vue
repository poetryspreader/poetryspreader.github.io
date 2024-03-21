<template>
  <default-layout>

    <!-- PROMO -->
    <div class='promo'>
      <div class='promo__content'>
        <div class='promo__title'>
          <span>
            {{ $t('promo.title') }}
          </span>
        </div>
        <div class='promo__subtitle'>
          <span>
            {{ $t('promo.subtitle') }}
          </span>
        </div>
        <div
          class='promo__options'
        >
          <ul
            v-for='item in 6'
          >
            <li>
              {{ $t(`promo.options.${item}`) }}
            </li>
          </ul>
        </div>
      </div>
      <video class="promo__video" autoplay muted loop>
        <source src="../assets/videos/brushing.mov" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <mouse-scroll-animation />
    </div>

    <!-- OFFER -->
    <div class="offer">
      <div class="offer__ornament">
        <ornament-horizontal/>
        <ornament-circle  />
        <ornament-horizontal />
      </div>
      <div class="offer__title">
        {{ $t('offer.title') }}
      </div>
      <div class="offer__content">
        <div class="offer__slider">
          <main-slider :photos="photos" />
        </div>
        <div class="offer__list">
          <ul
            v-for='item in optionsLength'
          >
            <li>
              {{ $t(`offer.options.${item}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import OrnamentCircle from "@/components/icons/OrnamentCircle.vue"
import OrnamentHorizontal from "@/components/icons/OrnamentHorizontal.vue"
import MouseScrollAnimation from "@/components/MouseScrollAnimation.vue";
import localeRU from '@/locales/ru.json';
import MainSlider from '@/components/MainSlider.vue';
export default {
  data() {
    return {
      photos: [
        'sliders/base-price/base-0.webp',
        'sliders/base-price/base-1.webp'
      ]
    }
  },
  components: {
    DefaultLayout, MouseScrollAnimation, OrnamentCircle,
    OrnamentHorizontal, MainSlider
  },
  computed: {
    optionsLength() {
      return Object.keys(localeRU.offer.options).length;
    }
  }
}
</script>
<style lang='scss'>
.promo {
  position: relative;
  margin: 44.5px 0 0 0;
  padding: 7.5em 8em 0 8em;
  height: calc(100vh - 118px);
  width: 100%;
  background-image: url('../assets/images/promo-bg.png'); /* Путь к вашему изображению */
  background-size: cover;
  background-position: center;
  z-index: 0;
  &__title {
    margin: 20px 0 0 0;
    font-size: 5em;
    font-family: var(--main-font-fira-sans-condensed);
    color: var(--main-color-white);
    span {
      display: inline;
      background-color: rgb(15, 15, 75);
    }
  }
  &__subtitle {
    margin: 0.3em 0 0 0;
    font-size: 2.3em;
    opacity: 0.8;
    span {
      display: inline;
      background-color: var(--main-color-white);
    }
  }
  &__options {
    margin: 40px 0 0 0;
    color: var(--main-color-white);
    opacity: 1;
    object-fit: cover;
  }
  ul {
    margin: 10px 0 0 35px;
    object-fit: cover;
    list-style-type: circle;
    font-size: 1.5em;
    li {
      display: inline-block;
      list-style-type: none;
      position: relative;
      background-color: var(--main-color-black);
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -30px;
        width: 10px;
        height: 10px;
        background-color: var(--main-color-white);
        border-radius: 50%;
      }
    }
  }
  &__video {
    border-radius: 0 0 15px 15px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50%;
    box-shadow: 0px 0px 20px 3px #000;
    opacity: 0.7;
    z-index: -1;
  }
}
.offer {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__ornament {
    margin: 50px 0 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
  &__title {
    font-family: var(--main-font-playfair-display);
    font-size: 1.7em;
  }
  &__content {
    display: flex;
    flex-direction: row;
  }
  &__list {
    max-width: 50%;
    margin: 0 0 0 30px;
  }
}
</style>