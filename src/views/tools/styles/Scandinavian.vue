<template>
  <default-layout>
    <main-title
      :title='"tools.styles.items.1.title"'
    />
    <div class="slider">
      <img
        :src="imageUrl(this.photos[this.currentIndex])"
        class="slider-image"
        alt='slider-photo'
      />
      <div class='slider__buttons'>
        <a
          v-for="(photo, index) in photos"
          :key="index"
          class="slider-btn"
          :style='{
            "--slider-btn-border-color": index === currentIndex ? "1px solid #1476fb" : "1px solid #cdcdcd"
          }'
          @click="this.currentIndex = index"
        >
          <div v-if="index === currentIndex" class="als-image-button-spinner als-image-button-pie"></div>
          <div v-if="index === currentIndex" class="als-image-button-fill als-image-button-pie"></div>
          <div v-if="index === currentIndex" class="als-image-button-mask"></div>
        </a>
      </div>
    </div>
    <div class='scandinavian'>
      <div class='scandinavian__description'>
        {{ $t('tools.styles.scandinavian.text-1') }}
      </div>
      <div class='scandinavian__sketches'>
        <img
          v-for="(sketch, index) in sketches"
          :src="imageUrl(sketch)"
          :class='{ "odd": index % 2 !== 0, "even": index % 2 === 0 }'
          class="sketch-image"
          alt='sketch-image'
        />
      </div>
      <RenovationConstructor />
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import 'vue3-carousel/dist/carousel.css'
import MainTitle from '@/components/MainTitle.vue'
import RenovationConstructor from '@/components/RenovationConstructor.vue'
export default {
  data() {
    return {
      photos: [
        'scand-1.png',
        'scand-2.png',
        'scand-3.png'
      ],
      sketches: [
        'chair.jpeg',
        'kitchen.jpeg',
        'squares.jpeg'
      ],
      currentIndex: 0
    }
  },
  components: {
    MainTitle,
    DefaultLayout,
    RenovationConstructor
  },
  mounted() {
    setInterval(() => this.currentIndex = (this.currentIndex + 1) % this.photos.length, 10000);
  },
  methods: {
    imageUrl(image) {
      return new URL(`../../../assets/images/styles/scandinavian/${image}`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss'>
.slider {
  margin: 44px 0 0 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  &-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 7px;
    margin: 10px 0;
  }
  &-btn {
    display: inline-block;
    position: relative;
    border: none !important;
    width: 18px;
    height: 18px;
    margin: 0 4px;
    cursor: pointer;
    background: white;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      display: block;
      border-radius: 50%;
      border: var(--slider-btn-border-color);
      opacity: 0.5;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
    }
  }
}

.scandinavian {
  margin: 40px 0 0 0;
  &__description {
    margin: 40px auto;
    max-width: 700px;
    font-size: 20px;
    font-family: var(--main-font-playfair-display);
    line-height: 1.5;
  }
  &__sketches {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .sketch-image {
      padding: 0 10px;
      border-radius: 180px;
    }
    .odd {
      margin: 130px 0 0 0;
    }
    .even {
      margin: 0 0 130px 0;
    }
  }
}

.als-image-button-pie {
  left: 0;
  top: 0;
  bottom: 0;
  right: 50%;
  position: absolute;
  background: white;
  border: 1px solid #1476fb;
  transform-origin: 100% 50%;
}

.als-image-button-spinner {
  border-radius: 12px 0 0 12px;
  z-index: 2;
  border-right: none;
  animation: alsImageSliderRota 10s linear infinite;
}

.als-image-button-mask {
  right: 50%;
  left: -5px;
  top: -5px;
  bottom: -5px;
  position: absolute;
  z-index: 3;
  opacity: 1;
  background: inherit;
  animation: alsImageSliderMask 10s steps(1, end) infinite;
}

.als-image-button-fill {
  border-radius: 0 12px 12px 0;
  z-index: 1;
  border-left: none;
  animation: alsImageSliderFill 10s steps(1, end) infinite;
  left: 50%;
  right: 0;
  opacity: 0;
}

@keyframes alsImageSliderRota {
  0%   { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}

@keyframes alsImageSliderFill {
  0%        { opacity: 0; }
  50%, 100% { opacity: 1; }
}

@keyframes alsImageSliderMask {
  0%        { opacity: 1; }
  50%, 100% { opacity: 0; }
}
</style>