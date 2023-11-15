<template>
  <div class="logo">
    <img
      src="../assets/images/paint-roller.png"
      alt="scandiroom.net"
    >
    <div class="logo__label">
      <span>
        {{ label }}
      </span>
      <div>
        {{ $t('header.logo') }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      label: "scandiroom"
    }
  }
}
</script>
<style lang="scss">
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1;
  img {
    background-color: var(--main-color-white);
    padding: 15px;
    border-radius: 20px;
    height: 70px;
  }
  &__label {
    margin: 0 0 0 10px;
    span {
      font-size: 25px;
    };
    div {
      font-size: 15px;
      font-weight: 100;
    }
  }
}
</style>