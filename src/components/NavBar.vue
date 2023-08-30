<template>
  <div class="nav-bar">
    <div
      v-for="item in navItems"
      :key="item.title"
      class="nav-bar__link"
    >
      {{ $t(`promo.nav.${item.title}`) }}
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: 'aboutUs'
        },
        {
          title: 'menu'
        },
        {
          title: 'banquet'
        },
        {
          title: 'vacancies'
        },
        {
          title: 'contacts'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.nav-bar {
  display: flex;
  flex-direction: row;
  &__link {
    cursor: pointer;
    padding-right: 40px;
    font-size: 16px;
    color: var(--main-color-white);
    text-transform: uppercase;
    transition: 0.2s;
    z-index: 1;
    &:hover {
      color: var(--main-color-sand);
    }
  }
}
</style>