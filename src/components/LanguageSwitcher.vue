<template>
  <div class="switcher">
    <div
      class="switcher__main switcher__item"
      @click="toggleLanguages"
      :class="{ 'active': showLanguages }"
    >
      {{ languages[currentLanguageIndex] }}
    </div>
    <div class="languages" v-if="showLanguages">
      <div
          class="switcher__item"
          v-for="(language, index) in filteredLanguages()"
          :key="index"
          @click="selectLanguage(language)"
      >
        {{ language }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      languages: ['en', 'lv', 'ru'],
      currentLanguageIndex: 0,
      showLanguages: false
    }
  },
  methods: {
    toggleLanguages() {
      this.showLanguages = !this.showLanguages;
    },
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.currentLanguageIndex = this.languages.indexOf(language);
      this.showLanguages = false;
    },
    filteredLanguages() {
      return this.languages.filter((_, index) => index !== this.currentLanguageIndex);
    }
  }
}
</script>
<style lang="scss">
.switcher {
  position: relative;
  &__item {
    cursor: pointer;
    color: var(--main-color-white);
    font-size: 16px;
    text-transform: uppercase;
    border: 1px solid var(--main-color-white);
    padding: 7px 23px;
    transition: 0.2s;
    min-width: 80px;
    z-index: 1;
    &.active {
      background-color: var(--main-color-sand);
      border: 1px solid var(--main-color-sand);
      color: var(--main-color-grey-dark);
    }
    &:hover {
      background-color: var(--main-color-sand);
      color: var(--main-color-grey-dark);
      border: 1px solid var(--main-color-sand);
    }
  }
}
.languages {
  position: absolute;
  cursor: pointer;
  z-index: 2;
  width: 100%;
  min-width: 80px;
}
</style>