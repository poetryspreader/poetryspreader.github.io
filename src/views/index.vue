<template>
  <default-layout>

    <!-- PROMO -->
    <promo />
    <!-- OFFER -->
    <Offer />
    <!-- SOLUTIONS -->
    <solutions />
    <!-- SOLUTIONS -->
    <design-projects  />

  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";

// SECTIONS
import Promo from "@/views/main-sections/Promo.vue";
import Offer from "@/views/main-sections/Offer.vue";
import Solutions from "@/views/main-sections/Solutions.vue";
import DesignProjects from "@/views/main-sections/DesignProjects.vue";

export default {
  components: {
    // SECTIONS
    Promo, Offer, Solutions, DesignProjects,

    DefaultLayout
  }
}
</script>