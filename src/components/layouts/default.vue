<template>
  <div
    v-if="this.scrollY > 75"
    :style="{ height: this.$refs.header.clientHeight + 'px' }"
  ></div>
  <div
    :class="{
      'header': true,
      'fixed': this.scrollY > 75,
      'slide-out-up': this.scrollY > 230 && this.scrollingDown,
      'slide-in-down': !this.scrollingDown
    }"
    ref="header"
  >
    <Logo />
    <nav-bar />
  </div>
  <slot></slot>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
export default {
  components: {
      NavBar, Logo
  },
  data() {
    return {
      scrollingDown: false,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.scrollingDown = currentScrollY > this.scrollY;
      this.scrollY = currentScrollY;
    }
  }
}
</script>
<style lang="scss">
.header {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  background-color: var(--main-color-black);
  color: var(--main-color-white);
  transition: 0.5s all;
  .logo {
    padding: 10px;
  }
}

.fixed {
  position: fixed;
  width: 100%;
  top: -75px;
  opacity: 1;
}
.slide-out-up {
  top: -150px;
  transition-delay: 0.02s;
}

.slide-in-down {
  top: -75px;
  transition-delay: 0.2s;
}
</style>