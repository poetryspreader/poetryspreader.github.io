<template>
  <default-layout>
    <main-title
      :title='"tools.styles.items.1.title"'
    />
    <carousel
      :items-to-show="1"
      :autoplay='10000'
      :wrap-around='true'
      :transition='5'
    >
      <slide
        v-for="photo in photos"
        :key="photo"
      >
        <div class='slide-image'>
          <img
            :src='imageUrl(photo)'
            alt='slide-photo'
          >
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import MainTitle from '@/components/MainTitle.vue'
export default {
  data() {
    return {
      photos: [
        'scand-1',
        'scand-2'
      ]
    }
  },
  components: {
    MainTitle,
    DefaultLayout, Carousel, Slide, Navigation, Pagination
  },
  methods: {
    imageUrl(image) {
      return new URL(`../../../assets/images/styles/${image}.png`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss'>
.slide-image {
  width: 100%;
  height: 120%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.carousel__pagination-button:nth-child(0) {

}
</style>