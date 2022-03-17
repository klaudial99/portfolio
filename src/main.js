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
        },
        planszappka: {
            heading: {
                title: '',
                subject: '',
                figma: ''
            },
            basicInfo: {
                roleHeading: '',
                roleInfo1: '',
                roleInfo2: '',
                timelineHeading: '',
                timelineInfo1: '',
                timelineInfo2: '',
                platformHeading: '',
                platformInfo: '',
                toolsHeading: '',
                toolsInfo: ''
            },
            background: {
                title: '',
                info: ''
            },
            problem: {
                title: '',
                info: ''
            },
            goal: {
                title: '',
                info: ''
            },
            targetAudience: {
                title: '',
                info1: '',
                info2: ''
            },
            interviews: {
                title: '',
                questions: '',
                questionsList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: '',
                    item8: '',
                    item9: ''
                },
                conclusions: '',
                conclusionsList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: ''
                }
            },
            personas: {
                title: '',
                info: ''
            },
            userStories: {
                title: '',
                info: '',
                userStoriesList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: ''
                }
            },
            wireframes: {
                title: '',
                info: ''
            },
            ui: {
                title: '',
                typography: {
                    title: '',
                    headings: {
                        title: '',
                        heading1: '',
                        heading2: '',
                        heading3: '',
                        heading4: ''
                    },
                    bodyText: {
                        title: '',
                        body1: '',
                        body2: '',
                        body3: ''
                    }
                },
                colors: {
                    title: '',
                    color1: '',
                    color2: '',
                    color3: '',
                    color4: '',
                    color5: '',
                }
            },
            tests1: {
                title: '',
                info: '',
                scenarios: '',
                scenario1: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: ''
                },
                scenario2: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: ''
                },
                scenario3: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: ''
                },
                conclusions: '',
                conclusionsList: {
                    item1: '',
                    item2: '',
                    item3: ''
                },
                survey: {
                    info: '',
                    question1: {
                        questionHeading: '',
                        questionInfo: '',
                        conclusionHeading: '',
                        conclusionInfo: ''
                    },
                    question2: {
                        questionHeading: '',
                        questionInfo: '',
                        conclusionHeading: '',
                        conclusionInfo: ''
                    },
                    question3: {
                        questionHeading: '',
                        questionInfo: '',
                        conclusionHeading: '',
                        conclusionInfo: ''
                    }
                }
            },
            heuristics: {
                title: '',
                info: '',
                fixList: {
                    fix1: '',
                    fix2: '',
                    fix3: '',
                    fix4: '',
                    fix5: '',
                    fix6: '',
                    fix7: '',
                    fix8: '',
                    fix9: '',
                    fix10: ''
                }
            },
            tests2: {
                title: '',
                info1: '',
                scenario4: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: '',
                    conclusionHeading: '',
                    conclusionInfo: ''
                },
                info2: '',
                scenario5: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: '',
                    conclusionHeading: '',
                    conclusionInfo: ''
                },
            },
            survey: {
                title: '',
                info1: '',
                questions: {
                    question1: '',
                    question2: '',
                    question3: '',
                    question4: '',
                    question5: '',
                    question6: '',
                },
                info2: '',
                figma: ''
            },
            learnings: {
                title: '',
                info: ''
            }
        },

        wellbeeing: {
            heading: {
                title: '',
                subject: '',
                code: ''
            },
            basicInfo: {
                roleHeading: '',
                roleInfo1: '',
                roleInfo2: '',
                timelineHeading: '',
                timelineInfo1: '',
                timelineInfo2: '',
                platformHeading: '',
                platformInfo: '',
                toolsHeading: '',
                toolsInfo: ''
            },
            overwiew: {
                title: '',
                info1: '',
                modulesList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: ''
                },
                info2: ''
            },
            problem: {
                title: '',
                info1: '',
                info2: '',
                info3: '',
                info4: '',
            },
            idea: {
                title: '',
                info1: ''
            },
            actors: {
                title: '',
                info: '',
                usersList: {
                    item1: '',
                    item2: '',
                    item3: '',
                }
            },
            userStories: {
                title: '',
                info: '',
                basicUser: '',
                basicUserList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: '',
                    item8: '',
                    item9: '',
                    item10: '',
                    item11: '',
                    item12: '',
                    item13: '',
                    item14: '',
                    item15: '',
                },
                admin: '',
                adminList: {
                    item1: '',
                    item2: '',
                },
                specialist: '',
                specialistList: {
                    item1: ''
                }
            },
            useCases: {
                title: '',
                info: '',
                basicUserNotLogged: '',
                basicUserNotLoggedList: {
                    item1: '',
                    item2: '',
                    item3: ''
                },
                basicUser: '',
                basicUserList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: '',
                    item8: '',
                    item9: '',
                    item10: '',
                    item11: '',
                    item12: '',
                    item13: '',
                    item14: '',
                    item15: '',
                    item16: '',
                    item17: '',
                    item18: '',
                    item19: '',
                    item20: '',
                    item21: '',
                    item22: '',
                    item23: ''
                },
                adminNotLogged: '',
                adminNotLoggedList: {
                    item1: ''
                },
                admin: '',
                adminList: {
                    item1: '',
                    item2: ''
                },
                specialist: '',
                specialistList: {
                    item1: ''
                }
            },
            prototypes: {
                title: '',
                info1: '',
                home: '',
                profile: '',
                opinions: '',
                friends: '',
                roleRequests: '',
                info2: ''
            },
            learnings: {
                title: '',
                info: ''
            }
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
        },
        planszappka: {
            heading: {
                title: '',
                subject: '',
                figma: ''
            },
            basicInfo: {
                roleHeading: '',
                roleInfo1: '',
                roleInfo2: '',
                timelineHeading: '',
                timelineInfo1: '',
                timelineInfo2: '',
                platformHeading: '',
                platformInfo: '',
                toolsHeading: '',
                toolsInfo: ''
            },
            background: {
                title: '',
                info: ''
            },
            problem: {
                title: '',
                info: ''
            },
            goal: {
                title: '',
                info: ''
            },
            targetAudience: {
                title: '',
                info1: '',
                info2: ''
            },
            interviews: {
                title: '',
                questions: '',
                questionsList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: '',
                    item8: '',
                    item9: ''
                },
                conclusions: '',
                conclusionsList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: ''
                }
            },
            personas: {
                title: '',
                info: ''
            },
            userStories: {
                title: '',
                info: '',
                userStoriesList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: ''
                }
            },
            wireframes: {
                title: '',
                info: ''
            },
            ui: {
                title: '',
                typography: {
                    title: '',
                    headings: {
                        title: '',
                        heading1: '',
                        heading2: '',
                        heading3: '',
                        heading4: ''
                    },
                    bodyText: {
                        title: '',
                        body1: '',
                        body2: '',
                        body3: ''
                    }
                },
                colors: {
                    title: '',
                    color1: '',
                    color2: '',
                    color3: '',
                    color4: '',
                    color5: '',
                }
            },
            tests1: {
                title: '',
                info: '',
                scenarios: '',
                scenario1: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: ''
                },
                scenario2: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: ''
                },
                scenario3: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: ''
                },
                conclusions: '',
                conclusionsList: {
                    item1: '',
                    item2: '',
                    item3: ''
                },
                survey: {
                    info: '',
                    question1: {
                        questionHeading: '',
                        questionInfo: '',
                        conclusionHeading: '',
                        conclusionInfo: ''
                    },
                    question2: {
                        questionHeading: '',
                        questionInfo: '',
                        conclusionHeading: '',
                        conclusionInfo: ''
                    },
                    question3: {
                        questionHeading: '',
                        questionInfo: '',
                        conclusionHeading: '',
                        conclusionInfo: ''
                    }
                }
            },
            heuristics: {
                title: '',
                info: '',
                fixList: {
                    fix1: '',
                    fix2: '',
                    fix3: '',
                    fix4: '',
                    fix5: '',
                    fix6: '',
                    fix7: '',
                    fix8: '',
                    fix9: '',
                    fix10: ''
                }
            },
            tests2: {
                title: '',
                info1: '',
                scenario4: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: '',
                    conclusionHeading: '',
                    conclusionInfo: ''
                },
                info2: '',
                scenario5: {
                    contextHeading: '',
                    contextInfo: '',
                    taskHeading: '',
                    taskInfo: '',
                    conclusionHeading: '',
                    conclusionInfo: ''
                },
            },
            survey: {
                title: '',
                info1: '',
                questions: {
                    question1: '',
                    question2: '',
                    question3: '',
                    question4: '',
                    question5: '',
                    question6: '',
                },
                info2: '',
                figma: ''
            },
            learnings: {
                title: '',
                info: ''
            }
        },

        wellbeeing: {
            heading: {
                title: '',
                subject: '',
                code: ''
            },
            basicInfo: {
                roleHeading: '',
                roleInfo1: '',
                roleInfo2: '',
                timelineHeading: '',
                timelineInfo1: '',
                timelineInfo2: '',
                platformHeading: '',
                platformInfo: '',
                toolsHeading: '',
                toolsInfo: ''
            },
            overwiew: {
                title: '',
                info1: '',
                modulesList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: ''
                },
                info2: ''
            },
            problem: {
                title: '',
                info1: '',
                info2: '',
                info3: '',
                info4: '',
            },
            idea: {
                title: '',
                info1: ''
            },
            actors: {
                title: '',
                info: '',
                usersList: {
                    item1: '',
                    item2: '',
                    item3: '',
                }
            },
            userStories: {
                title: '',
                info: '',
                basicUser: '',
                basicUserList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: '',
                    item8: '',
                    item9: '',
                    item10: '',
                    item11: '',
                    item12: '',
                    item13: '',
                    item14: '',
                    item15: '',
                },
                admin: '',
                adminList: {
                    item1: '',
                    item2: '',
                },
                specialist: '',
                specialistList: {
                    item1: ''
                }
            },
            useCases: {
                title: '',
                info: '',
                basicUserNotLogged: '',
                basicUserNotLoggedList: {
                    item1: '',
                    item2: '',
                    item3: ''
                },
                basicUser: '',
                basicUserList: {
                    item1: '',
                    item2: '',
                    item3: '',
                    item4: '',
                    item5: '',
                    item6: '',
                    item7: '',
                    item8: '',
                    item9: '',
                    item10: '',
                    item11: '',
                    item12: '',
                    item13: '',
                    item14: '',
                    item15: '',
                    item16: '',
                    item17: '',
                    item18: '',
                    item19: '',
                    item20: '',
                    item21: '',
                    item22: '',
                    item23: ''
                },
                adminNotLogged: '',
                adminNotLoggedList: {
                    item1: ''
                },
                admin: '',
                adminList: {
                    item1: '',
                    item2: ''
                },
                specialist: '',
                specialistList: {
                    item1: ''
                }
            },
            prototypes: {
                title: '',
                info1: '',
                home: '',
                profile: '',
                opinions: '',
                friends: '',
                roleRequests: '',
                info2: ''
            },
            learnings: {
                title: '',
                info: ''
            }
        }
    }
}

const i18n = createI18n({
    locale: 'pl',
    fallbackLocale: 'en',
    messages
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
