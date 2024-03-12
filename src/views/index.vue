<template>
  <default-layout>
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
    <div class="offer">
      <div class="offer__ornament">
        <ornament />
      </div>
      <div class="offer__title">
        {{ $t('offer.title') }}
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import Ornament from "@/components/icons/Ornament.vue"
import MouseScrollAnimation from "@/components/MouseScrollAnimation.vue";
export default {
  components: {
    DefaultLayout, MouseScrollAnimation, Ornament
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
  z-index: -1;
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
    width: 60%;
    box-shadow: 0px 0px 20px 3px #000;
    opacity: 0.7;
    z-index: -1;
  }
}
.offer {
  position: relative;
  width: 100%;
  &__ornament {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
}
</style>