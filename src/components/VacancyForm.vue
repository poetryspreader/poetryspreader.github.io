<template>
  <form class="vacancy-form">
    <div class="main-title">
      {{ title }}
    </div>
<!--    <div class="vacancy-form__email">-->
<!--      {{ email.label }}<a href="#">{{ email.link }}</a>-->
<!--    </div>-->
    <div class="vacancy-form__fields">
      <InputField
          v-for="field in formFields"
          :key="field.label"
          :field="field"
          :class="{ 'full-width': field.inputType === 'message' }"
      />
    </div>
    <MainButton class="vacancy-form__btn" :title="submitButton" />
  </form>
</template>
<script>
import InputField from "@/components/InputField.vue";
import MainButton from "@/components/MainButton.vue";
export default {
  components: {
    InputField, MainButton
  },
  data() {
    return {
      title: 'Оставьте заявку',
      formFields: [
        {
          label: 'Имя',
          inputType: 'text'
        },
        {
          label: 'Позиция',
          inputType: 'text'
        },
        {
          label: 'Эл. почта',
          inputType: 'text'
        },
        {
          label: 'Тел. номер',
          inputType: 'text'
        },
        {
          label: 'Сообщение',
          placeholder: 'Ваше сообщение...',
          inputType: 'message',
          fullWidth: true
        }
      ],
      submitButton: 'Оставить заявку',
      email: {
        label: 'Или отправляйте заявку на ',
        link: 'info@vilavi.lv'
      }
    }
  }
}
</script>
<style lang="scss">
.vacancy-form {
  display: flex;
  flex-direction: column;
  .main-title {
    margin: 0 0 45px 0;
  }
  &__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    max-width: 580px;
  }
  &__btn {
    padding: 22px 63px;
    margin-left: auto;
  }
  &__email {
    margin: 15px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    color: var(--main-color-grey-dark);
    a {
      font-weight: 600;
      text-decoration: none;
      color: var(--main-color-grey-dark);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .full-width {
    grid-column: 1/3;
    width: 100%;
  }
}
</style>