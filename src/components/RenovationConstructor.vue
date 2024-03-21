<template>
  <div class='constructor'>
    <div class='constructor__title'>
      {{ $t('tools.constructor.title') }}
    </div>
    <div class='constructor__inner'>
      <img
        :src="imageUrl()"
        alt="Интерьер"
        class='image'
      >
      <div class='options'>
        <div class='options__item'>
          <div class='options__label'>Выберите цвет стен:</div>
          <div v-for="color in wallColors" :key="color.id">
            <input
              type="radio"
              :id="'wallColor' + color.id"
              :value="color.id"
              v-model="wallColor"
            />
            <label
              :for="'wallColor' + color.id"
            >
              {{ color.name }}
            </label>
          </div>
        </div>
        <div class='options__item'>
          <div class='options__label'>Выберите тип пола:</div>
          <div v-for="color in floorTypes" :key="color.id">
            <input
              type="radio"
              :id="'floorType' + color.id"
              :value="color.id"
              v-model="floorType"
            />
            <label
              :for="'floorType' + color.id"
            >
              {{ color.name }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wallColors: [
        { id: 1, name: "Белый" },
        { id: 2, name: "Светло-серый J488" },
        { id: 3, name: "Голубой К490" },
      ],
      floorTypes: [
        { id: 1, name: 'Ламинат Эггер Н2855' },
        { id: 2, name: 'Ламинат Эггер EPL012' }
      ],
      wallColor: 1,
      floorType: 1
    }
  },
  methods: {
    imageUrl() {
      return new URL(`../assets/images/styles/scandinavian/constructor/scand-st${this.wallColor}-lm${this.floorType}.jpeg`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss'>
.constructor {
  margin: 0 auto 40px;
  max-width: 1600px;
  &__inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .image {
      box-shadow: 2px 2px 5px 0px #000;
    }
    .options {
      font-size: 20px;
      margin: 0 0 0 30px;
      &__item {
        margin: 0 0 60px 0;
        input {
          margin: 0 10px 0 0;
        }
      }
      &__label {
        margin: 0 0 30px 0;
      }
    }
  }
  &__title {
    margin: 80px 0 40px 0;
    text-align: center;
    font-family: var(--main-font-playfair-display);
    font-size: 35px;
  }
}
</style>