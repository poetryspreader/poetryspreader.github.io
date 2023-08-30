<template>
  <section class="work-at-us">
    <div class="container">
      <div class="work-at-us__wrapper">
        <VacancyCarousel />
        <VacancyForm />
      </div>
    </div>
  </section>
</template>
<script>
import VacancyCarousel from "@/components/VacancyCarousel.vue";
import VacancyForm from "@/components/VacancyForm.vue";
export default {
  components: {
    VacancyCarousel, VacancyForm
  }
}
</script>
<style lang="scss">
.work-at-us {
  position: relative;
  .main-title {
    margin-top: 0;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 100%;
    background-color: var(--main-background-color-beige);
    z-index: -1;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>