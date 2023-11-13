<template>
  <section class="about-us">
    <div class="container">
      <div class="about-us__wrapper">
        <div>
          <div class="main-category pre-fade pre-fade-left">
            {{ $t('about-us.pre-title') }}
          </div>
          <div class="main-title pre-fade pre-fade-left">
            {{ $t('about-us.title') }}
          </div>
          <div class="about-us__text pre-fade pre-fade-left">
            <span
              v-for="number in 7"
            >
            {{ $t(`about-us.p-${number}`) }}
            </span>
          </div>
          <MainButton
              class="about-us__btn pre-fade pre-fade-left"
              :title="'about-us.btn'"
          />
        </div>
        <img class="pre-fade pre-fade-right" src="../../assets/images/about-us.png" alt="about-us">
      </div>
    </div>
    <img class="about-us__stick" src="../../assets/images/elements/AboutUsStick.png" alt="Stick">
  </section>
</template>
<script>
import MainButton from "@/components/MainButton.vue";

export default {
  components: {
    MainButton
  }
}
</script>
<style lang="scss">
.about-us {
  position: relative;
  padding: 120px 0 0 0;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 45px;
    img {
      width: 661px;
      height: 705px;
      margin-left: auto;
      object-fit: cover;
    }
  }
  &__text {
    margin: 50px 0 0 0;
    font-weight: 400;
    font-size: 16px;
    color: var(--main-color-grey);
    span {
      display: block;
      margin: 0 0 30px 0;
    }
  }
  &__btn {
    margin: 30px 0 0 0;
    padding: 22px 84px;
  }
  &__stick {
    position: absolute;
    top: 10px;
    left: -20px;
    z-index: 1;
    scale: 1.1;
  }
}
</style>