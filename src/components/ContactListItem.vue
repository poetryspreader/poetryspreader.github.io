<template>
  <div class="contact-list-item">
    <div class="contact-list-item__label">
<!--      <font-awesome-icon-->
<!--          class="contact-list-item__icon"-->
<!--          aria-hidden="true"-->
<!--          :icon="contact.icon"-->
<!--      />-->
      {{ contact.label }}
    </div>
    <div class="contact-list-item__description">
      {{ contact.description }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.contact-list-item {
  margin: 0 100px 0 0;
  max-width: 161px;
  line-height: 22.4px;
  &__label {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: var(--main-background-color-beige);
  }
  &__description {
    font-weight: 400;
    color: var(--main-color-white);
  }
  &__icon {
    margin: 0 8px 0 0;
  }
}
</style>