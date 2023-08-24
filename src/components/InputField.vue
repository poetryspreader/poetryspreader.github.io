<template>
  <div class="input-field">
    <div class="input-field__label">
      {{ label }}
    </div>
    <input
      v-if="inputType === 'text' || inputType === 'email'"
      :type="inputType"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    >
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: String,
    inputType: String,
    placeholder: String,
    selectOptions: Array
  }
};
</script>