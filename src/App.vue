<template>
  <Promo />
  <MenuRecommendations />
  <AboutUs />
  <BanquetChoice />
  <WorkAtUs />
  <FeedBack />
  <FooterMain />
</template>
<script>
import Promo from './components/sections/PromoMain.vue';
import MenuRecommendations from './components/sections/MenuRecommendations.vue';
import AboutUs from './components/sections/AboutUs.vue';
import BanquetChoice from './components/sections/BanquetChoice.vue';
import WorkAtUs from './components/sections/WorkAtUs.vue';
import FeedBack from './components/sections/FeedBack.vue';
import FooterMain from './components/sections/FooterMain.vue';

export default {
  components: {
    Promo, MenuRecommendations, AboutUs, BanquetChoice, WorkAtUs, FeedBack, FooterMain
  }
}
</script>
