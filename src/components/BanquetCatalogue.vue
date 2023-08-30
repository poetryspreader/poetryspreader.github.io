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
          title: '25 человек',
          image: '25-person.png',
          hall: 'малый зал'
        },
        {
          title: '50 человек',
          description: 'от 25 евро на человека',
          image: '50-person.png',
          hall: 'большой зал'
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