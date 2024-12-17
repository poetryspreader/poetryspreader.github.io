<template>
  <div class='footer'>
    <div class='footer__media'>
      <a href='https://vk.com/scandiroom'>
        <Vk />
      </a>
    </div>
    © scandiroom.net
    <div class='footer__links'>
      <a href="mailto: info@scandiroom.net">info@scandiroom.net</a>
    </div>
  </div>
</template>
<script>
import Vk from "@/components/icons/Vk.vue";
export default {
  components: {
    Vk
  }
}
</script>
<style lang='scss'>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0;
  &__media {
    display: flex;
    flex-direction: row;
    margin: 0 0 10px;
    a {
      transition: all 0.2s;
      &:hover {
        scale: 1.1;
      }
    }
  }
  &__links {
    margin: 5px 0 0 0;
  }
}
</style>