<template>
  <div class="vacancy-form">
    <div class="main-title">
      {{ title }}
    </div>
    <InputField label="test" input-type="text" placeholder="hello"/>
  </div>
</template>
<script>
import InputField from "@/components/InputField.vue";
export default {
  components: {
    InputField
  },
  data() {
    return {
      title: 'Оставьте заявку'
    }
  }
}
</script>
<style lang="scss">
.vacancy-form {
  .main-title {
    margin: 0 0 50px 0;
  }
}
</style>