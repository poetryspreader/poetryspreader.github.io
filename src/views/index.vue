<template>
  <default-layout>
    <div class='promo'>
      <div class='promo__content'>
        <div class='promo__title'>
          {{ $t('promo.title') }}
        </div>
        <div class='promo__subtitle'>
          {{ $t('promo.subtitle') }}
        </div>
        <div
          class='promo__options'
        >
          <ul
            v-for='item in 4'
          >
            <li>
              {{ $t(`promo.options.${item}`) }}
            </li>
          </ul>
        </div>
        <div class="promo__video-container">
          <video class="promo__video" autoplay muted loop>
            <source src="../assets/videos/brushing.mov" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="promo__video-overlay"></div>
        </div>
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
export default {
  data(){
    return {
      optionItems: [
        {
          "label": "1"
        },
        {
          "label": "2"
        },
        {
          "label": "3"
        },
        {
          "label": "4"
        }
      ]
    }
  },
  components: {
    DefaultLayout
  }
}
</script>
<style lang='scss'>
.promo {
  margin: 44px 0 0 0;
  padding: 7.5em 8em 0 8em;
  height: calc(100vh - 120px);
  width: 100%;
  background-image: url('../assets/images/promo-bg.png'); /* Путь к вашему изображению */
  background-size: cover;
  background-position: center;
  &__content {
    position: relative;
    z-index: 2;
  }
  &__title {
    margin: 0 0 0 -4px;
    font-size: 5em;
    font-family: var(--main-font-fira-sans-condensed);
    color: var(--main-color-white);
  }
  &__subtitle {
    display: inline-block;
    margin: 0.3em 0 0 0;
    font-size: 1.5em;
    background-color: var(--main-color-white);
    opacity: 0.8;
  }
  &__options {
    margin: 120px 0 0 0;
    color: var(--main-color-white);
    opacity: 0.8;
    object-fit: cover;
  }
  ul {
    margin: 10px 0 0 14px;
    object-fit: cover;
    list-style-type: circle;
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
        left: -14px;
        width: 7px;
        height: 7px;
        background-color: var(--main-color-white);
        border-radius: 50%;
      }
    }
  }
  &__video {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    box-shadow: inset 0px 0px 10px 10px #000;
  }
}
</style>