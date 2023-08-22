<template>
  <div class="work-at-us">
    <div class="container">
      <div class="work-at-us__wrapper">
        <VacancyCarousel />
        <VacancyForm />
      </div>
    </div>
  </div>
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
  background-color: var(--main-background-color-beige);
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>