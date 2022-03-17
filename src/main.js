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
                title: 'WeelBeeing',
                subject: 'Web Development',
                code: 'Check out code ',
                link: 'here'
            },
            basicInfo: {
                roleHeading: 'Role',
                roleInfo1: 'Full-Stack Developer,',
                roleInfo2: 'Business Analyst',
                timelineHeading: 'Timeline',
                timelineInfo1: '2 months',
                timelineInfo2: 'Oct - Dec 2021',
                platformHeading: 'Platform',
                platformInfo: 'Web',
                toolsHeading: 'Technology and Tools',
                toolsInfo: 'Spring Boot, Vue.js, PostgreSQL, Adobe XD'
            },
            overview: {
                title: 'Overview',
                info1: 'WellBeeing is a website that allows its users to take care of their health, maintain a balanced diet and provide appropriate amount of exercise. It was created in a team of 4 people, where each person was responsible for one of the modules:',
                modulesList: {
                    item1: 'social,',
                    item2: 'diet,',
                    item3: 'sports,',
                    item4: 'telemedicine.'
                },
                info2: 'This is the project, on the basis of which I wrote my Engineering Thesis. My role was to create a social module that would spread the community and provide an opportunity to share relevant content within the whole system. It should allow for mutual motivation in pursuit of a goal and bind the whole website together, making it more attractive to the user. The project was not strictly related to UX/UI, so I will only present its elements most related to this topic.'
            },
            problem: {
                title: 'Problem recognition',
                info1: 'Social media has been in its heyday for some time now. A research carried out in 2021 proves that they are used by more than 4 billion people, which is slightly more than half of the world\'s population. What\'s more - this number has almost doubled in the last 5 years. Undoubtedly, this is greatly influenced by the pandemic period, during which it became necessary to replace direct contacts with other people.',
                info2: 'Everyone uses social media for a specific purpose. By far the largest group is the need to stay in touch with loved ones. However, they are also used to get information from the world, follow popular topics and people or just relax in their free time. The average user spends an average of 2.5 hours each day using social media.',
                info3: 'However, there is a certain risk of spending too much time on them and neglecting important aspects of life, especially the health ones. Using social media requires time spent in front of a computer or phone screen, which can significantly affect the amount of exercise a person gets during the day. Lack of time can additionally translate into an improperly balanced diet and consequently health problems. Overweight and obesity are common consequences of this lifestyle, which in many cases can be avoided. According to a study conducted in 2016, 39% of the population was overweight and 13% was obese. These results are nearly triple what they were 40 years earlier.',
                info4: 'Considering the ever-increasing popularity of social media and the health problems of mankind, it is worth taking advantage of both facts. Many people can no longer imagine their lives without the Internet, so you should do everything to take advantage of its benefits.',
            },
            idea: {
                title: 'Project idea',
                info1: 'Considering the power of social media to attract crowds, it can be used to interest the user in a larger system designed to draw attention to a fundamental aspect of human life, which is health. The entire system would allow the creation of personalized training and nutrition plans and analyze the results they produce. Moreover, it would allow you to interpret your health parameters. To ensure the best possible quality, this would be done under the supervision of trusted specialists.',
                info2: 'The social module would play an important role in the entire system. It should be the bonding part of the whole application, its promotional aspect. Keeping people connected and motivated is very important for everyone. Sharing important, verified content helps spread information that can be useful to many other users. Additionally, a person who knows they are supported by others is much more likely to be able to achieve their goals. Getting an opinion from someone who is well versed in the subject can be very valuable.'
            },
            actors: {
                title: 'Actors',
                info: 'The system distinguishes the following actors:',
                imgPath: 'actors-en.png',
                usersList: {
                    item1: 'Basic user - each registered user of the service, has access to all basic functionalities of the system;',
                    item2: 'Administrator - manages the mechanism of assigning roles within the system;',
                    item3: 'Specialist - an abstract actor, extends the functionality of the Basic user and has common features of a Dietician, Trainer and Doctor. Other modules are more focused on extending its capabilities, within the social module it is additionally able to view the profiles of users who follow it.',
                }
            },
            userStories: {
                title: 'User stories',
                info: 'After identifying the project problem and separating the actors, I created the following user stories:',
                basicUser: 'Basic user requirements:',
                basicUserList: {
                    item1: 'As a Basic user, I want to be able to get to know the subject of the website so that I can find out if I am interested in using it.',
                    item2: 'As a Basic user, I want to be able to join the service so that I can use what it offers.',
                    item3: 'As a Basic user, I want my privacy guaranteed when using the service so that my data is safe.',
                    item4: 'As a Basic user, I want to be able to expand my competences so that I can help other users.',
                    item5: 'As a Basic user, I want to be able to learn information about other users so that I can get to know them better.',
                    item6: 'As a Basic user, I want to be able to read content shared by other users so I can expand my knowledge.',
                    item7: 'As a Basic user, I want to be able to interact with content shared by other users so I can express my opinion and engage in discussion.',
                    item8: 'As a Basic user, I want to be able to publish my content so that I can interest other users.',
                    item9: 'As a Basic user, I want to be able to find other users of the system so I can meet people that interest me.',
                    item10: 'As a Basic user, I want to be able to track the activity of my friends so that I can stay up to date with the content they post.',
                    item11: 'As a Basic user, I want to be able to follow the activities of specialists so that I can constantly expand my knowledge with new, reliable information.',
                    item12: 'As a Basic user, I want to be able to evaluate the qualifications of a specialist so that it is easier for others to decide about potential cooperation.',
                    item13: 'As a Basic user, I want to be able to manage my profile data so that it is always up to date.',
                    item14: 'As a Basic user, I want to be able to browse content that interests me so that my use of the website is attractive and educational for me.',
                    item15: 'As a Basic user, I want to be able to interact privately with other users so that I am guaranteed freedom of speech.',
                },
                admin: 'Administrator requirements:',
                adminList: {
                    item1: 'As an Administrator, I want to be guaranteed a separate way of accessing the website so that it is not available to all system users.',
                    item2: 'As an Administrator, I want to be able to decide about assigning roles to users so that I have control over their competences.',
                },
                specialist: 'Specialist requirements:',
                specialistList: {
                    item1: 'As a Specialist, I want to be able to know my audience so that I can find out who is following my activity.'
                }
            },
            useCases: {
                title: 'Use cases',
                info: 'To meet user requirements, I implemented the following use cases within the social module:',
                basicUserNotLogged: 'For Basic user who is not logged in:',
                basicUserNotLoggedList: {
                    item1: 'viewing the homepage,',
                    item2: 'registering in the system,',
                    item3: 'logging into the system.'
                },
                basicUser: 'For Basic user:',
                basicUserList: {
                    item1: 'viewing user profile,',
                    item2: 'viewing post,',
                    item3: 'managing your posts (create, read, update, delete),',
                    item4: 'reacting to posts (likes),',
                    item5: 'browsing the post\'s likes list,',
                    item6: 'viewing post’s comments,',
                    item7: 'managing your comments,',
                    item8: 'sharing a post,',
                    item9: 'sharing a training plan,',
                    item10: 'sharing a nutrition plan,',
                    item11: 'searching for other users,',
                    item12: 'managing invitations to friends list,',
                    item13: 'managing your friends list,',
                    item14: 'managing your list of followed specialists,',
                    item15: 'viewing opinions on specialists,',
                    item16: 'managing your opinions,',
                    item17: 'editing your user profile,',
                    item18: 'viewing your newsfeed,',
                    item19: 'viewing your conversations,',
                    item20: 'sending a new message,',
                    item21: 'managing your specialist role requests,',
                    item22: 'attaching proof of qualifications,',
                    item23: 'logging out of the system.'
                },
                adminNotLogged: 'For Administrator who is not logged in:',
                adminNotLoggedList: {
                    item1: 'logging to the admin panel.'
                },
                admin: 'For Administrator:',
                adminList: {
                    item1: 'managing users’ specialist role requests,',
                    item2: 'logging out of the administrator panel.'
                },
                specialist: 'For Specialist:',
                specialistList: {
                    item1: 'viewing your list of followers.'
                }
            },
            prototypes: {
                title: 'Prototypes and outcome',
                info1: 'Below I present selected screens at prototype level in Adobe XD and corresponding implemented versions:',
                home: 'HOMEPAGE',
                profile: 'PROFILE VIEW',
                opinions: 'SPECIALIST\'S OPINIONS',
                friends: 'FRIENDS LIST',
                roleRequests: 'SPECIALIST ROLE REQUESTS PANEL',
                info2: 'Due to organizational changes we had 2,5 months to implement the whole system and write an Engineering Thesis. As a result, the application is unfortunately not responsive, so I recommend opening it on larger screens. Demo available ',
                link: 'here'
            },
            learnings: {
                title: 'Lessons learned',
                info: 'This was my first project done in a group larger than two people and by far my biggest. It showed me how important it is to be systematic with a short deadline and many functionalities to be implemented. I\'ve also had the opportunity to see that developing some collaborative principles for larger projects is crucial.'
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
                title: 'WeelBeeing',
                subject: 'Web Development',
                code: 'Kod dostępny ',
                link: 'tutaj'
            },
            basicInfo: {
                roleHeading: 'Rola',
                roleInfo1: 'Full-Stack Developer,',
                roleInfo2: 'Analityk Biznesowy',
                timelineHeading: 'Czas',
                timelineInfo1: '2 miesiące',
                timelineInfo2: 'październik - grudzień 2021',
                platformHeading: 'Platforma',
                platformInfo: 'Web',
                toolsHeading: 'Technologie i narzędzia',
                toolsInfo: 'Spring Boot, Vue.js, PostgreSQL, Adobe XD'
            },
            overview: {
                title: 'Ogólny zarys',
                info1: 'WellBeeing to serwis webowy pozwalający jego użytkownikom na zadbanie o swoje zdrowie, zbilansowaną dietę i dostarczenie odpowiedniej ilości ruchu. Zrealizowany został w 4-osobowym zespole, gdzie każda z osób była odpowiedzialna za jeden z modułów:',
                modulesList: {
                    item1: 'społecznościowy,',
                    item2: 'dietetyczny,',
                    item3: 'sportowy,',
                    item4: 'telemedyczny.'
                },
                info2: 'Jest to projekt, na podstawie którego napisałam swoją pracę inżynierską. Moją rolą było stworzenie modułu społecznościowego, którego zadaniem jest szerzenie się społeczności i zapewnienie możliwości dzielenia się istotnymi treściami w ramach całego systemu. Powinien on pozwalać na wzajemną motywację w dążeniu do celu i spajać cały serwis, sprawiając, że ten staje się bardziej atrakcyjny dla użytkownika. Projekt nie był ściśle związany z UX/UI, więc przedstawię jedynie jego elementy najbardziej związane z tą tematyką.'
            },
            problem: {
                title: 'Rozpoznanie problemu',
                info1: 'Media społecznościowe już od jakiegoś czasu przeżywają swój okres świetności. Przeprowadzone w 2021 roku badania dowodzą, że korzystają z nich ponad 4 miliardy ludzi, co w przeliczeniu daje nieco ponad połowę ludności całego świata. Co więcej - w przeciągu ostatnich 5 lat liczba ta wzrosła niemal dwukrotnie. Niewątpliwie wielki wpływ ma na to okres pandemii, podczas której konieczne stało się zastąpienie bezpośrednich kontaktów z innymi osobami.',
                info2: 'Każdy korzysta z mediów społecznościowych w określonym celu. Zdecydowanie największą grupę tworzy potrzeba pozostania w kontakcie z bliskimi. Wykorzystywane są one jednak również do pozyskiwania informacji ze świata, śledzenia popularnych tematów i osób czy po prostu zrelaksowania się w wolnym czasie. Przeciętny użytkownik poświęca średnio 2,5h każdego dnia na korzystanie z mediów społecznościowych.',
                info3: 'Pojawia się jednak pewne ryzyko poświęcania im zbyt dużej ilości czasu oraz zaniedbywania ważnych aspektów życia, w tym szczególnie tych zdrowotnych. Korzystanie z mediów społecznościowych wymaga czasu spędzonego przed ekranem komputera czy telefonu, co znacząco potrafi wpłynąć na ilość ruchu człowieka w ciągu dnia. Brak czasu dodatkowo może się przełożyć na źle zbilansowaną dietę, a co za tym idzie problemy ze zdrowiem. Nadwaga i otyłość są częstymi skutkami takiego stylu życia, których w wielu przypadkach można uniknąć. Według badań przeprowadzonych w 2016 roku 39% populacji zmagało się z nadwagą, a 13% z otyłością. Rezultaty te są niemal trzykrotnie większe niż 40 lat wcześniej.',
                info4: 'Mając na uwadze ciągle rosnącą popularność mediów społecznościowych oraz problemy zdrowotne ludzkości, warto wykorzystać oba fakty. Spora część ludzi nie wyobraża już sobie życia bez Internetu, więc należy robić wszystko, aby skorzystać z jego zalet.',
            },
            idea: {
                title: 'Idea projektu',
                info1: 'Uwzględniając siłę, z jaką media społecznościowe przyciągają tłumy, można posłużyć się nimi do zainteresowania użytkownika większym systemem, którego celem jest zwrócenie uwagi na fundamentalny aspekt ludzkiego życia, jakim jest zdrowie. Cały system miałby umożliwiać tworzenie spersonalizowanych planów treningowych i żywieniowych oraz analizę efektów, jakie przynoszą. Ponadto pozwalałby na interpretację swoich parametrów zdrowotnych. W celu zapewnienia jak najlepszej jakości, odbywałoby się to pod okiem zaufanych specjalistów.',
                info2: 'Moduł społecznościowy odegrałby istotną rolę w całym systemie. Powinien on być częścią spajającą całą aplikację, jej aspektem promocyjnym. Utrzymanie kontaktów międzyludzkich i motywacja są bardzo ważne dla każdego człowieka. Dzielenie się ważnymi, zweryfikowanymi treściami pozwala szerzyć informacje, które mogą przydać się wielu innym użytkownikom. Dodatkowo, człowiek, który wie, że jest wspierany przez innych, z dużo większym prawdopodobieństwem jest w stanie osiągnąć swój cel. Zasięgnięcie opinii od osoby dobrze zaznajomionej z tematem może okazać się bardzo cenne.'
            },
            actors: {
                title: 'Aktorzy',
                info: 'System wyróżnia następujących aktorów:',
                imgPath: 'actors-pl.png',
                usersList: {
                    item1: 'Podstawowy użytkownik - każdy zarejestrowany użytkownik serwisu, ma dostęp do wszystkich podstawowych funkcjonalności systemu;',
                    item2: 'Administrator - zarządza mechanizmem nadawania ról w ramach systemu;',
                    item3: 'Specjalista - aktor abstrakcyjny, rozszerza funkcjonalności Podstawowego użytkownika i posiada wspólne cechy Dietetyka, Trenera oraz Lekarza. Pozostałe moduły w większym stopniu skupiają się na poszerzeniu jego możliwości, w ramach modułu społecznościowego jest on dodatkowo zdolny do przeglądania profili użytkowników, którzy go obserwują.',
                }
            },
            userStories: {
                title: 'Historyjki użytkownika',
                info: 'Po rozpoznaniu problemu projektu i wydzieleniu aktorów, stworzyłam następujące historyjki użytkownika:',
                basicUser: 'Wymagania Podstawowego użytkownika:',
                basicUserList: {
                    item1: 'Jako Podstawowy użytkownik chcę mieć możliwość poznania tematyki serwisu, aby dowiedzieć się czy jestem zainteresowany korzystaniem z niego.',
                    item2: 'Jako Podstawowy użytkownik chcę mieć możliwość dołączenia do serwisu, aby mieć możliwość korzystania z tego, co oferuje.',
                    item3: 'Jako Podstawowy użytkownik chcę mieć zagwarantowaną prywatność podczas korzystania z serwisu, aby moje dane były bezpieczne.',
                    item4: 'Jako Podstawowy użytkownik chcę mieć możliwość poszerzenia swoich kompetencji, aby móc pomagać innym użytkownikom.',
                    item5: 'Jako Podstawowy użytkownik chcę mieć możliwość poznawania informacji o innych użytkownikach, aby móc lepiej ich poznać.',
                    item6: 'Jako Podstawowy użytkownik chcę mieć możliwość zapoznawania się z treściami udostępnianymi przez użytkowników, aby poszerzać swoją wiedzę.',
                    item7: 'Jako Podstawowy użytkownik chcę mieć możliwość wchodzenia w interakcje z treściami udostępnianymi przez użytkowników, aby wyrazić swoje zdanie i podjąć dyskusję.',
                    item8: 'Jako Podstawowy użytkownik chcę mieć możliwość publikowania swoich treści, aby móc zainteresować nimi innych użytkowników.',
                    item9: 'Jako Podstawowy użytkownik chcę mieć możliwość odnajdowania innych użytkowników systemu, aby poznać interesujące mnie osoby.',
                    item10: 'Jako Podstawowy użytkownik chcę mieć możliwość śledzenia aktywności znajomych mi osób, aby być na bieżąco z publikowanymi przez nich treściami.',
                    item11: 'Jako Podstawowy użytkownik chcę mieć możliwość śledzenia aktywności specjalistów, aby stale poszerzać swoja wiedzę o nowe, rzetelne informacje.',
                    item12: 'Jako Podstawowy użytkownik chcę mieć możliwość oceny kwalifikacji specjalisty, aby innym łatwiej było podjąć decyzję o potencjalnej współpracy.',
                    item13: 'Jako Podstawowy użytkownik chcę mieć możliwość zarządzania danymi swojego profilu, aby były zawsze aktualne.',
                    item14: 'Jako Podstawowy użytkownik chcę mieć możliwość przeglądania interesujących mnie treści, aby korzystanie z serwisu było dla mnie atrakcyjne i edukacyjne.',
                    item15: 'Jako Podstawowy użytkownik chcę mieć możliwość prywatnego kontaktu z innymi użytkownikami, aby mieć zagwarantowaną swobodę wypowiedzi.',
                },
                admin: 'Wymagania Administratora:',
                adminList: {
                    item1: 'Jako Administrator chcę mieć zagwarantowany oddzielny sposób dostania się do serwisu, aby nie był on dostępny dla wszystkich użytkowników systemu.',
                    item2: 'Jako Administrator chcę mieć możliwość decydowania o nadawaniu ról użytkownikom, aby mieć kontrolę nad ich kompetencjami.',
                },
                specialist: 'Wymagania Specjalisty:',
                specialistList: {
                    item1: 'Jako Specjalista chcę mieć możliwość poznania swoich odbiorców, aby dowiedzieć się, kto śledzi moją aktywność.'
                }
            },
            useCases: {
                title: 'Przypadki użycia',
                info: 'Aby sprostać wymaganiom użytkowników, w ramach modułu społecznościowego zrealizowałam następujące przypadki użycia:',
                basicUserNotLogged: 'Dla Niezalogowanego użytkownika:',
                basicUserNotLoggedList: {
                    item1: 'przeglądanie strony startowej,',
                    item2: 'rejestracja w systemie, ',
                    item3: 'logowanie do systemu.'
                },
                basicUser: 'Dla Podstawowego użytkownika:',
                basicUserList: {
                    item1: 'przeglądanie profilu użytkownika,',
                    item2: 'przeglądanie postów,',
                    item3: 'zarządzanie swoimi postami (dodawanie, przeglądanie, edycja, usuwanie),',
                    item4: 'reagowanie na posty (polubienia),',
                    item5: 'przeglądanie listy polubień posta,',
                    item6: 'przeglądanie komentarzy dotyczących posta,',
                    item7: 'zarządzanie swoimi komentarzami,',
                    item8: 'udostępnianie posta,',
                    item9: 'udostępnienie planu treningowego,',
                    item10: 'udostępnienie planu żywieniowego,',
                    item11: 'wyszukiwanie innych użytkowników,',
                    item12: 'zarządzanie zaproszeniami do znajomych,',
                    item13: 'zarządzanie swoją listą znajomych,',
                    item14: 'zarządzanie swoją listą obserwowanych specjalistów,',
                    item15: 'przeglądanie opinii specjalisty,',
                    item16: 'zarządzanie wystawionymi przez siebie opiniami,',
                    item17: 'edycja swojego profilu użytkownika,',
                    item18: 'przeglądanie tablicy aktywności,',
                    item19: 'przeglądanie swoich konwersacji,',
                    item20: 'wysyłanie nowej wiadomości,',
                    item21: 'zarządzanie swoimi prośbami o nadanie roli specjalisty,',
                    item22: 'załączanie dowodu posiadania kwalifikacji,',
                    item23: 'wylogowanie z systemu. '
                },
                adminNotLogged: 'Dla Niezalogowanego Administratora:',
                adminNotLoggedList: {
                    item1: 'logowanie do panelu administratora.'
                },
                admin: 'Dla Administratora:',
                adminList: {
                    item1: 'zarządzanie prośbami użytkowników o nadanie roli specjalisty,',
                    item2: 'wylogowanie z panelu administratora.'
                },
                specialist: 'Dla Specjalisty:',
                specialistList: {
                    item1: 'przeglądanie listy obserwujących.'
                }
            },
            prototypes: {
                title: 'Prototypy i rezultaty końcowe',
                info1: 'Poniżej prezentuję wybrane ekrany na poziomie prototypu w Adobe XD oraz odpowiadających zaimplementowanych wersji:',
                home: 'STRONA GŁÓWNA',
                profile: 'WIDOK PROFILU',
                opinions: 'OPINIE SPECJALISTY',
                friends: 'LISTA ZNAJOMYCH',
                roleRequests: 'PANEL PRÓŚB O NADANIE ROLI SPECJALISTY',
                info2: 'W związku ze zmianami organizacyjnymi na implementację całego systemu oraz napisanie pracy inżynierskiej mieliśmy 2,5 miesiąca czasu. W związku z tym aplikacja niestety nie jest responsywna, więc polecam otwierać na większych ekranach. Demo dostępne ',
                link: 'tutaj'
            },
            learnings: {
                title: 'Zdobyte doświadczenia',
                info: 'Był to mój pierwszy projekt realizowany w grupie większej niż dwie osoby i zdecydowanie największy. Pokazał mi jak ważna jest systematyczność przy krótkim terminie końcowym i wielu funkcjonalnościach do zrealizowania. Miałam również okazję przekonać się, że wypracowanie pewnych zasad współpracy przy większych projektach jest bardzo istotne.'
            }
        }
    }
}

const i18n = createI18n({
    locale: 'en',
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
