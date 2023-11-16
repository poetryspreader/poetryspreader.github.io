<template>
  <div
    :class="{ 'nav-bar': true }"
  >
    <language-switcher />
    <div class="nav-bar__catalogue">
      <div
        v-for="item in navItems"
        :key="item.icon"
        style="margin: 0 5px 0 0"
      >
        <a
          target="_blank"
        >
          {{ $t(item.label) }}
        </a>
      </div>
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
          'label': 'nav-bar.styles'
        },
        {
          'label': 'nav-bar.inventory'
        },
        {
          'label': 'nav-bar.contacts'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.nav-bar {
  padding: 7px 0;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color-dark-grey);
  transition: transform 0.6s ease-in-out;
  &__catalogue {
    display: flex;
    gap: 20px;
    flex-direction: row;
    font-size: 22px;
    font-family: var(--main-font-fira-sans-condensed);
    font-weight: 300;
    div {
      &:hover {
        cursor: pointer;
        background-color: var(--main-color-light-grey);
      }
    }
  }
  &__search {
    scale: 2;
    width: 50px;
  }
}
</style>