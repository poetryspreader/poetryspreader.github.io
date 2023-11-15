import './assets/main.scss'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faFacebookF,
    faInstagram,
    faMagnifyingGlass
)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

// languages
import ruMessages from './locales/ru.json';
import enMessages from './locales/en.json';

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        ru: ruMessages,
        en: enMessages
    },
});

const vuetify = createVuetify({
    components
});

createApp(App)
    .use(router)
    .use(i18n)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
