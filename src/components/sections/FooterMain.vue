<template>
  <div class="footer">
    <div class="container">
      <div class="main-category">
        {{ contactsLabel }}
      </div>
      <ContactList />
      <div class="footer__more">
        {{ more }}
        <div class="arrow">
          <img src="../../assets/images/arrows/about-us-arrow-pointer.png" alt="arrow">
          <img src="../../assets/images/arrows/about-us-arrow-stick.png" alt="arrow">
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    <div class="container">
      <div class="copyright__label">
        {{ copyright.label }}
      </div>
      <img :src="'src/assets/images/' + copyright.support" alt="copyright-support">
    </div>
  </div>
</template>
<script>
import ContactList from "@/components/ContactList.vue";
export default {
  components: {
    ContactList
  },
  data() {
    return {
      contactsLabel: 'контакты',
      more: 'больше информации',
      copyright: {
        label: 'Copyrights © VILAVI 2022',
        support: 'copyright-support.png'
      }
    }
  }
}
</script>
<style lang="scss">
.footer {
  padding: 70px 0 30px 0;
  background: url('../../assets/images/footer.png') no-repeat 100%/cover;
  .main-category {
    color: var(--main-color-white);
  }
  &__more {
    cursor: pointer;
    position: relative;
    max-width: 185px;
    color: var(--main-background-color-beige);
    text-transform: uppercase;
    font-size: 12px;
    margin: 30px 0 0 0;
    .arrow {
      position: absolute;
      top: 50%;
      right: -7px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      img:first-child {
        scale: 0.5;
        transform: rotate(180deg);
        position: absolute;
        right: 4px;
        z-index: 2;
      }
      img:last-child {
        scale: 0.5;
        z-index: 2;
        opacity: 1;
      }
    }
  }
}

.copyright {
  background-color: var(--main-color-black);
  padding: 23px 0 20px 0;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__label {
    color: var(--main-color-white);
    font-size: 12px;
    font-weight: 400;
  }
  img {
    width: 315px;
  }
}
</style>