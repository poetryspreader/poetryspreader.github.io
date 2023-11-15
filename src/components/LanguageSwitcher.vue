<template>
  <div @click="changeLocale" class="language-switcher">
    {{ locales[currentLocaleIndex] }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      locales: ['ru', 'en'],
      currentLocaleIndex: 0,
    };
  },
  computed: {
    currentLocale() {
      return this.locales[this.currentLocaleIndex];
    },
  },
  methods: {
    changeLocale() {
      this.currentLocaleIndex = (this.currentLocaleIndex + 1) % this.locales.length;
      this.$i18n.locale = this.currentLocale;
    },
  },
};
</script>

<style lang="scss">
.language-switcher {
  cursor: pointer;
  margin: 0 5px 0 0;
  padding: 5px 8px;
  font-size: 30px;
  transition: .4s all;
  color: white;
  text-transform: uppercase;
  &:hover {
    scale: 1.1;
  }
}
</style>