<template>
  <default-layout>

    <!-- PROMO -->
    <promo />
    <!-- OFFER -->
    <Offer />
    <!-- SOLUTIONS -->
    <solutions />

  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";

// SECTIONS
import Promo from "@/views/main-sections/Promo.vue";
import Offer from "@/views/main-sections/Offer.vue";
import Solutions from "@/views/main-sections/Solutions.vue";

export default {
  components: {
    // SECTIONS
    Promo, Offer, Solutions,

    DefaultLayout
  }
}
</script>