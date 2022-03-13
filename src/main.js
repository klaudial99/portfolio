import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import VueApexCharts from "vue3-apexcharts";

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown"
library.add(faChevronDown)

import {faBars} from "@fortawesome/free-solid-svg-icons/faBars"
library.add(faBars)

import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin)
library.add(faGithub)

import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp"
library.add(faArrowUp)

import {faArrowRightLong, faArrowDownLong} from "@fortawesome/free-solid-svg-icons"
library.add(faArrowRightLong)
library.add(faArrowDownLong)

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App).use(router);

app.use(AOS.init());
app.use(VueApexCharts);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
