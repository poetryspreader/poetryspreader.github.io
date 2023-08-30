<template>
  <section class="about-us">
    <div class="container">
      <div class="about-us__wrapper">
        <div>
          <div class="main-category pre-fade pre-fade-left">
            {{ mainCategory }}
          </div>
          <div class="main-title pre-fade pre-fade-left">
            {{ mainTitle }}
          </div>
          <div class="about-us__text pre-fade pre-fade-left">
            <span>
              История кафе VILAVI начинается с 2007 года.
            </span>
            <br>
            <span>
              Особую атмосферу нашему кафе придает его расположение.
            </span>
            <br>
            <span>
              Кафе VILAVI расположилось в Риге в самом центре района Mежциемс: район окружают леса и озера. Тропинки леса и трасса Бикерниеки, помогут Вам нагулять аппетит.
            Уютная обстановка позволит Вам расслабиться и насладиться разнообразием блюд, напитков и ароматным шашлыком, как в залах так и на летней веранде круглый год.
            </span>
            <br>
            <span>
              Уже более 10 лет кафе радует гостей одними из лучших шашлыков города Риги, а так же большим ассортиментом горячих рыбных и мясных блюд.
            </span>
            <br>
            <span>
              В будние дни здесь можно недорого и очень вкусно пообедать.
            </span>
            <br>
            <span>
              Мы ценим каждого из наших гостей и придерживаемся наших основных ценностей: отличный сервис, вкусная еда, доступные цены и уютная атмосфера!
            </span>
            <br>
            Дорогие друзья, мы с нетерпением ждем Вас к нам в гости круглый год!
          </div>
          <MainButton
              class="about-us__btn pre-fade pre-fade-left"
              :title="buttonTitle"
          />
        </div>
        <img class="pre-fade pre-fade-right" src="../../assets/images/about-us.png" alt="about-us">
      </div>
    </div>
    <img class="about-us__stick" src="../../assets/images/elements/AboutUsStick.png" alt="Stick">
  </section>
</template>
<script>
import MainButton from "@/components/MainButton.vue";

export default {
  data() {
    return {
      mainCategory: 'О нас',
      mainTitle: 'История кафе VILAVI',
      buttonTitle: 'Подробнее'
    }
  },
  components: {
    MainButton
  }
}
</script>
<style lang="scss">
.about-us {
  position: relative;
  padding: 120px 0 0 0;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 45px;
    img {
      width: 661px;
      height: 705px;
      margin-left: auto;
      object-fit: cover;
    }
  }
  &__text {
    margin: 50px 0 0 0;
    font-weight: 400;
    font-size: 16px;
    color: var(--main-color-grey);
    span {
      display: block;
      margin: 0 0 10px 0;
    }
  }
  &__btn {
    margin: 70px 0 0 0;
    padding: 22px 84px;
  }
  &__stick {
    position: absolute;
    top: 10px;
    left: -20px;
    z-index: 1;
    scale: 1.1;
  }
}
</style>