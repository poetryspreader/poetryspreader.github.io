<template>
  <div class="nav-bar">
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
          'label': 'nav-bar.contacts'
        },
        {
          'label': 'nav-bar.contacts'
        },
        {
          'label': 'nav-bar.contacts'
        }
      ]
    }
  }
}
</script>
<styles lang="scss">
.nav-bar {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &__catalogue {
    display: flex;
    flex-direction: row;
    font-size: 25px;
  }
  &__search {
    scale: 50%;
  }
}

</styles>