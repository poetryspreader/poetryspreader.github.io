import './assets/main.scss'

/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faMapMarker,
    faClock,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(
//     faMapMarker,
//     faClock,
//     faPhone,
//     faEnvelope
// )


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    // .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
