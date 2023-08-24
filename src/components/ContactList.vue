<template>
  <div
      class="contact-list"
  >
    <contact-list-item
        v-for="(contact) in contacts"
        :key="contact.label"
        :contact="contact"
    />
  </div>
</template>
<script>
import ContactListItem from './ContactListItem.vue';
export default {
  components: {
    ContactListItem
  },
  data() {
    return {
      contacts: [
        {
          icon: 'fa-solid fa-map-marker',
          label: 'адрес',
          description: 'Druvienas iela 30 Rīga, Latvija'
        },
        {
          icon: 'fa-solid fa-clock',
          label: 'рабочее время',
          description: 'Druvienas iela 30 Rīga, Latvija'
        },
        {
          icon: 'fa-solid fa-phone',
          label: 'Телефон',
          description: '+371 67531500'
        },
        {
          icon: 'fa-solid fa-envelope',
          label: 'эл. почта',
          description: 'info@vilavicafe.lv'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.contact-list {
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: row;
}
</style>