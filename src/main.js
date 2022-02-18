import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown"
library.add(faChevronDown)

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App).use(router);

app.use(AOS.init());
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
