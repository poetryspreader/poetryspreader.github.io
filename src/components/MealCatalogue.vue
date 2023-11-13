<template>
  <div
      class="meal-catalogue"
  >
    <meal-card
      v-for="(meal) in meals"
      :key="meal.title"
      :meal="meal"
      class="pre-fade"
    />
  </div>
</template>
<script>
import MealCard from './MealCard.vue';
export default {
  components: {
    MealCard
  },
  data() {
    return {
      meals: [
        {
          category: 'menu.meals.carp.category',
          title: 'menu.meals.carp.title',
          description: 'menu.meals.carp.description',
          price: '11.00',
          image: 'carp.png'
        },
        {
          category: 'menu.meals.pork-shank.category',
          title: 'menu.meals.pork-shank.title',
          description: 'menu.meals.pork-shank.description',
          price: '13.00',
          image: 'pork-knuckle.png'
        },
        {
          category: 'menu.meals.borsch.category',
          title: 'menu.meals.borsch.title',
          description: 'menu.meals.borsch.description',
          price: '3.50/5.00',
          image: 'borsch.png'
        },
        {
          category: 'menu.meals.caesar.category',
          title: 'menu.meals.caesar.title',
          description: 'menu.meals.caesar.description',
          price: '6.00/7.00/7.50',
          image: 'caesar.png'
        },
        {
          category: 'menu.meals.bear-plate.category',
          title: 'menu.meals.bear-plate.title',
          description: 'menu.meals.bear-plate.description',
          price: '8.00',
          image: 'bier-plate.png'
        },
        {
          category: 'menu.meals.cheesecake.category',
          title: 'menu.meals.cheesecake.title',
          description: 'menu.meals.cheesecake.description',
          price: '13.00',
          image: 'cheesecake.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.meal-catalogue {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 45px;
}
</style>