<template>
  <div
    class="project"
  >
    <main-title :title="`projects.options.${this.projectSlideIndex}.title`" />
    <div class="project__subtitle">
      {{ $t(`projects.options.${this.projectSlideIndex}.subtitle`) }}
    </div>
    <swiper
      class="project__swiper"
      :threshold="20"
      :autoHeight="true"
      :modules="modules"
      :grabCursor="true"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="project in projects"
        :key="project.style"
      >
        <div class="collage-grid">
          <div class='card'>
            <div
              class='card__content'
              v-if="localeRU"
              v-for="(_, index) in Object.keys(this.localeRU.projects.options[this.projectSlideIndex].descriptions).length"
              :key="index"
            >
              <div class='card__label'>
                {{ $t(`projects.options.${this.projectSlideIndex}.descriptions.${index}.title`) }}
              </div>
              <div class='card__description'>
                {{ $t(`projects.options.${this.projectSlideIndex}.descriptions.${index}.text`) }}
              </div>
            </div>
          </div>
          <div
            class="card"
            v-for="(photo, index) in project.photos"
            :key="index"
          >
            <img
              class="card__image"
              :src="imageUrl(photo)"
              :alt="photo"
            >
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import MainTitle from "@/components/MainTitle.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
export default {
  components: {
    SwiperSlide, Swiper,
    MainTitle
  },
  data() {
    return {
      modules: [
        Pagination, Navigation
      ],
      isModalOpen: false,
      selectedPhoto: null,
      projects: [
        {
          style: "minimalism",
          photos: ["minimalism/19.jpg", "minimalism/20.jpg", "minimalism/21.jpg", "minimalism/22.jpg", "minimalism/23.jpg", "minimalism/24.jpg", "minimalism/25.jpg", "minimalism/26.jpg", "minimalism/27.jpg", "minimalism/28.jpg", "minimalism/29.jpg", "minimalism/30.jpg"]
        },
        {
          style: "modern-classic/",
          photos: ["modern-classic/31.jpg", "modern-classic/32.jpg", "modern-classic/33.jpg", "modern-classic/34.jpg", "modern-classic/35.jpg", "modern-classic/36.jpg", "modern-classic/37.jpg"]
        },
        {
          style: "eco",
          photos: ["eco/1.jpg", "eco/2.jpg", "eco/3.jpg", "eco/4.jpg", "eco/5.jpg"]
        },
        {
          style: "experimental",
          photos: ["experimental/7.jpg", "experimental/8.jpg", "experimental/9.jpg", "experimental/10.jpg", "experimental/11.jpg", "experimental/12.jpg", "experimental/13.jpg", "experimental/14.jpg", "experimental/15.jpg", "experimental/16.jpg", "experimental/17.jpg", "experimental/18.jpg"]
        },
        {
          style: "public-spaces/",
          photos: ["public-spaces/38.jpg", "public-spaces/39.jpg", "public-spaces/40.jpg", "public-spaces/41.jpg", "public-spaces/42.jpg"]
        }
      ],
      projectSlideIndex: 0,
      localeRU: null,
    }
  },
  created() {
    import('@/locales/ru.json')
      .then((module) => {
        this.localeRU = module.default;
      })
  },
  methods: {
    imageUrl(image) {
      return new URL(`../../assets/images/design-projects/${image}`, import.meta.url).href;
    },
    onSlideChange(swiper) {
      this.projectSlideIndex = swiper.realIndex;
    }
  }
}
</script>
<style lang="scss">
.project {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 70px 10px 0;
  text-align: left;
  background-image: repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(255,255,255) 0px, rgb(255,255,255) 9px,rgb(255,255,255) 9px, rgb(255,255,255) 21px,rgb(255,255,255) 21px, rgb(255,255,255) 31px,rgb(255,255,255) 31px, rgb(255,255,255) 40px); background-size: 20px 20px;
  &__subtitle {
    padding: 0 20px;
    max-width: 1200px;
    margin: 30px auto 30px;
    font-family: var(--main-font-playfair-display);
    font-size: 1.3em;
  }
  .swiper {
    width: 100%;
    padding: 50px 0 0 0;
    &-pagination  {
      top: 0;
      height: 10px;
    }
    &-slide {
      .collage-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        grid-auto-rows: 500px;
        justify-content: center;
        gap: 2px;
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 500px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: rgba(64, 63, 226, 0.8);
          color: black;
          font-family: var(--main-font-playfair-display);
          font-size: 17px;
          &__content {
            width: 50%;
          }
          &:first-child {
            padding: 20px;
            grid-column: span 2; /* Занимает два столбца */
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-content: center;
            justify-content: flex-start;
          }
          &__label {
            margin: 0 0 20px 10px;
            font-size: 20px;
            font-weight: 700;
          }
          &__description {
            margin: 0 30px 30px 30px;
          }
          &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 2;
          }
        }
      }
    }
    &-button-prev,
    &-button-next {
      position: absolute;
      top: 150px;
      transform: translate(0, -50%);
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      z-index: 2;
    }
    &-button-prev {
      left: 15px;
    }
    &-button-next {
      right: 15px;
    }
    .modal {
      &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &-image {
        max-width: 90%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>