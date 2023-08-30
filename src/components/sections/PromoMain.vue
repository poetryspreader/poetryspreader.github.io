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
      <div class="promo__title" ref="title">
        {{ $t('promo.title') }}
      </div>
      <div class="promo__subtitle" ref="subtitle">
        {{ $t('promo.subTitle') }}
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
      promoTitle: 'Добро пожаловать в ресторан VILAVI!',
      promoSubTitle: 'Приветствие на берегу удовольствий: Откройте двери в мир утонченной гастрономии и непревзойденного уюта.'
    }
  },
  mounted() {
    console.log(this.$i18n.messages);
    window.addEventListener('scroll', () => {
      this.$refs.title.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      this.$refs.subtitle.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    });
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
    transition: transform 0.3s ease-out;
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
    transition: transform 0.5s ease-out;
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
    border-radius: 130px 130px 0 0;
    background-color: var(--main-color-white);
    z-index: 1;
  }
}
</style>