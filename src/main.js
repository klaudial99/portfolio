import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
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



import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedin)
library.add(faGithub)


import {faArrowRightLong, faArrowDownLong, faBars, faArrowUp} from "@fortawesome/free-solid-svg-icons"
library.add(faArrowRightLong)
library.add(faArrowDownLong)
library.add(faBars)
library.add(faArrowUp)

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const messages = {
    en: {
        navbar: {
            projects: 'PROJECTS',
            contact: 'CONTACT'
        },
        home: {
            about: 'Engineer and Applied Computer Science student living in Wroclaw, Poland. I am a great design enthusiast currently looking for my first professional job to increase my experience.'
        },
        projects: {
            info: 'MORE PROJECTS SOON '
        },
        contact: {
            heading1: 'Want to get ',
            headingHighlight: 'in touch',
            heading2: 'Message me:',
            name: 'Your name:',
            nameInput: 'Your name',
            mail: 'Your email address:',
            mailInput: 'Your email address',
            message: 'Message:',
            messageInput: 'Message',
            send: 'Send'
        },
        rent4events: {
            about: 'Web application supporting management of event rental company.',
            heading: {
                title: 'rent4events',
                subject: 'Web Development',
                links: {
                    info1: 'Check out',
                    code: 'code',
                    info2: 'and',
                    demo: 'demo'
                }
            },
            basicInfo: {
                roleHeading: 'Role',
                roleInfo: 'Frontend Developer',
                timelineHeading: 'Timeline',
                timelineInfo: 'Mar 2022 - Jun 2022',
                platformHeading: 'Platform',
                platformInfo: 'Web',
                toolsHeading: 'Technology and Tools',
                toolsInfo: 'Vue.js'
            },
            background: {
                title: 'Background',
                info: 'The project has been created in a group of two divided into Frontend and Backend. It was inspired by our previous work experience in a company that organizes events and rents out event equipment. During one of the courses in college, we had the opportunity to design a database scheme for such a company as part of a semester project. So we decided to use it and implement a web application that would help manage the company and speed up the ordering process. This project was also carried out as a semester project in college.'
            },
            description: {
                title: 'Reality description',
                info1: 'An event rental company is a company that rents out its inventory and transports it to the venue of special events. It employs drivers who use a fleet of company vehicles. The assortment is stored in a warehouse in Wroc??aw.',
                info2: 'However, inventory data is not systematized in any way. Examples of losses in the assortment are not recorded on an ongoing basis, which translates into difficulties in estimating the current number of products, and thus to decisions on the possibility of carrying out the order.',
                info3: 'In addition, there is no single standardized way to place an order, they are taken both by email and phone, and it is difficult for the customer to view products.',
            },
            improvement: {
                title: 'Improvements made',
                subtitle1: 'Rental management improvement',
                usersInfo1: 'The new system divides its users into:',
                usersList: {
                    item1: 'manager,',
                    item2: 'drivers,',
                    item3: 'clients.'
                },
                usersInfo2: 'Each of them have access to basic account management functionalities. Additionally, individual users have the following capabilities:',
                user1: 'Manager:',
                user1List: {
                    item1: 'managing (creating, reading, updating and deleting) the assortment,',
                    item2: 'vehicle management,',
                    item3: 'employee management,',
                    item4: 'browsing placed orders,',
                    item5: 'deciding on the execution of an order,',
                    item6: 'assigning drivers and vehicles to courses within an order.'
                },
                user2: 'Driver:',
                user2List: {
                    item1: 'browsing their courses and editing their status,',
                    item2: 'browsing placed orders.'
                },
                user3: 'Client:',
                user3List: {
                    item1: 'browsing the company\'s offer,',
                    item2: 'placing a new order,',
                    item3: 'browsing their placed orders,',
                    item4: 'editing or canceling an order, if no decision has yet been made to execute it.'
                },
                usersInfo3: 'Moreover, every Internet user visiting the website is able to create an account in the system.',
                subtitle2: 'Ordering process improvement',
                orderInfo1: 'The system implements a unified ordering process consisting of the following steps:',
                orderList: {
                    item1: 'selecting the start and end date of the event,',
                    item2: 'determining the event\'s location,',
                    item3: 'selection of the assortment,',
                    item4: 'determining if delivery is required.'
                },
                orderInfo2: 'Then, due to the nature of the industry, each order is individually approved by a manager. Once the order is accepted, if transport to the event venue is required, a driver and vehicle are assigned to deliver and collect the equipment.'
            }
        },
        planszappka: {
            about: 'UX research and prototype of a mobile app uniting people who play board games.',
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
                    contextInfo: 'Imagine that you live in Tarnogaj, Wroc??aw. It\'s Friday night and you still don???t have any plans for it. Recently you\'ve heard about the board game "Avalon" and found it very interesting. You don\'t want to buy the game right away until you\'ve tested it, but unfortunately none of your friends have it. You have no problem meeting new people to play with, but you\'d prefer not to travel too far from where you live.',
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
                title: 'Nielsen???s Usability Heuristics',
                info: 'After the first tests, we carefully reviewed all of the application screens for compliance with Nielsen???s Heuristics. We came across several shortcomings and deficiencies, which I then applied to the design in Figma. New capabilities have been added to the application:',
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
                info1: 'During the project presentation in class, we were suggested to focus on the appearance of a single tile presenting the most important information about a particular game. So we decided to conduct a survey to find out which form of information presentation is most user-friendly. The prepared questions and the results of the survey conducted on 16 people are presented below.',
                questions: {
                    question1: 'Which ad element do you pay special attention to?',
                    question2: 'Which form seems to be more user-friendly to you?',
                    question3: 'Which form seems to be more user-friendly to you?',
                    question4: 'Which form seems to be more user-friendly to you?',
                    question5: 'Do you think that each advertisement should additionally have a title (created by the author), is the information provided sufficient?',
                    question6: 'Would you like there to be an option to customize the appearance of the ad tile for the user (issues raised in previous questions)?',
                },
                charts: {
                    options1: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["name of the board game", "game time", "place of the game", "all equally important"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options2: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["Wroc??aw, Tarnogaj", "<1km from you (this information can also be found in the ad details)"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options3: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["05.11.2012 6pm", "tomorrow/the day after tomorrow/in 3 days at 6pm", "tomorrow/the day after tomorrow/on Tuesday at 6pm"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options4: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["4/6 users have joined the game", "2 slots available"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options5: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["better with the title", "better without a title"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options6: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["yes", "no"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`
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
            about: 'A web service that allows you to take care of your health.',
            heading: {
                title: 'WellBeeing',
                subject: 'Web Development',
                code: 'Check out code ',
                link: 'here'
            },
            basicInfo: {
                roleHeading: 'Role',
                roleInfo1: 'Fullstack Developer,',
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
                info2: 'This is the project, on the basis of which I wrote my Engineering Thesis. My role was to create a social module that would spread the community and provide an opportunity to share relevant content within the whole system. It should allow for mutual motivation in pursuit of a goal and bind the whole website together, making it more attractive to the user.'
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
                    item6: 'viewing post???s comments,',
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
                    item1: 'managing users??? specialist role requests,',
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
            about: 'Jestem in??ynierem i studentk?? Informatyki Stosowanej z Wroc??awia. Doceniam dobry design i aktualnie szukam pierwszej pracy w zawodzie, kt??ra pozwoli mi zwi??kszy?? swoje do??wiadczenie.'
        },
        projects: {
            info: 'WI??CEJ PROJEKT??W WKR??TCE '
        },
        contact: {
            heading1: 'Chcesz si?? ',
            headingHighlight: 'skontaktowa??',
            heading2: 'Wy??lij wiadomo????:',
            name: 'Twoje imi??:',
            nameInput: 'Twoje imi??',
            mail: 'Tw??j adres e-mail:',
            mailInput: 'Tw??j adres e-mail',
            message: 'Wiadomo????:',
            messageInput: 'Wiadomo????',
            send: 'Wy??lij'
        },
        rent4events: {
            about: 'Aplikacja webowa wspomagaj??ca zarz??dzanie wypo??yczalni?? eventow??.',
            heading: {
                title: 'rent4events',
                subject: 'Web Development',
                links: {
                    info1: 'Sprawd??',
                    code: 'kod',
                    info2: 'i',
                    demo: 'demo'
                }
            },
            basicInfo: {
                roleHeading: 'Rola',
                roleInfo: 'Frontend Developer',
                timelineHeading: 'Czas',
                timelineInfo: 'marzec 2022 - czerwiec 2022',
                platformHeading: 'Platforma',
                platformInfo: 'Web',
                toolsHeading: 'Technologie i narz??dzia',
                toolsInfo: 'Vue.js'
            },
            background: {
                title: 'Kontekst',
                info: 'Projekt powsta?? w grupie 2-osobowej z podzia??em na Frontend i Backend. Inspiracj?? do niego by??a nasza wcze??niejsza praca w firmie zajmuj??cej si?? organizacj?? imprez i wypo??yczaniem sprz??tu eventowego. W czasie trwania studi??w, podczas jednego z kurs??w mieli??my okazj?? w ramach semestralnego projektu zaprojektowa?? schemat bazy danych dla takiej firmy. Postanowili??my wi??c z niego skorzysta?? i zaimplementowa?? aplikacj?? webow??, kt??ra pomog??aby zarz??dza?? firm?? oraz przyspieszy?? proces sk??adania zam??wienia. Projekt ten r??wnie?? zosta?? zrealizowany w ramach semestralnego projektu na studiach.'
            },
            description: {
                title: 'Opis wycinka rzeczywisto??ci',
                info1: 'Wypo??yczalnia eventowa jest firm??, kt??ra zajmuje si?? wypo??yczaniem posiadanego asortymentu i jego transportem na miejsce imprez okoliczno??ciowych. Zatrudniani s?? kierowcy, kt??rzy korzystaj?? z floty firmowych pojazd??w. Asortyment przechowywany jest w magazynie na terenie Wroc??awia.',
                info2: 'Dane dotycz??ce stan??w magazynowych nie s?? jednak w ??aden spos??b usystematyzowane. Przyk??adowe straty w asortymencie nie s?? na bie????co odnotowywane, co przek??ada si?? na trudno??ci w oszacowaniu aktualnej liczby posiadanych produkt??w, a co za tym idzie do decyzji o mo??liwo??ci realizacji zam??wienia.',
                info3: 'Ponadto, nie istnieje jeden ustandaryzowany spos??b sk??adania zam??wienia, s?? one przyjmowane zar??wno mailowo jak i telefonicznie, a klient ma utrudniony dost??p do przegl??dania produkt??w.',
            },
            improvement: {
                title: 'Wprowadzone  usprawnienia',
                subtitle1: 'Usprawnienie zarz??dzania wypo??yczalni??',
                usersInfo1: 'Nowy system wprowadza podzia?? jego u??ytkownik??w na:',
                usersList: {
                    item1: 'kierownika firmy,',
                    item2: 'kierowc??w,',
                    item3: 'klient??w.'
                },
                usersInfo2: 'Ka??dy z nich ma dost??p do podstawowych funkcjonalno??ci z zakresu zarz??dzania kontem. Ponadto poszczeg??lni u??ytkownicy posiadaj?? nast??puj??ce mo??liwo??ci:',
                user1: 'Kierownik:',
                user1List: {
                    item1: 'zarz??dzanie (dodawanie, przegl??danie, edycja i usuwanie) asortymentem,',
                    item2: 'zarz??dzanie pojazdami,',
                    item3: 'zarz??dzanie pracownikami,',
                    item4: 'przegl??danie z??o??onych zam??wie??,',
                    item5: 'decydowanie o realizacji zam??wienia,',
                    item6: 'przydzielanie kierowc??w i pojazd??w do kurs??w w ramach zam??wienia.'
                },
                user2: 'Kierowca:',
                user2List: {
                    item1: 'przegl??danie swoich kurs??w i edycji ich statusu,',
                    item2: 'przegl??danie z??o??onych zam??wie??.'
                },
                user3: 'Klient:',
                user3List: {
                    item1: 'przegl??danie oferty firmy,',
                    item2: 'sk??adanie nowego zam??wienia,',
                    item3: 'przegl??danie swoich z??o??onych zam??wie??,',
                    item4: 'edycja lub anulowanie zam??wienia, je??li nie zosta??a jeszcze podj??ta decyzja o jego realizacji.'
                },
                usersInfo3: 'Co wi??cej ka??dy internauta odwiedzaj??cy stron?? ma mo??liwo???? za??o??enia konta w systemie.',
                subtitle2: 'Usprawnienie procesu sk??adania zam??wienia',
                orderInfo1: 'System wprowadza jednolity proces sk??adania zam??wienia, sk??adaj??cy si?? z nast??puj??cych etap??w:',
                orderList: {
                    item1: 'wyb??r daty rozpocz??cia i zako??czenia imprezy,',
                    item2: 'okre??lenie miejsca organizacji imprezy,',
                    item3: 'wyb??r asortymentu,',
                    item4: 'okre??lenie czy wymagana jest dostawa.'
                },
                orderInfo2: 'Nast??pnie za wzgl??du na specyfik?? bran??y ka??de zam??wienie jest indywidualnie akceptowane przez kierownika. Po przyj??ciu zam??wienia, je??eli wymagany jest transport na miejsce imprezy, przydzielony zostaje kierowca oraz pojazd do dostarczenia i odebrania sprz??tu.'
            }
        },
        planszappka: {
            about: 'Badania UX i prototyp aplikacji mobilnej zrzeszaj??cej osoby graj??ce w gry planszowe.',
            heading: {
                title: 'PlanszAppka',
                subject: 'UX/UI Design',
                figma: 'Projekt w Figmie dost??pny ',
                link: 'tutaj'
            },
            basicInfo: {
                roleHeading: 'Rola',
                roleInfo1: 'G??owny UX Designer,',
                roleInfo2: 'Jedyny UI Designer',
                timelineHeading: 'Czas',
                timelineInfo1: '2 miesi??ce',
                timelineInfo2: 'pa??dziernik - grudzie?? 2021',
                platformHeading: 'Platforma',
                platformInfo: 'Mobile',
                toolsHeading: 'Narz??dzia',
                toolsInfo: 'Figma, kartka+d??ugopis, wywiady 1:1'
            },
            background: {
                title: 'Kontekst',
                info: 'Projekt zosta?? wykonany w ramach kursu zwi??zanego z UX na ostatnim semestrze studi??w informatycznych. Ka??da z os??b w zespole mia??a zastanowi?? si?? nad jakim?? problemem lub potrzeb?? do zaspokojenia, kt??re zauwa??a w swoim ??rodowisku. Nast??pnie pomys??y by??y omawiane w zespole i wsp??lnie podejmowali??my decyzj??, kt??rego problemu b??dzie dotyczy?? projekt.'
            },
            problem: {
                title: 'Problem',
                info: 'Jako zesp???? zdecydowali??my si?? rozwi??za?? problem szukania kompan??w do gry wyst??puj??cy w grupie os??b graj??cych w gry planszowe, aby w prosty spos??b mog??y znale???? innych graczy i zawrze?? znajomo??ci z osobami o wsp??lnych zainteresowaniach. '
            },
            goal: {
                title: 'Cel',
                info: 'Stworzenie projektu aplikacji mobilnej, kt??ra zjednoczy osoby graj??ce w gry planszowe i pozwoli im w prosty spos??b znale???? kompan??w do gry, aby umo??liwi?? rozgrywk??.'
            },
            targetAudience: {
                title: 'Grupa odbiorc??w',
                info1: 'Grupa odbiorc??w to gracze gier planszowych. S?? to osoby w ka??dym wieku, lecz wi??kszy problem ze znalezieniem kompan??w do gry wyst??puje u os??b starszych, kt??re zako??czy??y ju?? edukacj?? i trudno znale???? im graczy w??r??d znajomych. Dodatkowo niekt??re z gier wymagaj?? du??ej liczby uczestnik??w oraz po??wi??cenia sporej ilo??ci czasu, co jeszcze bardziej utrudnia zadanie.',
                info2: 'S?? to zazwyczaj osoby kreatywne, z dobrze rozwini??ta wyobra??ni??, ch??ci?? nawi??zania nowych znajomo??ci. Lubi?? zdrow?? rywalizacj??, ale tak??e wsp????prac?? z innymi graczami. Potencjalni u??ytkownicy mierz?? si?? z opisywanym problemem g????wnie w czasie wolnym, kiedy szukaj?? plan??w na mi??e sp??dzenie dnia.'
            },
            interviews: {
                title: 'Wywiady pog????bione',
                questions: 'Przeprowadzili??my wywiady z 10 potencjalnymi u??ytkownikami aplikacji, aby zebra?? informacje o ich zachowaniach w sytuacji problemu, kt??ry chcieli??my rozwi??za??. Przygotowali??my list?? pyta?? dla naszych rozm??wc??w:',
                questionsList: {
                    item1: 'Czy i jak cz??sto grasz w gry planszowe?',
                    item2: 'Ile gier planszowych posiadasz?',
                    item3: 'Gdzie i przy jakiej okazji zazwyczaj grasz w gry planszowe?',
                    item4: 'Masz znajomych, z kt??rymi mo??esz zagra??? Jak to si?? dzieje ??e masz z kim gra???',
                    item5: 'W ile os??b zazwyczaj grasz, jak d??ugo?',
                    item6: 'Ile partii rozgrywacie?',
                    item7: 'Czy zdarzy??o si??, ??e nie mia??e?? wystarczaj??cej liczby os??b potrzebnej do rozegrania gry?',
                    item8: 'Czy chcia??e?? kiedy?? zagra?? w gr??, kt??rej nie mia??e??, ale nie chcia??e?? jej jeszcze kupowa???',
                    item9: 'Co robisz, kiedy chcesz zagra??, ale nie masz z kim?'
                },
                conclusions: 'Na podstawie wywiad??w wyci??gn??li??my nast??puj??ce wnioski:',
                conclusionsList: {
                    item1: 'Znaczna wi??kszo???? os??b chcia??a kiedy?? zagra?? w gr?? planszow??, kt??rej nie mia??a - decydowa??a si?? na jej wypo??yczenie lub gra??a u kogo??, kto j?? posiada??.',
                    item2: 'Osoby nie maj??ce z kim zagra??, si??gaj?? do medi??w spo??eczno??ciowych w poszukiwaniu innych graczy, wybieraj?? inn?? gr?? lub po prostu odpuszczaj??.',
                    item3: 'Oko??o po??owie ankietowanych brakuje os??b do gry, zazwyczaj dotyczy to os??b graj??cych w 3-4 osoby u znajomych.',
                    item4: 'Ludzie dziel?? si?? na tych kt??rzy graj?? cz??sto (ok. 2 razy w tygodniu) i rzadko (par?? razy do roku).',
                    item5: 'Zazwyczaj osoby maj?? po 3-6 gier planszowych w domu.',
                    item6: 'Ankietowani graj?? zazwyczaj w 3-5 os??b po ok. 3-4h.',
                    item7: 'Zale??nie od czasu rozgrywki, osoby decyduj?? si?? na r????n?? liczb?? partii.'
                }
            },
            personas: {
                title: 'Persony',
                info: 'Na podstawie pozyskanych informacji byli??my w stanie przygotowa?? dwie persony, prezentuj??ce cechy naszych u??ytkownik??w. Poznaj Natali?? i Leopolda! :)',
                personaImgPath1: 'persona-natalia-pl.png',
                personaImgPath2: 'persona-leopold-pl.png'
            },
            userStories: {
                title: 'Historyjki u??ytkownika',
                info: 'Przygotowali??my kluczowe dla naszego projektu historyjki u??ytkownika:',
                userStoriesList: {
                    item1: 'Jako u??ytkownik, chc?? mie?? mo??liwo???? znalezienia os??b posiadaj??cych gry, kt??re mnie interesuj??, aby zagra?? w gry, kt??rych nie posiadam.',
                    item2: 'Jako u??ytkownik, chc?? znale???? osoby ch??tne do gry, aby osi??gn???? liczb?? graczy wymagan?? do rozegrania partii.',
                    item3: 'Jako u??ytkownik, chc?? pozna?? osoby o podobnych zainteresowaniach, aby mie?? z kim zagra?? w przysz??o??ci.',
                    item4: 'Jako u??ytkownik, chc?? mie?? mo??liwo???? komunikacji z innymi u??ytkownikami, aby uzgadnia?? szczeg????y spotka??.',
                    item5: 'Jako u??ytkownik, chc?? mie?? mo??liwo???? przegl??dania gier, kt??re s?? rozgrywane w pobli??u, aby m??c pozna?? nowe gry.',
                    item6: 'Jako u??ytkownik, chc?? mie?? mo??liwo???? dodawania innych do znajomych, aby mie?? ??atwiejszy wgl??d w ich aktywno????.',
                    item7: 'Jako w??a??ciciel wypo??yczalni gier planszowych, chc?? mie?? mo??liwo???? reklamowania swoich us??ug, aby zwi??kszy?? doch??d swojej wypo??yczalni.'
                }
            },
            wireframes: {
                title: 'Wireframe\'y',
                info: 'Maj??c ju?? pocz??tkowy zamys?? aplikacji przyst??pili??my do papierowego prototypowania. Poni??ej przedstawiam moje szkice:'
            },
            ui: {
                title: 'UI Design',
                typography: {
                    title: 'Typografia',
                    headings: {
                        title: 'Nag????wki',
                        heading1: 'Nag????wek 1 (26)',
                        heading2: 'Nag????wek 2 (20)',
                        heading3: 'Nag????wek 3 (18)',
                        heading4: 'Nag????wek 4 (18)'
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
                title: 'Badania u??yteczno??ci #1',
                info: 'Po sporz??dzeniu pierwszej wersji prototypu aplikacji w Figmie przygotowali??my scenariusz bada??, kt??re przeprowadzali??my z potencjalnymi u??ytkownikami. Testy wykonywane by??y zdalnie z wykorzystaniem udost??pniania ekranu, wi??c obserwowali??my wszystkie kolejne dzia??ania os??b bior??cych udzia?? w testach. Zach??cali??my ich tak??e do komentowania tego, co chc?? zrobi??, aby pozna?? ich tok my??lenia.',
                scenarios: 'Scenariusz sk??ada?? si?? z nast??puj??cych zada?? badawczych:',
                scenario1: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Wyobra?? sobie, ??e mieszkasz na Tarnogaju we Wroc??awiu. Jest pi??tkowy wiecz??r, a Ty nadal nie masz na niego plan??w. Ostatnio us??ysza??e??(-a??) o grze planszowej ???Avalon??? i bardzo Ci?? zainteresowa??a. Nie chcesz od razu kupowa?? gry, p??ki jej nie przetestujesz, ale niestety ??aden ze znajomych jej nie ma. Nie masz problemu z poznaniem nowych ludzi, z kt??rymi m??g??by??/mog??aby?? zagra??, ale najch??tniej nie przemieszcza??(a)by?? si?? za daleko od miejsca zamieszkania.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Do????cz do rozgrywki w gr?? ???Avalon???, kt??ra rozgrywana jest najbli??ej Ciebie.'
                },
                scenario2: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Kupi??e??(-a??) ostatnio gr?? planszow?? ???Avalon???, ale brakuje Ci 4 os??b do gry. Niestety nie masz znajomych zainteresowanych rozgrywk??.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Utw??rz og??oszenie, w kt??rym dat?? i godzin?? okre??lisz dopiero po znalezieniu wszystkich graczy i ustaleniu terminu.'
                },
                scenario3: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Us??ysza??e??(-a??) od znajomego, ??e istniej?? wypo??yczalnie gier planszowych. Jeste?? ciekaw, czy s?? one dost??pne tak??e w Twoim mie??cie.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Dowiedz si?? czy w Twoim mie??cie znajduj?? si?? wypo??yczalnie gier planszowych. Je??li tak, to sprawd?? ich lokalizacj??.'
                },
                conclusions: 'Na podstawie przeprowadzonych test??w wyci??gn??li??my nast??puj??ce wnioski:',
                conclusionsList: {
                    item1: 'Nikt nie mia?? problem??w z zadaniem, spora cz?????? os??b chcia??a u??y?? filtr??w. Niestety w prototypie nie s?? one w pe??ni obs??ugiwane, ale to znak, ??e w dzia??aj??cej aplikacji nie mieliby problem??w ze znalezieniem og??oszenia. Pojawili si?? zwolennicy zar??wno widoku mapki jak i listy ??? ka??dy znalaz??aby co?? dla siebie.',
                    item2: 'Osoby testuj??ce prototyp bardzo dobrze poradzi??y sobie z tym zadaniem, podoba?? im si?? dob??r p??l w formularzu podczas tworzenia og??oszenia (np. wiek graczy). Dla jednej z os??b checkbox wydawa?? si?? nieco ma??y, mia??a lekkie problemy z klikni??ciem ??? zosta??o to p????niej poprawione.',
                    item3: 'Nie byli??my pewni czy umieszczenie wypo??yczalni w zak??adce ???Gry??? b??dzie w pe??ni intuicyjne, ale wi??kszo???? poradzi??a sobie z zadaniem, m??wi??c, ??e ta zak??adka pasuje najbardziej. Par?? os??b pr??bowa??o pocz??tkowo w zak??adce ???Szukaj??? z menu nawigacyjnego, jednak w nim na g??rze znajduje si?? du??y nag????wek ???Wyszukiwanie rozgrywki???, kt??ry od razu sugerowa??, ??e nie znajd?? tu tego, czego szukaj??, a drugim wyborem by??a w??a??nie zak??adka ???Gry???.'
                },
                survey: {
                    info: 'Przygotowali??my te?? kr??tk?? ankiet?? potestow??:',
                    question1: {
                        questionHeading: 'Pytanie:',
                        questionInfo: 'Jak oceni??(a)by?? intuicyjno???? aplikacji?',
                        conclusionHeading: 'Wnioski:',
                        conclusionInfo: 'Osoby w zdecydowanej wi??kszo??ci oceni??y aplikacj?? na bardzo intuicyjn??, dostosowan?? do znanych standard??w. Jedna osoba powiedzia??a, ??e ikonki liczby graczy oraz liczby znajomych w rozgrywce mog?? by?? lekko nieintuicyjne, ale jest to jedynie widok kafelka z og??oszeniem, gdzie musi by?? ono opisane skr??towo. Po wej??ciu w szczeg????y og??oszenia wszystko jest wyja??nione s??ownie. Uznali??my, ??e nie b??dziemy wprowadza?? tu zmian, po kr??tkim u??ytkowaniu aplikacji u??ytkownicy powinni z ??atwo??ci?? nauczy?? si?? przyj??tych oznacze??.'
                    },
                    question2: {
                        questionHeading: 'Pytanie:',
                        questionInfo: 'Czy podpisy w menu nawigacyjnym s?? jednoznaczne?',
                        conclusionHeading: 'Wnioski:',
                        conclusionInfo: 'U??ytkownicy docenili, ??e s?? ikonki posiadaj?? podpisy, co zwi??ksza intuicyjno????. U paru os??b pojawi??a si?? na pierwszy rzut oka niepewno???? co kryje si?? w zak??adce ???Gry??? ??? przy tworzeniu projektu nazwanie jej r??wnie?? sprawi??o nam najwi??cej problem??w, niestety nie ma miejsca na wi??cej zak??adek w menu i wydzielenie cz????ci zawarto??ci, wi??c ta nazwa wydaje si?? by?? najlepsz?? z mo??liwych.'
                    },
                    question3: {
                        questionHeading: 'Pytanie:',
                        questionInfo: 'Czy poruszanie si?? po aplikacji sprawi??o Ci jaki?? k??opot? Je??li tak to jaki i jak inaczej by?? go rozwi??za??(a)?',
                        conclusionHeading: 'Wnioski:',
                        conclusionInfo: 'Nie by??o problem??w z nawigacj?? po aplikacji, jedynie wspomniana wcze??niej drobna niepewno???? przy szukaniu wypo??yczalni gier.'
                    }
                }
            },
            heuristics: {
                title: 'Heurystyki Nielsena',
                info: 'Po pierwszych testach przejrzeli??my dok??adnie wszystkie ekrany aplikacji pod k??tem zgodno??ci z heurystykami Nielsena. Natkn??li??my si?? na kilka niedoci??gni???? i brak??w, kt??re nast??pnie nanios??am do projektu w Figmie. W aplikacji pojawi??y si?? nowe mo??liwo??ci:',
                fixList: {
                    fix1: 'dodawanie i usuwanie posiadanych gier i gier z wishlisty,',
                    fix2: 'wyszukanie og??osze?? dotycz??cych tylko gier z wishlisty,',
                    fix3: 'wyszukiwanie g??osowe,',
                    fix4: 'wyszukiwanie og??osze?? z przegl??dan?? gr??,',
                    fix5: 'wyb??r motywu,',
                    fix6: 'zapraszanie u??ytkownika do znajomych z poziomu jego profilu,',
                    fix7: 'usuwanie powiadomie??,',
                    fix8: 'w przypadku zwr??cenia braku wynik??w przy wyszukiwaniu, wy??wietlenie informacji o braku wynik??w i zasugerowanie zmiany kryteri??w,',
                    fix9: 'zg??aszanie b????d??w,',
                    fix10: 'samouczek do aplikacji (w projekcie mo??liwo???? w????czenia opcji samouczka przy uruchomieniu).'
                }
            },
            tests2: {
                title: 'Badania u??yteczno??ci #2',
                info1: 'Po zmianach przeprowadzili??my ponowne badania u??yteczno??ci na innej grupie os??b. Powt??rzyli??my zadania badawcze z poprzednich test??w ??? wnioski by??y bardzo zbli??one i dodatkowo tym razem nikt nie zwr??ci?? uwagi, aby kt??ry?? z element??w by?? zbyt ma??y. Poza istniej??cymi zadaniami dodali??my nowe:',
                scenario4: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Znajoma poleci??a Ci przedstawian?? przez nas aplikacj??. Dodali??cie si?? ju?? do znajomych, jej nick to ???natalka25???. Zastanawiasz si?? czy bra??a ostatnio udzia?? w jakiej?? grze planszowej.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Sprawd?? ostatni?? aktywno????/dzia??ania swojej znajomej o nicku ???natalka25???. ',
                    conclusionHeading: 'Wnioski:',
                    conclusionInfo: 'Zadanie nie sprawi??o nikomu ??adnych k??opot??w, cho?? uk??adaj??c je zak??adali??my inny spos??b rozwi??zania. Mieli??my na my??li wej??cie kolejno Znajomi -> Aktywno????, ale jak s??usznie wiele os??b zauwa??y??o z zak??adki znajomi mo??na przej???? na profil u??ytkownika i sprawdzi?? jego ostatnie rozgrywki.'
                },
                info2: 'W zwi??zku z tym zdecydowali??my si?? doda?? jeszcze jedno zbli??one zadanie, ale lepiej oddaj??ce to, co pocz??tkowo mieli??my na my??li. Badaniu poddali??my nowe osoby.',
                scenario5: {
                    contextHeading: 'Opis kontekstu:',
                    contextInfo: 'Kilku znajomych poleci??o Ci przedstawian?? przez nas aplikacj??. Zainstalowa??e??(-a??) aplikacj?? i dodali??cie si?? do znajomych. Zastanawiasz si?? jakie by??y ostatnie dzia??ania Twoich znajomych w aplikacji.',
                    taskHeading: 'Zadanie:',
                    taskInfo: 'Sprawd?? ostatnie dzia??ania swoich znajomych w aplikacji (kto i co zrobi??).',
                    conclusionHeading: 'Wnioski:',
                    conclusionInfo: 'Tym razem opis kontekstu i zadanie by??y sformu??owane w taki spos??b, ??e badani u??ytkownicy zrozumieli nasze intencje i bez problemu od razu zauwa??yli zak??adk?? ???Aktywno???????, na kt??rej znajduje si?? ostatnia aktywno???? wszystkich znajomych.'
                },
            },
            survey: {
                title: 'Ankieta',
                info1: 'Podczas prezentacji projektu na zaj??ciach zasugerowano nam skupi?? si?? na wygl??dzie pojedynczego kafelka prezentuj??cego najwa??niejsze informacje o konkretnej rozgrywce. Postanowili??my wi??c przeprowadzi?? ankiet??, aby dowiedzie?? si??, jaka forma prezentacji informacji jest dla u??ytkownik??w najbardziej przyjazna. Poni??ej przedstawiono przygotowane pytania wraz z wynikami przeprowadzonej na 16 osobach ankiety.',
                questions: {
                    question1: 'Na kt??ry element og??oszenia zwracasz szczeg??ln?? uwag???',
                    question2: 'Kt??ra forma jest w Twoim odczuciu bardziej przyjazna?',
                    question3: 'Kt??ra forma jest w Twoim odczuciu bardziej przyjazna?',
                    question4: 'Kt??ra forma jest w Twoim odczuciu bardziej przyjazna?',
                    question5: 'Czy uwa??asz, ??e ka??de og??oszenie powinno dodatkowo posiada?? tytu?? (tworzony przez autora), czy podane informacje s?? wystarczaj??ce?',
                    question6: 'Czy chcia??(a)by?? mie?? mozliwo???? dostosowania wygl??du kafelka og??oszenia (kwestie poruszane w poprzednich pytaniach)?',
                },
                charts: {
                    options1: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["nazwa gry planszowej", "czas rozgrywki", "miejsce rozgrywki", "wszystko r??wnie wa??ne"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options2: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["Wroc??aw, Tarnogaj", "<1km od Ciebie (ta informacja znajduje si?? r??wnie?? w szczeg????ach og??oszenia)"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options3: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["05.11.2012 18:00", "jutro/pojutrze/za 3 dni o 18:00", "jutro/pojutrze/we wtorek o 18:00"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options4: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["4/6 u??ytkownik??w do????czy??o do rozgrywki", "2 wolne miejsca"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options5: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["lepiej z tytu??em", "lepiej bez"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`,
                    options6: `{'{'}
                        "colors": [ "#AA4465", "#303633", "#F18F01", "#EDF0DA"],
                        "chart": {'{'}
                            "type": "pie"
                        {'}'},
                        "legend": {'{'}
                            "position": "bottom"
                        {'}'},
                        "labels": ["tak", "nie"],
                        "responsive": [{'{'}
                            "breakpoint": 992,
                            "options": {'{'}
                                "chart": {'{'}
                                    "height": 400
                                {'}'}
                            {'}'}
                        {'}'}]
                    {'}'}`
                },
                info2: 'Wyniki ankiety pokry??y si?? z pocz??tkowymi za??o??eniami dotycz??cymi wygl??du kafelka og??oszenia, ale ze wzgl??du na niekt??re odmienne g??osy i przewa??aj??c?? aprobat?? co do mo??liwo??ci edycji wygl??du kafelka, stwierdzili??my, ??e nale??a??oby doda?? tak?? opcj?? w ustawieniach aplikacji.',
                figma1: 'A teraz, je??li jeszcze tego nie zrobi??e??, obejrzyj projekt w Figmie ',
                link: 'tutaj',
                figma2: ' :)'
            },
            learnings: {
                title: 'Zdobyte do??wiadczenia',
                info: 'By?? to m??j pierwszy projekt ??ci??le zwi??zany z UX, realizowany pod okiem specjalisty w tej dziedzinie. Mia??am okazj?? przej???? przez proces projektowania zorientowanego na u??ytkownika i przekona?? si??, ??e jest to co??, z czym chc?? wi??za?? przysz??o???? i rozwija?? si?? w tej dziedzinie. Podchodz??c ponownie do tego zadania na pewno pog????bi??abym wiedz?? i zawar??a wi??cej element??w niezb??dnych podczas takiego projektowania. Jednak musz?? przyzna??, ??e by??a to dla mnie dobra wprowadzaj??ca lekcja.'
            }
        },

        wellbeeing: {
            about: 'Serwis internetowy umo??liwiaj??cy zadbanie o swoje zdrowie.',
            heading: {
                title: 'WellBeeing',
                subject: 'Web Development',
                code: 'Kod dost??pny ',
                link: 'tutaj'
            },
            basicInfo: {
                roleHeading: 'Rola',
                roleInfo1: 'Fullstack Developer,',
                roleInfo2: 'Analityk Biznesowy',
                timelineHeading: 'Czas',
                timelineInfo1: '2 miesi??ce',
                timelineInfo2: 'pa??dziernik - grudzie?? 2021',
                platformHeading: 'Platforma',
                platformInfo: 'Web',
                toolsHeading: 'Technologie i narz??dzia',
                toolsInfo: 'Spring Boot, Vue.js, PostgreSQL, Adobe XD'
            },
            overview: {
                title: 'Og??lny zarys',
                info1: 'WellBeeing to serwis webowy pozwalaj??cy jego u??ytkownikom na zadbanie o swoje zdrowie, zbilansowan?? diet?? i dostarczenie odpowiedniej ilo??ci ruchu. Zrealizowany zosta?? w 4-osobowym zespole, gdzie ka??da z os??b by??a odpowiedzialna za jeden z modu????w:',
                modulesList: {
                    item1: 'spo??eczno??ciowy,',
                    item2: 'dietetyczny,',
                    item3: 'sportowy,',
                    item4: 'telemedyczny.'
                },
                info2: 'Jest to projekt, na podstawie kt??rego napisa??am swoj?? prac?? in??yniersk??. Moj?? rol?? by??o stworzenie modu??u spo??eczno??ciowego, kt??rego zadaniem jest szerzenie si?? spo??eczno??ci i zapewnienie mo??liwo??ci dzielenia si?? istotnymi tre??ciami w ramach ca??ego systemu. Powinien on pozwala?? na wzajemn?? motywacj?? w d????eniu do celu i spaja?? ca??y serwis, sprawiaj??c, ??e ten staje si?? bardziej atrakcyjny dla u??ytkownika.'
            },
            problem: {
                title: 'Rozpoznanie problemu',
                info1: 'Media spo??eczno??ciowe ju?? od jakiego?? czasu prze??ywaj?? sw??j okres ??wietno??ci. Przeprowadzone w 2021 roku badania dowodz??, ??e korzystaj?? z nich ponad 4 miliardy ludzi, co w przeliczeniu daje nieco ponad po??ow?? ludno??ci ca??ego ??wiata. Co wi??cej - w przeci??gu ostatnich 5 lat liczba ta wzros??a niemal dwukrotnie. Niew??tpliwie wielki wp??yw ma na to okres pandemii, podczas kt??rej konieczne sta??o si?? zast??pienie bezpo??rednich kontakt??w z innymi osobami.',
                info2: 'Ka??dy korzysta z medi??w spo??eczno??ciowych w okre??lonym celu. Zdecydowanie najwi??ksz?? grup?? tworzy potrzeba pozostania w kontakcie z bliskimi. Wykorzystywane s?? one jednak r??wnie?? do pozyskiwania informacji ze ??wiata, ??ledzenia popularnych temat??w i os??b czy po prostu zrelaksowania si?? w wolnym czasie. Przeci??tny u??ytkownik po??wi??ca ??rednio 2,5h ka??dego dnia na korzystanie z medi??w spo??eczno??ciowych.',
                info3: 'Pojawia si?? jednak pewne ryzyko po??wi??cania im zbyt du??ej ilo??ci czasu oraz zaniedbywania wa??nych aspekt??w ??ycia, w tym szczeg??lnie tych zdrowotnych. Korzystanie z medi??w spo??eczno??ciowych wymaga czasu sp??dzonego przed ekranem komputera czy telefonu, co znacz??co potrafi wp??yn???? na ilo???? ruchu cz??owieka w ci??gu dnia. Brak czasu dodatkowo mo??e si?? prze??o??y?? na ??le zbilansowan?? diet??, a co za tym idzie problemy ze zdrowiem. Nadwaga i oty??o???? s?? cz??stymi skutkami takiego stylu ??ycia, kt??rych w wielu przypadkach mo??na unikn????. Wed??ug bada?? przeprowadzonych w 2016 roku 39% populacji zmaga??o si?? z nadwag??, a 13% z oty??o??ci??. Rezultaty te s?? niemal trzykrotnie wi??ksze ni?? 40 lat wcze??niej.',
                info4: 'Maj??c na uwadze ci??gle rosn??c?? popularno???? medi??w spo??eczno??ciowych oraz problemy zdrowotne ludzko??ci, warto wykorzysta?? oba fakty. Spora cz?????? ludzi nie wyobra??a ju?? sobie ??ycia bez Internetu, wi??c nale??y robi?? wszystko, aby skorzysta?? z jego zalet.',
            },
            idea: {
                title: 'Idea projektu',
                info1: 'Uwzgl??dniaj??c si????, z jak?? media spo??eczno??ciowe przyci??gaj?? t??umy, mo??na pos??u??y?? si?? nimi do zainteresowania u??ytkownika wi??kszym systemem, kt??rego celem jest zwr??cenie uwagi na fundamentalny aspekt ludzkiego ??ycia, jakim jest zdrowie. Ca??y system mia??by umo??liwia?? tworzenie spersonalizowanych plan??w treningowych i ??ywieniowych oraz analiz?? efekt??w, jakie przynosz??. Ponadto pozwala??by na interpretacj?? swoich parametr??w zdrowotnych. W celu zapewnienia jak najlepszej jako??ci, odbywa??oby si?? to pod okiem zaufanych specjalist??w.',
                info2: 'Modu?? spo??eczno??ciowy odegra??by istotn?? rol?? w ca??ym systemie. Powinien on by?? cz????ci?? spajaj??c?? ca???? aplikacj??, jej aspektem promocyjnym. Utrzymanie kontakt??w mi??dzyludzkich i motywacja s?? bardzo wa??ne dla ka??dego cz??owieka. Dzielenie si?? wa??nymi, zweryfikowanymi tre??ciami pozwala szerzy?? informacje, kt??re mog?? przyda?? si?? wielu innym u??ytkownikom. Dodatkowo, cz??owiek, kt??ry wie, ??e jest wspierany przez innych, z du??o wi??kszym prawdopodobie??stwem jest w stanie osi??gn???? sw??j cel. Zasi??gni??cie opinii od osoby dobrze zaznajomionej z tematem mo??e okaza?? si?? bardzo cenne.'
            },
            actors: {
                title: 'Aktorzy',
                info: 'System wyr????nia nast??puj??cych aktor??w:',
                imgPath: 'actors-pl.png',
                usersList: {
                    item1: 'Podstawowy u??ytkownik - ka??dy zarejestrowany u??ytkownik serwisu, ma dost??p do wszystkich podstawowych funkcjonalno??ci systemu;',
                    item2: 'Administrator - zarz??dza mechanizmem nadawania r??l w ramach systemu;',
                    item3: 'Specjalista - aktor abstrakcyjny, rozszerza funkcjonalno??ci Podstawowego u??ytkownika i posiada wsp??lne cechy Dietetyka, Trenera oraz Lekarza. Pozosta??e modu??y w wi??kszym stopniu skupiaj?? si?? na poszerzeniu jego mo??liwo??ci, w ramach modu??u spo??eczno??ciowego jest on dodatkowo zdolny do przegl??dania profili u??ytkownik??w, kt??rzy go obserwuj??.',
                }
            },
            userStories: {
                title: 'Historyjki u??ytkownika',
                info: 'Po rozpoznaniu problemu projektu i wydzieleniu aktor??w, stworzy??am nast??puj??ce historyjki u??ytkownika:',
                basicUser: 'Wymagania Podstawowego u??ytkownika:',
                basicUserList: {
                    item1: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? poznania tematyki serwisu, aby dowiedzie?? si?? czy jestem zainteresowany korzystaniem z niego.',
                    item2: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? do????czenia do serwisu, aby mie?? mo??liwo???? korzystania z tego, co oferuje.',
                    item3: 'Jako Podstawowy u??ytkownik chc?? mie?? zagwarantowan?? prywatno???? podczas korzystania z serwisu, aby moje dane by??y bezpieczne.',
                    item4: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? poszerzenia swoich kompetencji, aby m??c pomaga?? innym u??ytkownikom.',
                    item5: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? poznawania informacji o innych u??ytkownikach, aby m??c lepiej ich pozna??.',
                    item6: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? zapoznawania si?? z tre??ciami udost??pnianymi przez u??ytkownik??w, aby poszerza?? swoj?? wiedz??.',
                    item7: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? wchodzenia w interakcje z tre??ciami udost??pnianymi przez u??ytkownik??w, aby wyrazi?? swoje zdanie i podj???? dyskusj??.',
                    item8: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? publikowania swoich tre??ci, aby m??c zainteresowa?? nimi innych u??ytkownik??w.',
                    item9: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? odnajdowania innych u??ytkownik??w systemu, aby pozna?? interesuj??ce mnie osoby.',
                    item10: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? ??ledzenia aktywno??ci znajomych mi os??b, aby by?? na bie????co z publikowanymi przez nich tre??ciami.',
                    item11: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? ??ledzenia aktywno??ci specjalist??w, aby stale poszerza?? swoja wiedz?? o nowe, rzetelne informacje.',
                    item12: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? oceny kwalifikacji specjalisty, aby innym ??atwiej by??o podj???? decyzj?? o potencjalnej wsp????pracy.',
                    item13: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? zarz??dzania danymi swojego profilu, aby by??y zawsze aktualne.',
                    item14: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? przegl??dania interesuj??cych mnie tre??ci, aby korzystanie z serwisu by??o dla mnie atrakcyjne i edukacyjne.',
                    item15: 'Jako Podstawowy u??ytkownik chc?? mie?? mo??liwo???? prywatnego kontaktu z innymi u??ytkownikami, aby mie?? zagwarantowan?? swobod?? wypowiedzi.',
                },
                admin: 'Wymagania Administratora:',
                adminList: {
                    item1: 'Jako Administrator chc?? mie?? zagwarantowany oddzielny spos??b dostania si?? do serwisu, aby nie by?? on dost??pny dla wszystkich u??ytkownik??w systemu.',
                    item2: 'Jako Administrator chc?? mie?? mo??liwo???? decydowania o nadawaniu r??l u??ytkownikom, aby mie?? kontrol?? nad ich kompetencjami.',
                },
                specialist: 'Wymagania Specjalisty:',
                specialistList: {
                    item1: 'Jako Specjalista chc?? mie?? mo??liwo???? poznania swoich odbiorc??w, aby dowiedzie?? si??, kto ??ledzi moj?? aktywno????.'
                }
            },
            useCases: {
                title: 'Przypadki u??ycia',
                info: 'Aby sprosta?? wymaganiom u??ytkownik??w, w ramach modu??u spo??eczno??ciowego zrealizowa??am nast??puj??ce przypadki u??ycia:',
                basicUserNotLogged: 'Dla Niezalogowanego u??ytkownika:',
                basicUserNotLoggedList: {
                    item1: 'przegl??danie strony startowej,',
                    item2: 'rejestracja w systemie, ',
                    item3: 'logowanie do systemu.'
                },
                basicUser: 'Dla Podstawowego u??ytkownika:',
                basicUserList: {
                    item1: 'przegl??danie profilu u??ytkownika,',
                    item2: 'przegl??danie post??w,',
                    item3: 'zarz??dzanie swoimi postami (dodawanie, przegl??danie, edycja, usuwanie),',
                    item4: 'reagowanie na posty (polubienia),',
                    item5: 'przegl??danie listy polubie?? posta,',
                    item6: 'przegl??danie komentarzy dotycz??cych posta,',
                    item7: 'zarz??dzanie swoimi komentarzami,',
                    item8: 'udost??pnianie posta,',
                    item9: 'udost??pnienie planu treningowego,',
                    item10: 'udost??pnienie planu ??ywieniowego,',
                    item11: 'wyszukiwanie innych u??ytkownik??w,',
                    item12: 'zarz??dzanie zaproszeniami do znajomych,',
                    item13: 'zarz??dzanie swoj?? list?? znajomych,',
                    item14: 'zarz??dzanie swoj?? list?? obserwowanych specjalist??w,',
                    item15: 'przegl??danie opinii specjalisty,',
                    item16: 'zarz??dzanie wystawionymi przez siebie opiniami,',
                    item17: 'edycja swojego profilu u??ytkownika,',
                    item18: 'przegl??danie tablicy aktywno??ci,',
                    item19: 'przegl??danie swoich konwersacji,',
                    item20: 'wysy??anie nowej wiadomo??ci,',
                    item21: 'zarz??dzanie swoimi pro??bami o nadanie roli specjalisty,',
                    item22: 'za????czanie dowodu posiadania kwalifikacji,',
                    item23: 'wylogowanie z systemu. '
                },
                adminNotLogged: 'Dla Niezalogowanego Administratora:',
                adminNotLoggedList: {
                    item1: 'logowanie do panelu administratora.'
                },
                admin: 'Dla Administratora:',
                adminList: {
                    item1: 'zarz??dzanie pro??bami u??ytkownik??w o nadanie roli specjalisty,',
                    item2: 'wylogowanie z panelu administratora.'
                },
                specialist: 'Dla Specjalisty:',
                specialistList: {
                    item1: 'przegl??danie listy obserwuj??cych.'
                }
            },
            prototypes: {
                title: 'Prototypy i rezultaty ko??cowe',
                info: 'Poni??ej prezentuj?? wybrane ekrany na poziomie prototypu w Adobe XD oraz odpowiadaj??cych zaimplementowanych wersji:',
                home: 'STRONA G????WNA',
                profile: 'WIDOK PROFILU',
                opinions: 'OPINIE SPECJALISTY',
                friends: 'LISTA ZNAJOMYCH',
                roleRequests: 'PANEL PR????B O NADANIE ROLI SPECJALISTY'
            },
            learnings: {
                title: 'Zdobyte do??wiadczenia',
                info: 'By?? to m??j pierwszy projekt realizowany w grupie wi??kszej ni?? dwie osoby i zdecydowanie najwi??kszy. Pokaza?? mi jak wa??na jest systematyczno???? przy kr??tkim terminie ko??cowym i wielu funkcjonalno??ciach do zrealizowania. Mia??am r??wnie?? okazj?? przekona?? si??, ??e wypracowanie pewnych zasad wsp????pracy przy wi??kszych projektach jest bardzo istotne.'
            }
        }
    }
}



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
    },
    plugins: [createPersistedState()]
})

const i18n = createI18n({
    locale: store.getters.getLanguage,
    // fallbackLocale: 'en',
    messages
})

const app = createApp(App).use(router);

app.use(store)
app.use(i18n)
app.use(AOS.init());
app.use(VueApexCharts);
app.use(VueEasyLightbox)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
