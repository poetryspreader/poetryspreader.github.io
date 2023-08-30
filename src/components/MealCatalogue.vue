<template>
  <div
      class="meal-catalogue"
  >
    <meal-card
      v-for="(meal) in meals"
      :key="meal.title"
      :meal="meal"
      class="pre-fade pre-fade-left"
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
          category: 'Рыбные блюда на углях',
          title: 'Карп на углях',
          description: 'По достоинству оценят любители рыбных блюд жареного на мангале карпа.',
          price: '11.00',
          image: 'carp.png'
        },
        {
          category: 'Горячие мясные блюда',
          title: 'Свиная рулька по-деревенски',
          description: 'Свиная рулька запеченная в духовке по деревенски. Подается с хрустящими луковыми кольцами и вкусным сливочным соусом.',
          price: '13.00',
          image: 'pork-knuckle.png'
        },
        {
          category: 'Cупы',
          title: 'Борщ',
          description: 'Борщ по рецепту лучшей бабушки. Подается со сметаной, зеленью, домашним салом, черным хлебом, чесноком.',
          price: '3.50/5.00',
          image: 'borsch.png'
        },
        {
          category: 'Cалаты',
          title: 'Салат Цезарь',
          description: 'Классический салат Цезарь с курицей. По Вашему вкусу курицу можно заменить на: лосось, креветки, бекон. Мы порадуем любой вкус.',
          price: '6.00/7.00/7.50',
          image: 'caesar.png'
        },
        {
          category: 'Закуски к пиву',
          title: 'Пивная плата',
          description: 'Фантастическая закуска не только с пивом, но и в ожидании ваших основных блюд с семьей. Каждый найдет что-нибудь по вкусу для своих вкусовых рецепторов.',
          price: '8.00',
          image: 'bier-plate.png'
        },
        {
          category: 'Десерты',
          title: 'Чизкейк',
          description: 'После плотного обеда настало время десерта. Наш восхитительный чизкейк с шоколадным соусом станет идеальным завершением трапизы.',
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