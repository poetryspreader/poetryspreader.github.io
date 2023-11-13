<template>
  <div
      class="banquet-catalogue"
  >
    <banquet-card
        v-for="(banquet) in banquets"
        :key="banquet.title"
        :banquet="banquet"
    />
  </div>
</template>
<script>
import BanquetCard from "@/components/BanquetCard.vue";
export default {
  data() {
    return {
      banquets: [
        {
          title: 'banquet.options.25.title',
          image: '25-person.png',
          hall: 'banquet.options.25.hall'
        },
        {
          title: 'banquet.options.50.title',
          description: 'banquet.options.50.description',
          image: '50-person.png',
          hall: 'banquet.options.50.hall'
        }
      ]
    }
  },
  components: {
    BanquetCard
  }
}
</script>
<style lang="scss">
.banquet-catalogue {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 45px;
}
</style>