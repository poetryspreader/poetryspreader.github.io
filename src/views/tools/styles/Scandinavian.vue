<template>
  <default-layout>
    <main-title
      :title='"tools.styles.items.1.title"'
    />
    <div
      class="slider-wrapper"
    >
      <main-slider :photos="photos" />
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
import 'vue3-carousel/dist/carousel.css';
import MainTitle from '@/components/MainTitle.vue';
import MainSlider from '@/components/MainSlider.vue';
import RenovationConstructor from '@/components/RenovationConstructor.vue';
export default {
  data() {
    return {
      sketches: [
        'sketches/scand-sketch-bedroom.webp',
        'sketches/scand-sketch-bedroom.webp',
        'sketches/scand-sketch-bedroom.webp'
      ],
      photos: [
        'styles/scandinavian/scand-1.png',
        'styles/scandinavian/scand-2.png',
        'styles/scandinavian/scand-3.png'
      ],
    }
  },
  components: {
    MainTitle,
    DefaultLayout,
    RenovationConstructor,
    MainSlider
  },
  methods: {
    imageUrl(image) {
      return new URL(`../../../assets/images/styles/scandinavian/${image}`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss'>
.slider-wrapper {
  margin: 44px 0 0 0;
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
</style>