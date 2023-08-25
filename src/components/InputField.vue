<template>
  <div class="input-field">
    <div
      class="input-field__label"
      :class="{ 'active': isActive }"
    >
      {{ field.label }}
    </div>
    <input
      v-if="field.inputType === 'text' || field.inputType === 'email'"
      :class="{ 'full-width': field.fullWidth, 'active': isActive }"
      :type="field.inputType"
      :placeholder="field.placeholder ?? ''"
      @focus="toggleActive(true)"
      @blur="toggleActive(false)"
    >
    <input
        v-if="field.inputType === 'message'"
        :class="{ 'full-width': field.fullWidth, 'active': isActive }"
        :type="field.inputType"
        :placeholder="field.placeholder ?? ''"
        @focus="toggleActive(true)"
        @blur="toggleActive(false)"
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  props: {
    field: Object
  },
  methods: {
    toggleActive(isActive) {
      this.isActive = isActive
    }
  }
};
</script>
<style lang="scss">
.input-field {
  &__label {
    font-size: 12px;
    font-weight: 500;
    transition: 0.5s;
    color: var(--main-color-grey-light);

    &.active {
      color: var(--main-color-black);
    }
  }
  input {
    margin: 0 0 30px 0;
    font-size: 14px;
    font-weight: 600;
    width: 250px;
    height: 35px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--main-color-grey-light);
    transition: 0.6s;
    &::placeholder {
      color: var(--main-color-grey-light);
      font-weight: 500;
      font-size: 14px;
    }
    &.active {
      border-bottom: 1px solid var(--main-color-black);
    }
  }
}

.full-width {
  grid-column: 1/3;
  width: 100%;
}
</style>