<template>
  <default-layout>
    <div class="contacts">
      <main-title :title="'contacts.title'"/>
      <div class='contacts__wrapper'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2124.2920866593668!2d28.292762795970486!3d57.83032910668703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c01eeaf8249387%3A0x42a4cc10aa5dd194!2z0JDQu9C80LDQt9C90LDRjyDRg9C7LiwgMTAsINCf0YHQutC-0LIsINCf0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE4MDAyMA!5e0!3m2!1sru!2slv!4v1733104036954!5m2!1sru!2slv"
          width="600"
          height="450"
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
        <div class='contacts__options'>
          <div class='contacts__subtitle'>
            {{ $t('contacts.subtitle') }}
          </div>
          <div
            v-for='country in contacts.countries'
          >

          </div>
          <div
            class="contacts__item"
            v-for='contact in contacts'
          >
            <div class='contacts__label'>
              {{ $t(`${contact.label}`) }}
            </div>
            <div class='contacts__description'>
              &nbsp; {{ $t(`${contact.description}`) }}
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </default-layout>
</template>
<script>
import DefaultLayout from "@/components/layouts/default.vue";
import MainTitle from "@/components/MainTitle.vue";
export default {
  data() {
    return {
      contacts: [
        {
          "label": "contacts.address.label",
          "description": "contacts.address.description"
        },
        {
          "label": "contacts.email.label",
          "description": "contacts.email.description"
        },
        {
          "label": "contacts.phone.label",
          "description": "contacts.phone.description"
        }
      ]
    }
  },
  components: {
    DefaultLayout, MainTitle
  }
}
</script>
<style lang='scss'>
.contacts {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 43.5px 0 0 0;
  .main-title {
    display: block;
    margin: 50px 0 0 0;
  }
  &__wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 30px 0 0 0;
  }
  iframe {
    height: 600px;
    width: 60%;
  }
  &__subtitle {
    text-align: center;
    font-size: 1.5em;
    margin: 0 0 20px 0;
  }
  &__options {
    margin: 0 0 0 20px;
    display: flex;
    width: 40%;
    flex-direction: column;
  }
  &__item {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    margin: 0 0 5px 0;
  }
  &__label {
    font-style: italic;
  }
}
</style>