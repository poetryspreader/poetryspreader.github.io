<template>
  <div
    :style="{ height: 75 + 'px' }"
  ></div>
  <div
    :class="{
      'header': true,
      'slide-out-up': this.scrollY > 230 && this.scrollingDown,
      'slide-in-down': this.scrollY > 171 && !this.scrollingDown
    }"
    :style="{
      transform: this.scrollY <= 142 ? `translateY(${0.5*-scrollY}px)` : 'translateY(-73px)'
    }"
    ref="header"
  >
    <Logo />
    <nav-bar />
  </div>
  <slot>
  </slot>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  background-color: var(--main-color-black);
  color: var(--main-color-white);
  transition: top 0.5s, opacity 0s;
  .logo {
    padding: 10px;
  }
}

.slide-out-up {
  top: -150px;
  transition-delay: 0.5s;
}

.slide-in-down {
  top: 0;
  transition-delay: 0.5s;
  transition: top 0.5s;
}
</style>