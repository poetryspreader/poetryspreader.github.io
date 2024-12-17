<template>
  <div
    :class="{ 'nav-bar': true }"
  >
    <language-switcher />
    <div class="nav-bar__catalogue">
      <router-link
        v-for="(item) in navItems"
        :key="item.label"
        :class="{
          'nav-bar__item': true,
          'active': this.$route.fullPath === item.to ||
          item.activeClassUnlockers && item.activeClassUnlockers.includes(this.$route.fullPath)
        }"
        :to="item.to"
      >
        {{ $t(item.label) }}
      </router-link>
    </div>
    <font-awesome-icon
      icon="fa-solid fa-magnifying-glass"
      aria-hidden="true"
      class="nav-bar__search"
    />
  </div>
</template>
<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
export default {
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      navItems: [
        {
          'label': 'nav-bar.new',
          'to': '/'
        },
        {
          'label': 'nav-bar.tools',
          'to': '/tools',
          'activeClassUnlockers': [
            '/scandinavian'
          ]
        },
        {
          'label': 'nav-bar.contacts',
          'to': '/contacts'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.nav-bar {
  padding: 7px 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color-dark-black);
  transition: transform 0.6s ease-in-out;
  &__catalogue {
    display: flex;
    gap: 20px;
    flex-direction: row;
    font-size: 22px;
    font-family: var(--main-font-fira-sans-condensed);
    font-weight: 300;
  }
  &__item {
    color: var(--main-color-white);
    text-decoration: none;
    cursor: pointer;
    padding: 2px 6px;
    margin: 0 5px 0 0;
    &:last-child {
      margin: 0;
    }
    &:hover {
      border-radius: 5px;
      background-color: var(--main-color-grey-op-0-1);
    }
    &.active {
      color: var(--main-color-light-grey-op-0-5);
      cursor: default;
      &:hover {
        background-color: var(--main-color-grey-op-0-1);
      }
    }
  }
  &__search {
    scale: 1.7;
    width: 35px;
  }
}
</style>