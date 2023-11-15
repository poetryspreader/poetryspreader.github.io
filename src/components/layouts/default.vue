<template>
    <div class="container">
      <div class="header">
        <Logo />
        <nav-bar />
      </div>
      <slot></slot>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Logo from "@/components/Logo.vue";
export default {
    components: {
        NavBar, Logo
    }
}
</script>
<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  .logo {
    margin: 20px 0;
  }
}
</style>