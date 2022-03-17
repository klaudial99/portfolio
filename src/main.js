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
                title: 'PlanszAppka',
                subject: 'UX/UI Design',
                figma: 'Check out ',
                link: 'Figma Project'
            },
            basicInfo: {
                roleHeading: 'Role',
                roleInfo1: 'Main UX Designer,',
                roleInfo2: 'Only UI Designer',
                timelineHeading: 'Timeline',
                timelineInfo1: '2 months',
                timelineInfo2: 'Oct - Dec 2021',
                platformHeading: 'Platform',
                platformInfo: 'Mobile',
                toolsHeading: 'Tools',
                toolsInfo: 'Figma, Pen+Paper, 1:1 Interview'
            },
            background: {
                title: 'Background',
                info: 'The project has been done as part of a UX course in the final semester of my IT studies. Each person on the team was asked to think of a problem or need that they notice in their environment. Then the ideas were discussed as a team and together we decided which problem would the project concern.'
            },
            problem: {
                title: 'Problem',
                info: 'As a team, we have decided to solve the problem of finding gaming companions concerning people who play board games, so that they can easily find other gamers and make friends with people with common interests.'
            },
            goal: {
                title: 'Goal',
                info: 'Design a mobile app that will unite people who play board games and allow them to easily find gaming companions to enable gameplay.'
            },
            targetAudience: {
                title: 'Target audience',
                info1: 'The audience are board game players. They are people of all ages, but a greater problem with finding playmates occurs among older people, who have already finished their education and find it difficult to find players among their friends. Additionally, some of the games require a large number of participants and a lot of time, which makes the task even more difficult.',
                info2: 'They are usually creative people, with well-developed imagination, willing to make new friends. They like healthy competition, but also cooperation with other players. Potential users face the described problem mainly in their free time, when they are looking for plans for spending a nice day.'
            },
            interviews: {
                title: 'In-Depth Interviews',
                questions: 'We have interviewed 10 potential users of the app to gather information about their behavior when faced with the problem we wanted to solve. We have prepared a list of questions for our interviewees:',
                questionsList: {
                    item1: 'Do you play board games and how often?',
                    item2: 'How many board games do you own?',
                    item3: 'Where and on what occasions do you usually play board games?',
                    item4: 'Do you have friends to play with? How is it that you have someone to play with?',
                    item5: 'How many people do you usually play with, how long?',
                    item6: 'How many games do you play?',
                    item7: 'Has it ever happened that you didn\'t have enough people to play the game?',
                    item8: 'Have you ever wanted to play a game that you didn\'t have? What have you done then?',
                    item9: 'What do you do when you want to play but have no one to play with?'
                },
                conclusions: 'Based on the interviews, we have drawn the following conclusions:',
                conclusionsList: {
                    item1: 'The vast majority of people at one time wanted to play a board game they didn\'t have - they decided to rent it or play it with someone who did.',
                    item2: 'People who don\'t have anyone to play use social media to find other players, choose another game, or just let it go.',
                    item3: 'About half of the interviewees lack people to play, usually this applies to people playing 3-4 with friends.',
                    item4: 'People are divided into those who play often (about twice a week) and rarely (a few times a year).',
                    item5: 'Typically, people have 3-6 board games at home.',
                    item6: 'Interviewees usually play with 3-5 people for about 3-4 hour.',
                    item7: 'Depending on the length of the game, people choose to play a different number of games.'
                }
            },
            personas: {
                title: 'Personas',
                info: 'Based on the information obtained, we were able to prepare two personas presenting the characteristics of our users. Meet Natalia and Leopold! :)',
                personaImgPath1: 'persona-natalia-en.png',
                personaImgPath2: 'persona-leopold-en.png'
            },
            userStories: {
                title: 'User stories',
                info: 'We have prepared key user stories for our project:',
                userStoriesList: {
                    item1: 'As a user, I want to be able to find people who own games that interest me so that I can play games that I don\'t own.',
                    item2: 'As a user, I want to find people willing to play to reach the number of players required so that I can play a game.',
                    item3: 'As a user, I want to meet people with similar interests to have someone so that I can play with in the future.',
                    item4: 'As a user, I want to be able to communicate with other users so that I can agree on meeting details.',
                    item5: 'As a user, I want to be able to browse games that are being played nearby so that I can experience new games.',
                    item6: 'As a user, I want to be able to add others to my friends so that I can see their activity more easily.',
                    item7: 'As the owner of a board game rental company, I want to be able to advertise my services so that I can increase the income of my business.'
                }
            },
            wireframes: {
                title: 'Wireframes',
                info: 'With the initial idea of the app, we have proceeded with paper prototyping. Below I present my sketches:'
            },
            ui: {
                title: 'UI Design',
                typography: {
                    title: 'Typography',
                    headings: {
                        title: 'Headings',
                        heading1: 'Heading 1 (26)',
                        heading2: 'Heading 2 (20)',
                        heading3: 'Heading 3 (18)',
                        heading4: 'Heading 4 (18)'
                    },
                    bodyText: {
                        title: 'Body text',
                        body1: 'Body text 1 (16)',
                        body2: 'Body text 2 (14)',
                        body3: 'Body text 3 (12)'
                    }
                },
                colors: {
                    title: 'Colors',
                    color1: '#303633',
                    color2: '#EDF0DA',
                    color3: '#AA4465',
                    color4: '#F18F01',
                    color5: '#363033',
                }
            },
            tests1: {
                title: 'Usability tests #1',
                info: 'After preparing the first version of the application prototype in Figma, we prepared a research scenario that we conducted with potential users. The tests were performed remotely using screen sharing, so we observed all the subsequent actions of the people taking part in the tests. We also encouraged them to comment on what they wanted to do to get to know their thought process.',
                scenarios: 'The scenario consisted of the following research tasks:',
                scenario1: {
                    contextHeading: 'Context description:',
                    contextInfo: 'Imagine that you live in Tarnogaj, Wrocław. It\'s Friday night and you still don’t have any plans for it. Recently you\'ve heard about the board game "Avalon" and found it very interesting. You don\'t want to buy the game right away until you\'ve tested it, but unfortunately none of your friends have it. You have no problem meeting new people to play with, but you\'d prefer not to travel too far from where you live.',
                    taskHeading: 'Task:',
                    taskInfo: 'Join the gameplay of the game "Avalon" that is played closest to you.'
                },
                scenario2: {
                    contextHeading: 'Context description:',
                    contextInfo: 'You have recently bought the board game "Avalon", but you lack 4 people to play with. Unfortunately you have no friends interested in playing.',
                    taskHeading: 'Task:',
                    taskInfo: 'Create an announcement in which you specify the date and time only after you have found all the players and agreed on a date.'
                },
                scenario3: {
                    contextHeading: 'Context description:',
                    contextInfo: 'You have heard from a friend that there are board game rentals. You are curious if they are also available in your city.',
                    taskHeading: 'Task:',
                    taskInfo: 'Find out if there are board game rentals in your city. If so, check their location.'
                },
                conclusions: 'Based on the tests, we have drawn the following conclusions:',
                conclusionsList: {
                    item1: 'No one had problems with the task, quite a few people wanted to use filters. Unfortunately, they are not fully supported in the prototype, but this is a sign that they would have no problems finding the advertisement in a working application. There were supporters of both map and list view - everyone would find something for themselves.',
                    item2: 'People testing the prototype did very well with this task, they liked the selection of fields in the form when creating an advertisement (e.g. age of the players). For one person the checkbox seemed a bit small, they had slight problems with hitting it - this was corrected later.',
                    item3: 'We weren\'t sure if placing rentals in the "Games" tab would be entirely intuitive, but most handled the task well, saying that this tab fit best. A couple of people initially tried the "Search" tab from the navigation menu, but in it there is a large "Game Search" heading at the top that immediately suggested they wouldn\'t find what they were looking for here, and the second choice was just the "Games" tab.'
                },
                survey: {
                    info: 'We also prepared a short post-test survey:',
                    question1: {
                        questionHeading: 'Question:',
                        questionInfo: 'How would you rate the intuitiveness of the app?',
                        conclusionHeading: 'Conclusion:',
                        conclusionInfo: 'The vast majority of people found the application very intuitive, adapted with known standards. One person said that the icons for the number of players and the number of friends in the game can be slightly unintuitive, but this is only a view of the announcement tile, where it needs to be described briefly. Once you get into the details of the announcement, everything is explained in words. We decided not to make changes here, after using the app for a short time users should easily learn the accepted designations.'
                    },
                    question2: {
                        questionHeading: 'Question:',
                        questionInfo: 'Are the navigation menu captions unambiguous?',
                        conclusionHeading: 'Conclusion:',
                        conclusionInfo: 'Users appreciated that the icons have captions, which makes them more intuitive. At first glance, a few people had some uncertainty about what is hidden in the "Games" tab - when creating the project, naming it also caused us the most problems, unfortunately there is no room for more tabs in the menu and separation of some content, so this name seems to be the best possible.'
                    },
                    question3: {
                        questionHeading: 'Question:',
                        questionInfo: 'Did you have any trouble navigating the app? If so, what was it and how would you have solved it differently?',
                        conclusionHeading: 'Conclusion:',
                        conclusionInfo: 'There were no problems with navigating the application, only the aforementioned slight uncertainty when looking for a game rentals.'
                    }
                }
            },
            heuristics: {
                title: 'Nielsen’s Usability Heuristics',
                info: 'After the first tests, we carefully reviewed all of the application screens for compliance with Nielsen’s Heuristics. We came across several shortcomings and deficiencies, which I then applied to the design in Figma. New capabilities have been added to the application:',
                fixList: {
                    fix1: 'adding and removing owned games and games from the wishlist,',
                    fix2: 'searching for advertisements related only to games from the wishlist,',
                    fix3: 'voice searching,',
                    fix4: 'searching for ads with the game being viewed,',
                    fix5: 'choosing a theme,',
                    fix6: 'inviting the user to friends from the user\'s profile,',
                    fix7: 'deleting notifications,',
                    fix8: 'if no results are returned for a search, displaying information about the missing results and suggesting applying changes to the criteria,',
                    fix9: 'reporting bugs,',
                    fix10: 'tutorial to the application (in the project it is only possible to enable the tutorial option at the launch of the app)'
                }
            },
            tests2: {
                title: 'Usability tests #2',
                info1: 'After the changes we conducted usability tests again on a different group of people. We repeated the research tasks from previous tests - the conclusions were very similar and this time no one pointed out that any of the elements was too small. In addition to the existing tasks we have added new ones:',
                scenario4: {
                    contextHeading: 'Context description:',
                    contextInfo: 'A friend recommended you this application. You have already added each other as friends, her nickname is "natalka25". You are wondering if she has recently participated in a board game.',
                    taskHeading: 'Task:',
                    taskInfo: 'Check out the recent activity of your friend with the nickname "natalka25".',
                    conclusionHeading: 'Conclusion:',
                    conclusionInfo: 'The task did not cause any problems to anyone, although arranging it we assumed a different way of solving it. We were thinking of going to Friends -> Activity, but as many people have noticed, from the Friends tab you can go to a user\'s profile and check their recent games.'
                },
                info2: 'Therefore, we decided to add one more similar task, but better reflecting what we originally meant. We examined new people.',
                scenario5: {
                    contextHeading: 'Context description:',
                    contextInfo: 'Some friends have recommended the application to you. You have installed the application and added each other as friends. You are wondering what your friends\' recent activities in the application were.',
                    taskHeading: 'Task:',
                    taskInfo: 'Check your friends\' recent activities in the app (who did what).',
                    conclusionHeading: 'Conclusion:',
                    conclusionInfo: 'This time, the description of the context and the task were worded in such a way that the surveyed users understood our intentions and easily noticed the "Activity" tab, where the last activity of all friends is located.'
                },
            },
            survey: {
                title: 'Survey',
                info1: '',
                questions: {
                    question1: 'Which element in the ad do you pay particular attention to?',
                    question2: 'Which form seems more user-friendly to you?',
                    question3: 'Which form seems more user-friendly to you?',
                    question4: 'Which form seems more user-friendly to you?',
                    question5: 'Do you think that each advertisement should additionally have a title (created by the author), is the information provided sufficient?',
                    question6: 'Would you like there to be an option to customize the appearance of the ad tile for the user (issues raised in previous questions)?',
                },
                info2: 'The results of the survey were in alignment with our initial assumptions about the appearance of the advertisement tile, but due to some different voices and predominant approval for the ability to edit the appearance of the tile, we decided that it would be appropriate to add such an option in the app settings.',
                figma1: 'Now, if you haven\'t done it already, check out the project in Figma ',
                link: 'here',
                figma2: ' :)'
            },
            learnings: {
                title: 'Lessons learned',
                info: 'This was my first project that strictly focused on UX, done under the tutelage of a UX specialist. I had the opportunity to go through the process of User Centered Design and find out that this is something I want to see a future with and grow in this field. Approaching this task again, I would definitely deepen my knowledge and include more elements necessary during such design. However, I have to admit that it was a good introductory lesson for me.'
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
                info: 'Below I present selected screens at prototype level in Adobe XD and corresponding implemented versions:',
                home: 'HOMEPAGE',
                profile: 'PROFILE VIEW',
                opinions: 'SPECIALIST\'S OPINIONS',
                friends: 'FRIENDS LIST',
                roleRequests: 'SPECIALIST ROLE REQUESTS PANEL'
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
                title: 'PlanszAppka',
                subject: 'UX/UI Design',
                figma: 'Projekt w Figmie dostępny ',
                link: 'tutaj'
            },
            basicInfo: {
                roleHeading: 'Rola',
                roleInfo1: 'Głowny UX Designer,',
                roleInfo2: 'Jedyny UI Designer',
                timelineHeading: 'Czas',
                timelineInfo1: '2 miesiące',
                timelineInfo2: 'październik - grudzień 2021',
                platformHeading: 'Platforma',
                platformInfo: 'Mobile',
                toolsHeading: 'Narzędzia',
                toolsInfo: 'Figma, kartka+długopis, wywiady 1:1'
            },
            background: {
                title: 'Kontekst',
                info: 'Projekt został wykonany w ramach kursu związanego z UX na ostatnim semestrze studiów informatycznych. Każda z osób w zespole miała zastanowić się nad jakimś problemem lub potrzebą do zaspokojenia, które zauważa w swoim środowisku. Następnie pomysły były omawiane w zespole i wspólnie podejmowaliśmy decyzję, którego problemu będzie dotyczył projekt.'
            },
            problem: {
                title: 'Problem',
                info: 'Jako zespół zdecydowaliśmy się rozwiązać problem szukania kompanów do gry występujący w grupie osób grających w gry planszowe, aby w prosty sposób mogły znaleźć innych graczy i zawrzeć znajomości z osobami o wspólnych zainteresowaniach. '
            },
            goal: {
                title: 'Cel',
                info: 'Stworzenie projektu aplikacji mobilnej, która zjednoczy osoby grające w gry planszowe i pozwoli im w prosty sposób znaleźć kompanów do gry, aby umożliwić rozgrywkę.'
            },
            targetAudience: {
                title: 'Grupa odbiorców',
                info1: 'Grupa odbiorców to gracze gier planszowych. Są to osoby w każdym wieku, lecz większy problem ze znalezieniem kompanów do gry występuje u osób starszych, które zakończyły już edukację i trudno znaleźć im graczy wśród znajomych. Dodatkowo niektóre z gier wymagają dużej liczby uczestników oraz poświęcenia sporej ilości czasu, co jeszcze bardziej utrudnia zadanie.',
                info2: 'Są to zazwyczaj osoby kreatywne, z dobrze rozwinięta wyobraźnią, chęcią nawiązania nowych znajomości. Lubią zdrową rywalizację, ale także współpracę z innymi graczami. Potencjalni użytkownicy mierzą się z opisywanym problemem głównie w czasie wolnym, kiedy szukają planów na miłe spędzenie dnia.'
            },
            interviews: {
                title: 'Wywiady pogłębione',
                questions: 'Przeprowadziliśmy wywiady z 10 potencjalnymi użytkownikami aplikacji, aby zebrać informacje o ich zachowaniach w sytuacji problemu, który chcieliśmy rozwiązać. Przygotowaliśmy listę pytań dla naszych rozmówców:',
                questionsList: {
                    item1: 'Czy i jak często grasz w gry planszowe?',
                    item2: 'Ile gier planszowych posiadasz?',
                    item3: 'Gdzie i przy jakiej okazji zazwyczaj grasz w gry planszowe?',
                    item4: 'Masz znajomych, z którymi możesz zagrać? Jak to się dzieje że masz z kim grać?',
                    item5: 'W ile osób zazwyczaj grasz, jak długo?',
                    item6: 'Ile partii rozgrywacie?',
                    item7: 'Czy zdarzyło się, że nie miałeś wystarczającej liczby osób potrzebnej do rozegrania gry?',
                    item8: 'Czy chciałeś kiedyś zagrać w grę, której nie miałeś, ale nie chciałeś jej jeszcze kupować?',
                    item9: 'Co robisz, kiedy chcesz zagrać, ale nie masz z kim?'
                },
                conclusions: 'Na podstawie wywiadów wyciągnęliśmy następujące wnioski:',
                conclusionsList: {
                    item1: 'Znaczna większość osób chciała kiedyś zagrać w grę planszową, której nie miała - decydowała się na jej wypożyczenie lub grała u kogoś, kto ją posiadał.',
                    item2: 'Osoby nie mające z kim zagrać, sięgają do mediów społecznościowych w poszukiwaniu innych graczy, wybierają inną grę lub po prostu odpuszczają.',
                    item3: 'Około połowie ankietowanych brakuje osób do gry, zazwyczaj dotyczy to osób grających w 3-4 osoby u znajomych.',
                    item4: 'Ludzie dzielą się na tych którzy grają często (ok. 2 razy w tygodniu) i rzadko (parę razy do roku).',
                    item5: 'Zazwyczaj osoby mają po 3-6 gier planszowych w domu.',
                    item6: 'Ankietowani grają zazwyczaj w 3-5 osób po ok. 3-4h.',
                    item7: 'Zależnie od czasu rozgrywki, osoby decydują się na różną liczbę partii.'
                }
            },
            personas: {
                title: 'Persony',
                info: 'Na podstawie pozyskanych informacji byliśmy w stanie przygotować dwie persony, prezentujące cechy naszych użytkowników. Poznaj Natalię i Leopolda! :)',
                personaImgPath1: 'persona-natalia-pl.png',
                personaImgPath2: 'persona-leopold-pl.png'
            },
            userStories: {
                title: 'Historyjki użytkownika',
                info: 'Przygotowaliśmy kluczowe dla naszego projektu historyjki użytkownika:',
                userStoriesList: {
                    item1: 'Jako użytkownik, chcę mieć możliwość znalezienia osób posiadających gry, które mnie interesują, aby zagrać w gry, których nie posiadam.',
                    item2: 'Jako użytkownik, chcę znaleźć osoby chętne do gry, aby osiągnąć liczbę graczy wymaganą do rozegrania partii.',
                    item3: 'Jako użytkownik, chcę poznać osoby o podobnych zainteresowaniach, aby mieć z kim zagrać w przyszłości.',
                    item4: 'Jako użytkownik, chcę mieć możliwość komunikacji z innymi użytkownikami, aby uzgadniać szczegóły spotkań.',
                    item5: 'Jako użytkownik, chcę mieć możliwość przeglądania gier, które są rozgrywane w pobliżu, aby móc poznać nowe gry.',
                    item6: 'Jako użytkownik, chcę mieć możliwość dodawania innych do znajomych, aby mieć łatwiejszy wgląd w ich aktywność.',
                    item7: 'Jako właściciel wypożyczalni gier planszowych, chcę mieć możliwość reklamowania swoich usług, aby zwiększyć dochód swojej wypożyczalni.'
                }
            },
            wireframes: {
                title: 'Wireframe\'y',
                info: 'Mając już początkowy zamysł aplikacji przystąpiliśmy do papierowego prototypowania. Poniżej przedstawiam moje szkice:'
            },
            ui: {
                title: 'UI Design',
                typography: {
                    title: 'Typografia',
                    headings: {
                        title: 'Nagłówki',
                        heading1: 'Nagłówek 1 (26)',
                        heading2: 'Nagłówek 2 (20)',
                        heading3: 'Nagłówek 3 (18)',
                        heading4: 'Nagłówek 4 (18)'
                    },
                    bodyText: {
                        title: 'Tekst podstawowy',
                        body1: 'Tekst podstawowy 1 (16)',
                        body2: 'Tekst podstawowy 2 (14)',
                        body3: 'Tekst podstawowy 3 (12)'
                    }
                },
                colors: {
                    title: 'Kolory',
                    color1: '#303633',
                    color2: '#EDF0DA',
                    color3: '#AA4465',
                    color4: '#F18F01',
                    color5: '#363033',
                }
            },
            tests1: {
                title: 'Badania użyteczności #1',
                info: 'Po sporządzeniu pierwszej wersji prototypu aplikacji w Figmie przygotowaliśmy scenariusz badań, które przeprowadzaliśmy z potencjalnymi użytkownikami. Testy wykonywane były zdalnie z wykorzystaniem udostępniania ekranu, więc obserwowaliśmy wszystkie kolejne działania osób biorących udział w testach. Zachęcaliśmy ich także do komentowania tego, co chcą zrobić, aby poznać ich tok myślenia.',
                scenarios: 'Scenariusz składał się z następujących zadań badawczych:',
                scenario1: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Wyobraź sobie, że mieszkasz na Tarnogaju we Wrocławiu. Jest piątkowy wieczór, a Ty nadal nie masz na niego planów. Ostatnio usłyszałeś(-aś) o grze planszowej “Avalon” i bardzo Cię zainteresowała. Nie chcesz od razu kupować gry, póki jej nie przetestujesz, ale niestety żaden ze znajomych jej nie ma. Nie masz problemu z poznaniem nowych ludzi, z którymi mógłbyś/mogłabyś zagrać, ale najchętniej nie przemieszczał(a)byś się za daleko od miejsca zamieszkania.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Dołącz do rozgrywki w grę “Avalon”, która rozgrywana jest najbliżej Ciebie.'
                },
                scenario2: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Kupiłeś(-aś) ostatnio grę planszową “Avalon”, ale brakuje Ci 4 osób do gry. Niestety nie masz znajomych zainteresowanych rozgrywką.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Utwórz ogłoszenie, w którym datę i godzinę określisz dopiero po znalezieniu wszystkich graczy i ustaleniu terminu.'
                },
                scenario3: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Usłyszałeś(-aś) od znajomego, że istnieją wypożyczalnie gier planszowych. Jesteś ciekaw, czy są one dostępne także w Twoim mieście.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Dowiedz się czy w Twoim mieście znajdują się wypożyczalnie gier planszowych. Jeśli tak, to sprawdź ich lokalizację.'
                },
                conclusions: 'Na podstawie przeprowadzonych testów wyciągnęliśmy następujące wnioski:',
                conclusionsList: {
                    item1: 'Nikt nie miał problemów z zadaniem, spora część osób chciała użyć filtrów. Niestety w prototypie nie są one w pełni obsługiwane, ale to znak, że w działającej aplikacji nie mieliby problemów ze znalezieniem ogłoszenia. Pojawili się zwolennicy zarówno widoku mapki jak i listy – każdy znalazłaby coś dla siebie.',
                    item2: 'Osoby testujące prototyp bardzo dobrze poradziły sobie z tym zadaniem, podobał im się dobór pól w formularzu podczas tworzenia ogłoszenia (np. wiek graczy). Dla jednej z osób checkbox wydawał się nieco mały, miała lekkie problemy z kliknięciem – zostało to później poprawione.',
                    item3: 'Nie byliśmy pewni czy umieszczenie wypożyczalni w zakładce „Gry” będzie w pełni intuicyjne, ale większość poradziła sobie z zadaniem, mówiąc, że ta zakładka pasuje najbardziej. Parę osób próbowało początkowo w zakładce „Szukaj” z menu nawigacyjnego, jednak w nim na górze znajduje się duży nagłówek „Wyszukiwanie rozgrywki”, który od razu sugerował, że nie znajdą tu tego, czego szukają, a drugim wyborem była właśnie zakładka „Gry”.'
                },
                survey: {
                    info: 'Przygotowaliśmy też krótką ankietę potestową:',
                    question1: {
                        questionHeading: 'Pytanie:',
                        questionInfo: 'Jak ocenił(a)byś intuicyjność aplikacji?',
                        conclusionHeading: 'Wnioski:',
                        conclusionInfo: 'Osoby w zdecydowanej większości oceniły aplikację na bardzo intuicyjną, dostosowaną do znanych standardów. Jedna osoba powiedziała, że ikonki liczby graczy oraz liczby znajomych w rozgrywce mogą być lekko nieintuicyjne, ale jest to jedynie widok kafelka z ogłoszeniem, gdzie musi być ono opisane skrótowo. Po wejściu w szczegóły ogłoszenia wszystko jest wyjaśnione słownie. Uznaliśmy, że nie będziemy wprowadzać tu zmian, po krótkim użytkowaniu aplikacji użytkownicy powinni z łatwością nauczyć się przyjętych oznaczeń.'
                    },
                    question2: {
                        questionHeading: 'Pytanie:',
                        questionInfo: 'Czy podpisy w menu nawigacyjnym są jednoznaczne?',
                        conclusionHeading: 'Wnioski:',
                        conclusionInfo: 'Użytkownicy docenili, że są ikonki posiadają podpisy, co zwiększa intuicyjność. U paru osób pojawiła się na pierwszy rzut oka niepewność co kryje się w zakładce „Gry” – przy tworzeniu projektu nazwanie jej również sprawiło nam najwięcej problemów, niestety nie ma miejsca na więcej zakładek w menu i wydzielenie części zawartości, więc ta nazwa wydaje się być najlepszą z możliwych.'
                    },
                    question3: {
                        questionHeading: 'Pytanie:',
                        questionInfo: 'Czy poruszanie się po aplikacji sprawiło Ci jakiś kłopot? Jeśli tak to jaki i jak inaczej byś go rozwiązał(a)?',
                        conclusionHeading: 'Wnioski:',
                        conclusionInfo: 'Nie było problemów z nawigacją po aplikacji, jedynie wspomniana wcześniej drobna niepewność przy szukaniu wypożyczalni gier.'
                    }
                }
            },
            heuristics: {
                title: 'Heurystyki Nielsena',
                info: 'Po pierwszych testach przejrzeliśmy dokładnie wszystkie ekrany aplikacji pod kątem zgodności z heurystykami Nielsena. Natknęliśmy się na kilka niedociągnięć i braków, które następnie naniosłam do projektu w Figmie. W aplikacji pojawiły się nowe możliwości:',
                fixList: {
                    fix1: 'dodawanie i usuwanie posiadanych gier i gier z wishlisty,',
                    fix2: 'wyszukanie ogłoszeń dotyczących tylko gier z wishlisty,',
                    fix3: 'wyszukiwanie głosowe,',
                    fix4: 'wyszukiwanie ogłoszeń z przeglądaną grą,',
                    fix5: 'wybór motywu,',
                    fix6: 'zapraszanie użytkownika do znajomych z poziomu jego profilu,',
                    fix7: 'usuwanie powiadomień,',
                    fix8: 'w przypadku zwrócenia braku wyników przy wyszukiwaniu, wyświetlenie informacji o braku wyników i zasugerowanie zmiany kryteriów,',
                    fix9: 'zgłaszanie błędów,',
                    fix10: 'samouczek do aplikacji (w projekcie możliwość włączenia opcji samouczka przy uruchomieniu).'
                }
            },
            tests2: {
                title: 'Badania użyteczności #2',
                info1: 'Po zmianach przeprowadziliśmy ponowne badania użyteczności na innej grupie osób. Powtórzyliśmy zadania badawcze z poprzednich testów – wnioski były bardzo zbliżone i dodatkowo tym razem nikt nie zwrócił uwagi, aby któryś z elementów był zbyt mały. Poza istniejącymi zadaniami dodaliśmy nowe:',
                scenario4: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Znajoma poleciła Ci przedstawianą przez nas aplikację. Dodaliście się już do znajomych, jej nick to „natalka25”. Zastanawiasz się czy brała ostatnio udział w jakiejś grze planszowej.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Sprawdź ostatnią aktywność/działania swojej znajomej o nicku „natalka25”. ',
                    conclusionHeading: 'Wnioski:',
                    conclusionInfo: 'Zadanie nie sprawiło nikomu żadnych kłopotów, choć układając je zakładaliśmy inny sposób rozwiązania. Mieliśmy na myśli wejście kolejno Znajomi -> Aktywność, ale jak słusznie wiele osób zauważyło z zakładki znajomi można przejść na profil użytkownika i sprawdzić jego ostatnie rozgrywki.'
                },
                info2: 'W związku z tym zdecydowaliśmy się dodać jeszcze jedno zbliżone zadanie, ale lepiej oddające to, co początkowo mieliśmy na myśli. Badaniu poddaliśmy nowe osoby.',
                scenario5: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Kilku znajomych poleciło Ci przedstawianą przez nas aplikację. Zainstalowałeś(-aś) aplikację i dodaliście się do znajomych. Zastanawiasz się jakie były ostatnie działania Twoich znajomych w aplikacji.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Sprawdź ostatnie działania swoich znajomych w aplikacji (kto i co zrobił).',
                    conclusionHeading: 'Wnioski:',
                    conclusionInfo: 'Tym razem opis kontekstu i zadanie były sformułowane w taki sposób, że badani użytkownicy zrozumieli nasze intencje i bez problemu od razu zauważyli zakładkę „Aktywność”, na której znajduje się ostatnia aktywność wszystkich znajomych.'
                },
            },
            survey: {
                title: 'Ankieta',
                info1: 'Podczas prezentacji projektu na zajęciach zasugerowano nam skupić się na wyglądzie pojedynczego kafelka prezentującego najważniejsze informacje o konkretnej rozgrywce. Postanowiliśmy więc przeprowadzić ankietę, aby dowiedzieć się, jaka forma prezentacji informacji jest dla użytkowników najbardziej przyjazna. Poniżej przedstawiono przygotowane pytania wraz z wynikami przeprowadzonej na 16 osobach ankiety.',
                questions: {
                    question1: 'Na który element ogłoszenia zwracasz szczególną uwagę?',
                    question2: 'Która forma jest dla Ciebie bardziej przyjazna?',
                    question3: 'Która forma jest dla Ciebie bardziej przyjazna?',
                    question4: 'Która forma jest dla Ciebie bardziej przyjazna?',
                    question5: 'Czy uważasz, że każde ogłoszenie powinno dodatkowo posiadać tytuł (tworzony przez autora), czy podane informacje są wystarczające?',
                    question6: 'Czy chciał(a)byś mieć mozliwość dostosowania wyglądu kafelka ogłoszenia (kwestie poruszane w poprzednich pytaniach)?',
                },
                info2: 'Wyniki ankiety pokryły się z początkowymi założeniami dotyczącymi wyglądu kafelka ogłoszenia, ale ze względu na niektóre odmienne głosy i przeważającą aprobatę co do możliwości edycji wyglądu kafelka, stwierdziliśmy, że należałoby dodać taką opcję w ustawieniach aplikacji.',
                figma1: 'A teraz, jeśli jeszcze tego nie zrobiłeś, obejrzyj projekt w Figmie ',
                link: 'tutaj',
                figma2: ' :)'
            },
            learnings: {
                title: 'Zdobyte doświadczenia',
                info: 'Był to mój pierwszy projekt ściśle związany z UX, realizowany pod okiem specjalisty w tej dziedzinie. Miałam okazję przejść przez proces projektowania zorientowanego na użytkownika i przekonać się, że jest to coś, z czym chcę wiązać przyszłość i rozwijać się w tej dziedzinie. Podchodząc ponownie do tego zadania na pewno pogłębiłabym wiedzę i zawarła więcej elementów niezbędnych podczas takiego projektowania. Jednak muszę przyznać, że była to dla mnie dobra wprowadzająca lekcja.'
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
                info: 'Poniżej prezentuję wybrane ekrany na poziomie prototypu w Adobe XD oraz odpowiadających zaimplementowanych wersji:',
                home: 'STRONA GŁÓWNA',
                profile: 'WIDOK PROFILU',
                opinions: 'OPINIE SPECJALISTY',
                friends: 'LISTA ZNAJOMYCH',
                roleRequests: 'PANEL PRÓŚB O NADANIE ROLI SPECJALISTY'
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
