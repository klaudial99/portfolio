import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

import VueApexCharts from "vue3-apexcharts";
import VueEasyLightbox from 'vue-easy-lightbox'

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

const messages = {
    en: {
        navbar: {
            projects: 'PROJECTS',
            contact: 'CONTACT'
        },
        home: {
            about: 'Engineer and applied computer science student based in Wroclaw, Poland. Great design enthusiast looking for a first job as a UX Designer.'
        },
        contact: {
            heading: 'Want to get in touch? Message me:',
            name: 'Your name:',
            nameInput: 'Your name',
            mail: 'Your email address:',
            mailInput: 'Your email address',
            message: 'Message:',
            messageInput: 'Message',
            send: 'Send'
        }
    },
    pl: {
        navbar: {
            projects: 'PROJEKTY',
            contact: 'KONTAKT'
        },
        home: {
            about: 'Studiuję Informatykę Stosowaną na drugim stopniu na Politechnice Wrocławskiej, posiadam tytuł inżyniera. Doceniam dobry design i aktualnie szukam pierwszej pracy jako UX Designer.'
        },
        contact: {
            heading: 'Chcesz się z skontaktować? Wyślij wiadomość:',
            name: 'Twoje imię:',
            nameInput: 'Twoje imię',
            mail: 'Twój adres e-mail:',
            mailInput: 'Twój adres e-mail',
            message: 'Wiadomość:',
            messageInput: 'Wiadomość',
            send: 'Wyślij'
        }
    }
}

const i18n = createI18n({
    locale: 'pl', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

const store = createStore({
    state () {
        return {
            language: 'en'
        }
    },
    mutations: {
        setLanguage(state, value) {
            state.language = value;
        },
    },
    getters: {
        getLanguage(state) {
            return state.language;
        }
    }
})

const app = createApp(App).use(router);

app.use(store)
app.use(i18n)
app.use(AOS.init());
app.use(VueApexCharts);
app.use(VueEasyLightbox)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
