<template>
  <div class="offer">
    <div class="offer__content">
      <div class="offer__slider">
        <main-slider
          :buttonsOff="true"
          :photos="photos"
        />
      </div>
      <div class="offer__list">
        <div class="offer__ornament">
          <ornament-horizontal />
          <ornament-circle />
          <ornament-horizontal />
        </div>
        <main-title :title="'offer.title'" />
        <ul>
          <li
            v-if="localeRU"
            v-for="(_, index) in Object.keys(this.localeRU.offer.options).length"
          >
            {{ $t(`offer.options.${index}`) }}
          </li>
        </ul>
      </div>
    </div>
    <main-title :title="'offer.subtitle'"/>
    <div class="steps">
      <div v-for="(component,index) in components">
        <div class="steps__item">
          <component :is="component" loading="lazy" />
          <Arrow class="steps__arrow" v-if="index + 1 < components.length" />
          <div>
            {{ $t(`offer.steps.${index}`) }}
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>
<script>
import OrnamentCircle from "@/components/icons/OrnamentCircle.vue"
import OrnamentHorizontal from "@/components/icons/OrnamentHorizontal.vue"
import MainSlider from '@/components/MainSlider.vue';
import MainTitle from '@/components/MainTitle.vue';

// ICONS
import Arrow from '@/components/icons/steps/Arrow.vue';
import Signature from '@/components/icons/steps/Signature.vue';
import Home from '@/components/icons/steps/Home.vue';
import Search from '@/components/icons/steps/Search.vue';
import Calculator from '@/components/icons/steps/Calculator.vue';
import Keys from '@/components/icons/steps/Keys.vue';


export default {
  components: {
    OrnamentCircle, OrnamentHorizontal, MainSlider, MainTitle,

    // ICONS
    Arrow, Signature, Home, Search, Calculator, Keys
  },
  data() {
    return {
      localeRU: null,
      photos: [
        'base-price/base-0.webp',
        'base-price/base-1.webp'
      ],
      components: ["Search", "Calculator", "Signature", "Keys", "Home"]
    }
  },
  created() {
    import('@/locales/ru.json')
      .then((module) => {
        this.localeRU = module.default;
      })
  }
}
</script>
<style lang="scss">
.offer {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__ornament {
    margin: 35px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    scale: 0.9;
  }
  .main-title {
    margin: 30px 0 0 0;
  }
  &__content {
    display: flex;
    flex-direction: row;
  }
  &__slider {
    width: 50%;
    .slider-image{
      height: 80vh;
    }
  }
  &__list {
    width: 60%;
    ul {
      margin: 85px 0 0 20px;
      list-style-type: none;
      li {
        position: relative;
        padding: 0 2.5em 0 5.5em;
        margin: 1.6em 0;
        font-size: 1.5em;
        font-family: var(--main-font-fira-sans-condensed);
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 23px;
          height: 23px;
          margin: 0 0 0 65px;
          background-size: cover;
          background-position: center;
          background-image: url(../../components/icons/check-mark-violet.svg);
        }
      }
    }
  }
  .main-title {
    margin: 50px 0 50px 0;
  }
  .steps {
    display: flex;
    margin: 0 0 150px 0;
    &__item {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      svg:nth-of-type(1) {
        height: 170px;
        width: 170px;
      }
      svg:nth-of-type(2) {
        height: 100px;
        width: 100px;
        margin: 0 20px;
      }
      div {
        position: absolute;
        top: 100%;
        width: 210px;

      }
    }
    div {
      display: flex;
    }
  }
}
</style>