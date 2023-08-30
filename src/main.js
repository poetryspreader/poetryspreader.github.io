import './assets/main.scss'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faMapMarker,
    faClock,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faMapMarker,
    faClock,
    faPhone,
    faEnvelope
)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';


// languages
import enMessages from './locales/en.json';
import ruMessages from './locales/ru.json';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: enMessages,
        ru: ruMessages
    },
});


createApp(App)
    .use(router)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
