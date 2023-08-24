<template>
  <div class="footer">
    <div class="container">
      <div class="main-category">
        {{ contactsLabel }}
      </div>
      <div class="footer__contact-list">

      </div>
    </div>
  </div>
  <div class="copyright">
    <div class="container">
      cerf
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contactsLabel: 'Контакты'
    }
  }
}
</script>
<style lang="scss">
.footer {
  background: url('../../assets/images/footer.png') no-repeat 100%/cover;
  .main-category {
    margin: 70px 0 0 0;
    color: var(--main-color-white);
  }
}
</style>