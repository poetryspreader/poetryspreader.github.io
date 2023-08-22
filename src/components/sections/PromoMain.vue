<template>
  <section class="promo">
    <div class="container">
      <div class="promo__header">
        <div class="promo__logo">
          <img src="../../assets/images/logo.png" alt="logo">
        </div>
        <div class="promo__navbar-wrapper">
          <NavBar />
          <LanguageSwitcher />
        </div>
      </div>
      <div class="promo__title">
        {{ promoTitle }}
      </div>
      <div class="promo__subtitle">
        {{ promoSubTitle }}
      </div>
    </div>
    <div class="promo__rectangle"></div>
  </section>
</template>
<script>
import NavBar from '../NavBar.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';
export default {
  data() {
    return {
      promoTitle: 'Администрируемый главный текст H1',
      promoSubTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lorem semper, hendrerit nisl sagittis, tempor felis. Fusce sit amet placerat dolor.'
    }
  },
  components: {
    LanguageSwitcher,
    NavBar
  }
}
</script>
<style lang="scss">
.promo {
  min-height: 100vh;
  position: relative;
  background: url('../../assets/images/promo.png') no-repeat 100%/cover;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #282110;
    opacity: 0.6;
  }
  &__header {
    display: flex;
    padding-top: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__navbar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__logo {
    cursor: pointer;
    z-index: 1;
  }
  &__title {
    max-width: 1070px;
    margin: 190px auto 0;
    font-family: var(--main-font-playfair-display);
    font-size: 80px;
    color: var(--main-color-white);
    line-height: 1;
    position: relative;
    z-index: 1;
  }
  &__subtitle {
    max-width: 1070px;
    margin: 40px auto 0;
    font-size: 24px;
    font-weight: 400;
    color: var(--main-color-white);
    line-height: 38.5px;
    position: relative;
    z-index: 1;
  }
  &__rectangle {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 88px;
    width: 87%;
    max-width: 1688px;
    background-color: var(--main-color-white);
    z-index: 1;
  }
}
</style>