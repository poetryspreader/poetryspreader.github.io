<template>
  <default-layout>
    <div class="tools">
      <main-title title='tools.title' />
      <div class='groups-wrapper'>
        <div class='group'>
          <div class='group__title'>
            {{ $t('tools.styles.title') }}
          </div>
          <ul
            v-for='item in selectionItems'
            :key='item.label'
          >
            <li
              :style='{
              "--li-background-image": `url(${imageUrl(item.image)})`
              }'
            >
              <router-link
                class="nav-bar__item"
                :to="item.to"
              >
                {{ $t(`tools.styles.items.${item.label}`) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import MainTitle from "@/components/MainTitle.vue";
export default {
  components: {
    DefaultLayout, MainTitle
  },
  data() {
    return {
      selectionItems: [
        {
          "label": "1.listed",
          "image": "furniture",
          "to": "/scandinavian"
        }
      ]
    }
  },
  methods: {
    imageUrl(imageName) {
      return new URL(`../../assets/images/${imageName}.png`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss'>
.tools {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 45px;
  font-family: var(--main-font-playfair-display);
  .groups-wrapper {
    display: inline-block;
    margin: 180px 0 0 0;
    padding: 2em 15px;
  }
  .group {
    text-align: left;
    padding: 0 2em 2em;
    display: inline-block;
    vertical-align: top;
    &__title {
      font-size: 1.4em;
      margin: 0 0 0.5em 0;
    }
  }
  ul {
    list-style-type: none;
    li {
      position: relative;
      padding: 0.3em 0 0.3em 1.9em;
      a {
        padding: 0 0 2px 0;
        font-size: 21px;
        color: #0089ff;
        text-decoration: none;
        border-bottom: 1px solid rgba(0,137,255,.3);
        transition: 0.2s;
        &:hover {
          border-bottom: 1px solid rgba(244, 18, 36, 0.3);
          border-radius: 0;
          color: rgba(244, 18, 36, 1);
        }
      }
    }
    li::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 23px;
      height: 23px;
      background-size: cover;
      background-position: center;
      background-image: var(--li-background-image);
    }
  }
}
</style>