<template>
  <!-- PROMO -->
  <div class='promo'>
    <div class="promo__wrapper">
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
    </div>
    <div class='promo__options'>
      <ul
        v-if="localeRU"
        v-for='(_, index) in Object.keys(this.localeRU.promo.options).length'
      >
        <li>
          {{ $t(`promo.options.${index}`) }}
        </li>
      </ul>
    </div>
    <video v-if="isVideoLoaded" class="promo__video" autoplay muted loop preload="none">
      <source :src="brushingVideo" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <mouse-scroll-animation />
  </div>
</template>
<script>
import MouseScrollAnimation from "@/components/MouseScrollAnimation.vue";
import brushingVideo from "@/assets/videos/brushing.mov";
export default {
  components: {
    MouseScrollAnimation
  },
  data() {
    return {
      localeRU: null,
      isVideoLoaded: false,
      brushingVideo,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVideoLoaded = true;
    }, 7000); // Отложенная загрузка
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
.promo {
  position: relative;
  margin: 43.5px 0 0 0;
  padding: 5.5em 8em 0 8em;
  height: calc(100vh - 118px);
  width: 100%;
  background-image: url('../../assets/images/promo-bg.png'); /* Путь к вашему изображению */
  background-size: cover;
  background-position: center;
  z-index: 0;
  &__wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  &__title {
    font-size: 5em;
    font-family: var(--main-font-fira-sans-condensed);
    text-align: center;
    color: var(--main-color-white);
    backdrop-filter: invert(100%);
    span {
      display: inline;
    }
  }
  &__subtitle {
    display: flex;
    justify-content: center;
    margin: 25px 0 0 0;
    font-size: 2.3em;
    span {
      display: inline;
      backdrop-filter: invert(65%);
    }
  }
  &__options {
    position: absolute;
    bottom: 30%;
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
      backdrop-filter: blur(20px);
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
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50%;
    box-shadow: 0 0 20px 3px #000;
    opacity: 0.7;
    z-index: -1;
  }
}

</style>