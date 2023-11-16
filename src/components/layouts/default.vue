<template>
  <transition
    name="custom-classes-transition"
    :class="{
      'animated fadeOutUp': this.scrollY > 230 && this.scrollingDown,
      'animated fadeInDown': !this.scrollingDown
    }"
  >
    <div
      :class="{
        'header': true,
        'fixed': this.scrollY > 75
      }"
    >
      <Logo />
      <nav-bar />
    </div>
  </transition>
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
  z-index: 1;
  background-color: var(--main-color-dark-grey);
  transition: 0.6s all;
  .logo {
    padding: 10px;
  }
  slot {
    height: 100%;
  }
}

.fixed {
  position: fixed;
  width: 100%;
  top: -75px;
  opacity: 1;
}
</style>