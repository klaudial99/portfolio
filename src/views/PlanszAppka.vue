<template>
    <div class="container-fluid px-0">
        <section id="planszappka-header">
            <div class="row py-4 w-100">
                <div class="col-12 col-sm-7 my-4 my-sm-0 text-white d-flex justify-content-center align-items-center">
                    <div class="text-start px-3">
                        <span class="project-title">PlanszAppka</span>
                        <span class="project-subject text-center text-sm-start">UX/UI Design</span>
                        <span class="mt-2 figma-heading text-center text-sm-start">Check out <a href="https://www.figma.com/proto/53UYySDn8CZLFmW2c6LoLL/Untitled?node-id=0%3A1" class="fw-bolder figma-heading-link">Figma Project</a></span>
                    </div>

                </div>
                <div class="col-12 col-sm-5 my-4 my-sm-0">
                    <img id="main-photo" src="@/assets/planszappka/main.png" alt="main-photo"/>
                </div>
            </div>
        </section>

        <div class="row section-row">
            <div class="col-10 col-md-9">

                <section id="planszappka-basic-info" class="mt-5">
                    <div class="row w-100 m-0">
                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Role</span>
                            <span>Main UX Designer,</span>
                            <span>Only UI Designer</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Timeline</span>
                            <span>2 months</span>
                            <span>Oct - Dec 2021</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Platform</span>
                            <span>Mobile</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Tools</span>
                            <span>Figma, Pen+Paper, 1:1 Interview</span>
                        </div>
                    </div>
                </section>

                <section id="planszappka-background" class="mt-5">
                    <span class="project-subtitle">Background</span>
                    <p class="project-text">The project has been done as part of a UX course in the final semester of my IT studies. Each person on the team was asked to think of a problem or need that they notice in their environment. Then the ideas were discussed as a team and together we decided which problem would the project concern.</p>
                </section>

                <section id="planszappka-problem" class="mt-5">
                    <span class="project-subtitle">Problem</span>
                    <p class="project-text">As a team, we have decided to solve the problem of finding gaming companions concerning people who play board games, so that they can easily find other gamers and make friends with people with common interests.</p>
                </section>

                <section id="planszappka-goal" class="mt-5">
                    <span class="project-subtitle">Goal</span>
                    <p class="project-text">Design a mobile app that will unite people who play board games and allow them to easily find gaming companions to enable gameplay.</p>
                </section>

                <section id="planszappka-target-audience" class="mt-5">
                    <span class="project-subtitle">Target audience</span>
                    <p class="project-text">The audience are board game players. They are people of all ages, but a greater problem with finding playmates occurs among older people, who have already finished their education and find it difficult to find players among their friends. Additionally, some of the games require a large number of participants and a lot of time, which makes the task even more difficult. </p>
                    <p class="project-text">They are usually creative people, with well-developed imagination, willing to make new friends. They like healthy competition, but also cooperation with other players. Potential users face the described problem mainly in their free time, when they are looking for plans for spending a nice day.</p>
                </section>

                <section id="planszappka-in-depth" class="mt-5">
                    <span class="project-subtitle">In-Depth Interviews</span>
                    <p class="project-text">We have interviewed 10 potential users of the app to gather information about their behavior when faced with the problem we wanted to solve. We have prepared a list of questions for our interviewees:</p>
                    <ul>
                        <li><span>Do you play board games and how often?</span></li>
                        <li><span>How many board games do you own?</span></li>
                        <li><span>Where and on what occasions do you usually play board games?</span></li>
                        <li><span>Do you have friends to play with? How is it that you have someone to play with?</span></li>
                        <li><span>How many people do you usually play with, how long?</span></li>
                        <li><span>How many games do you play?</span></li>
                        <li><span>Has it ever happened that you didn't have enough people to play the game?</span></li>
                        <li><span>Have you ever wanted to play a game that you didn't have? What have you done then?</span></li>
                        <li><span>What do you do when you want to play but have no one to play with?</span></li>
                    </ul>
                    <p class="project-text">Based on the interviews, we have drawn the following conclusions:</p>
                    <ul>
                        <li><span>The vast majority of people at one time wanted to play a board game they didn't have - they decided to rent it or play it with someone who did.</span></li>
                        <li><span>People who don't have anyone to play use social media to find other players, choose another game, or just let it go.</span></li>
                        <li><span>About half of the interviewees lack people to play, usually this applies to people playing 3-4 with friends.</span></li>
                        <li><span>People are divided into those who play often (about twice a week) and rarely (a few times a year).</span></li>
                        <li><span>Typically, people have 3-6 board games at home.</span></li>
                        <li><span>Interviewees usually play with 3-5 people for about 3-4 hour.</span></li>
                        <li><span>Depending on the length of the game, people choose to play a different number of games.</span></li>
                    </ul>
                </section>

                <section id="planszappka-personas" class="mt-5">
                    <span class="project-subtitle">Personas</span>
                    <p class="project-text">Based on the information obtained, we were able to prepare two personas presenting the characteristics of our users. Meet Natalia and Leopold! :)</p>
                    <img class="img" id="persona-natalia" src="@/assets/planszappka/persona-natalia.png" alt="persona-natalia"/>
                    <img class="img mt-4" id="persona-leopold" src="@/assets/planszappka/persona-leopold.png" alt="persona-leopold"/>
                </section>

                <section id="planszappka-user-stories" class="mt-5">
                    <span class="project-subtitle">User stories</span>
                    <p class="project-text">We have prepared key user stories for our project:</p>
                    <ol>
                        <li><span>As a user, I want to be able to find people who own games that interest me so that I can play games that I don't own.</span></li>
                        <li><span>As a user, I want to find people willing to play to reach the number of players required so that I can play a game.</span></li>
                        <li><span>As a user, I want to meet people with similar interests to have someone so that I can play with in the future.</span></li>
                        <li><span>As a user, I want to be able to communicate with other users so that I can agree on meeting details.</span></li>
                        <li><span>As a user, I want to be able to browse games that are being played nearby so that I can experience new games.</span></li>
                        <li><span>As a user, I want to be able to add others to my friends so that I can see their activity more easily.</span></li>
                        <li><span>As the owner of a board game rental company, I want to be able to advertise my services so that I can increase the income of my business.</span></li>
                    </ol>
                </section>

                <section id="planszappka-wireframes" class="mt-5">
                    <span class="project-subtitle">Wireframes</span>
                    <p class="project-text">With the initial idea of the app, we have proceeded with paper prototyping. Below I present my sketches:</p>
                    <img class="img" id="wireframes" src="@/assets/planszappka/wireframes.jpg" alt="planszappka-wireframes"/>
                </section>

                <section id="planszappka-ui" class="mt-5">
                    <span class="project-subtitle">UI Design</span>
                    <div class="row">
                        <div class="col-12 col-lg-6 col-xl-5">
                            <span class="ui-heading">Typography</span>
                            <div class="row mt-3">
                                <div class="co-12 col-sm-6">
                                    <span class="typography">Headings</span>
                                    <span id="heading-1" class="mt-3">Heading 1 (26)</span>
                                    <span id="heading-2">Heading 2 (20)</span>
                                    <span id="heading-3">Heading 3 (18)</span>
                                    <span id="heading-4">Heading 4 (18)</span>
                                </div>
                                <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <span class="typography">Body text</span>
                                    <span id="body-text-1" class="mt-3">Body text 1 (16)</span>
                                    <span id="body-text-2" class="mt-0 mt-md-3">Body text 2 (14)</span>
                                    <span id="body-text-3" class="mt-0 mt-md-3">Body text 3 (12)</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-7 mt-4 mt-lg-0">
                            <span class="ui-heading">Colors</span>
                            <div class="row">
                                <div class="col-6 mt-3">
                                    <div class="onyx color-box"></div>
                                    <span class="ms-2 mt-2">#303633</span>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="beige color-box"></div>
                                    <span class="ms-2 mt-2">#EDF0DA</span>
                                </div>
                                <div class="col-4 mt-3">
                                    <div class="irresistible color-box"></div>
                                    <span class="ms-2 mt-2">#AA4465</span>
                                </div>
                                <div class="col-4 mt-3">
                                    <div class="carrot-orange color-box"></div>
                                    <span class="ms-2 mt-2">#F18F01</span>
                                </div>
                                <div class="col-4 mt-3">
                                    <div class="black-coffee color-box"></div>
                                    <span class="ms-2 mt-2">#363033</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="planszappka-tests-1" class="mt-5">
                    <span class="project-subtitle">Usability tests #1</span>
                    <p class="project-text">After preparing the first version of the application prototype in Figma, we prepared a research scenario that we conducted with potential users. The tests were performed remotely using screen sharing, so we observed all the subsequent actions of the people taking part in the tests. We also encouraged them to comment on what they wanted to do to get to know their thought process.</p>
                    <p class="project-text">The scenario consisted of the following research tasks:</p>
                    <ol>
                        <li>
                            <span class="fst-italic">Context description:</span>
                            <span class="project-text">Imagine that you live in Tarnogaj, Wrocław. It's Friday night and you still don’t have any plans for it. Recently you've heard about the board game "Avalon" and found it very interesting. You don't want to buy the game right away until you've tested it, but unfortunately none of your friends have it. You have no problem meeting new people to play with, but you'd prefer not to travel too far from where you live. </span>
                            <span class="fst-italic mt-2">Task:</span>
                            <span class="project-text">Join the gameplay of the game "Avalon" that is played closest to you.</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">Context description:</span>
                            <span class="project-text">You have recently bought the board game "Avalon", but you lack 4 people to play with. Unfortunately you have no friends interested in playing.</span>
                            <span class="fst-italic mt-2">Task:</span>
                            <span class="project-text">Create an announcement in which you specify the date and time only after you have found all the players and agreed on a date.</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">Context description:</span>
                            <span class="project-text">You have heard from a friend that there are board game rentals. You are curious if they are also available in your city.</span>
                            <span class="fst-italic mt-2">Task:</span>
                            <span class="project-text">Find out if there are board game rentals in your city. If so, check their location.</span>
                        </li>
                    </ol>

                    <p class="project-text">Based on the tests, we have drawn the following conclusions:</p>
                    <ol>
                        <li>
                            <span class="project-text">No one had problems with the task, quite a few people wanted to use filters. Unfortunately, they are not fully supported in the prototype, but this is a sign that they would have no problems finding the advertisement in a working application. There were supporters of both map and list view - everyone would find something for themselves.</span>
                        </li>
                        <li class="mt-3">
                            <span class="project-text">People testing the prototype did very well with this task, they liked the selection of fields in the form when creating an advertisement (e.g. age of the players). For one person the checkbox seemed a bit small, they had slight problems with hitting it - this was corrected later.</span>
                        </li>
                        <li class="mt-3">
                            <span class="project-text">We weren't sure if placing rentals in the "Games" tab would be entirely intuitive, but most handled the task well, saying that this tab fit best. A couple of people initially tried the "Search" tab from the navigation menu, but in it there is a large "Game Search" heading at the top that immediately suggested they wouldn't find what they were looking for here, and the second choice was just the "Games" tab.</span>
                        </li>
                    </ol>

                    <p class="project-text">We also prepared a short post-test survey:</p>
                    <ol>
                        <li>
                            <span class="fst-italic">Question:</span>
                            <span class="project-text">How would you rate the intuitiveness of the app?</span>
                            <span class="fst-italic mt-2">Conclusion:</span>
                            <span class="project-text">The vast majority of people found the application very intuitive, adapted with known standards. One person said that the icons for the number of players and the number of friends in the game can be slightly unintuitive, but this is only a view of the announcement tile, where it needs to be described briefly. Once you get into the details of the announcement, everything is explained in words. We decided not to make changes here, after using the app for a short time users should easily learn the accepted designations.</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">Question:</span>
                            <span class="project-text">Are the navigation menu captions unambiguous?</span>
                            <span class="fst-italic mt-2">Conclusion:</span>
                            <span class="project-text">Users appreciated that the icons have captions, which makes them more intuitive. At first glance, a few people had some uncertainty about what is hidden in the "Games" tab - when creating the project, naming it also caused us the most problems, unfortunately there is no room for more tabs in the menu and separation of some content, so this name seems to be the best possible.</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">Question:</span>
                            <span class="project-text">Did you have any trouble navigating the app? If so, what was it and how would you have solved it differently?</span>
                            <span class="fst-italic mt-2">Conclusion:</span>
                            <span class="project-text">There were no problems with navigating the application, only the aforementioned slight uncertainty when looking for a game rentals.</span>
                        </li>
                    </ol>
                </section>

                <section id="planszappka-heuristics" class="mt-5">
                    <span class="project-subtitle">Nielsen’s Usability Heuristics</span>
                    <p class="project-text">After the first tests, we carefully reviewed all of the application screens for compliance with Nielsen’s Heuristics. We came across several shortcomings and deficiencies, which I then applied to the design in Figma. New capabilities have been added to the application:</p>
                    <ul>
                        <li><span>adding and removing owned games and games from the wishlist</span></li>
                        <li><span>searching for advertisements related only to games from the wishlist</span></li>
                        <li><span>voice searching</span></li>
                        <li><span>searching for ads with the game being viewed</span></li>
                        <li><span>choosing a theme</span></li>
                        <li><span>inviting the user to friends from the user's profile</span></li>
                        <li><span>deleting notifications</span></li>
                        <li><span>if no results are returned for a search, displaying information about the missing results and suggesting applying changes to the criteria</span></li>
                        <li><span>reporting bugs</span></li>
                        <li><span>tutorial to the application (in the project it is only possible to enable the tutorial option at the launch of the app)</span></li>
                    </ul>
                </section>

                <section id="planszappka-tests-2" class="mt-5">
                    <span class="project-subtitle">Usability tests #2</span>
                    <p class="project-text">After the changes we conducted usability tests again on a different group of people. We repeated the research tasks from previous tests - the conclusions were very similar and this time no one pointed out that any of the elements was too small. In addition to the existing tasks we have added new ones:</p>
                    <ol start="4">
                        <li>
                            <span class="fst-italic">Context description: </span>
                            <span class="project-text">A friend recommended you this application. You have already added each other as friends, her nickname is "natalka25". You are wondering if she has recently participated in a board game.</span>
                            <span class="fst-italic mt-2">Task:</span>
                            <span class="project-text">Check out the recent activity of your friend with the nickname "natalka25".</span>
                            <span class="fst-italic mt-2">Conclusion:</span>
                            <span class="project-text">The task did not cause any problems to anyone, although arranging it we assumed a different way of solving it. We were thinking of going to Friends -> Activity, but as many people have noticed, from the Friends tab you can go to a user's profile and check their recent games.</span>
                        </li>
                    </ol>

                    <p class="project-text">Therefore, we decided to add one more similar task, but better reflecting what we originally meant. We examined new people.</p>

                    <ol start="5">
                        <li>
                            <span class="fst-italic">Context description: </span>
                            <span class="project-text">Some friends have recommended the application to you. You have installed the application and added each other as friends. You are wondering what your friends' recent activities in the application were.</span>
                            <span class="fst-italic mt-2">Task:</span>
                            <span class="project-text">Check your friends' recent activities in the app (who did what).</span>
                            <span class="fst-italic mt-2">Conclusion:</span>
                            <span class="project-text">This time, the description of the context and the task were worded in such a way that the surveyed users understood our intentions and easily noticed the "Activity" tab, where the last activity of all friends is located.</span>
                        </li>
                    </ol>
                </section>

                <section id="planszappka-survey" class="mt-5">
                    <span class="project-subtitle">Survey</span>
                    <p class="project-text">During the project presentation in class, we were suggested to focus on the appearance of a single tile presenting the most important information about a particular game. So we decided to conduct a survey to find out which form of information presentation is most user-friendly. The prepared questions and the results of the survey conducted on 16 people are presented below.</p>
                    <div class="row">

                        <div class="col-12 col-lg-6 mt-3">
                            <ol class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">Which element in the ad do you pay particular attention to?</p>
                                        <apexchart type="pie" :options="options1" :series="series1"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-lg-6 mt-3">
                            <ol start="2" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">Which form seems more user-friendly to you?</p>
                                        <apexchart type="pie" :options="options2" :series="series2"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="3" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">Which form seems more user-friendly to you?</p>
                                        <apexchart type="pie" :options="options3" :series="series3"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="4" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">Which form seems more user-friendly to you?</p>
                                        <apexchart type="pie" :options="options4" :series="series4"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="5" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">Do you think that each advertisement should additionally have a title (created by the author), is the information provided sufficient?</p>
                                        <apexchart type="pie" :options="options5" :series="series5"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="6" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">Would you like there to be an option to customize the appearance of the ad tile for the user (issues raised in previous questions)?</p>
                                        <apexchart type="pie" :options="options6" :series="series6"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                    </div>
                    <p class="project-text mt-3">The results of the survey were in alignment with our initial assumptions about the appearance of the advertisement tile, but due to some different voices and predominant approval for the ability to edit the appearance of the tile, we decided that it would be appropriate to add such an option in the app settings.</p>
                    <div class="text-center figma">Now, if you haven't done it already, check out the project in Figma <a href="https://www.figma.com/proto/53UYySDn8CZLFmW2c6LoLL/Untitled?node-id=0%3A1" class="d-inline figma-here">here</a> :)</div>
                </section>

                <section id="planszappka-learnings" class="my-5">
                    <span class="project-subtitle">Lessons learned</span>
                    <p class="project-text">This was my first project that focused on UX, done under the tutelage of a UX specialist. I had the opportunity to go through the process of User Centered Design and find out that this is something I want to see a future with and grow in this field. Approaching this task again, I would definitely deepen my knowledge and include more elements necessary during such design. However, I have to admit that it was a good introductory lesson for me.</p>
                </section>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "PlanszAppka",
    data () {
        return {

            series1: [13, 1, 2, 0],
            options1: {
                colors: [ '#AA4465', '#303633', '#F18F01', '#EDF0DA'],
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['name of the board game', 'game time', 'place of the game', 'all equally important'],
                responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 400
                        }
                    }
                }]
            },

            series2: [8, 8],
            options2: {
                colors: [ '#AA4465', '#303633', '#F18F01', '#EDF0DA'],
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['Wrocław, Tarnogaj', '<1km from you (this information can also be found in the ad details)'],
                responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 400
                        }
                    }
                }]
            },

            series3: [8, 6, 2],
            options3: {
                colors: [ '#AA4465', '#303633', '#F18F01', '#EDF0DA'],
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['05.11.2012 6pm', ' tomorrow/the day after tomorrow/in 3 days at 6pm', 'tomorrow/the day after tomorrow/on Tuesday at 6pm'],
                responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 400
                        }
                    }
                }]
            },

            series4: [15, 1],
            options4: {
                colors: [ '#AA4465', '#303633', '#F18F01', '#EDF0DA'],
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['4/6 users have joined the game', '2 slots available'],
                responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 400
                        }
                    }
                }]
            },

            series5: [14, 2],
            options5: {
                colors: [ '#AA4465', '#303633', '#F18F01', '#EDF0DA'],
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['better with the title', 'better without a title'],
                responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 400
                        }
                    }
                }]
            },

            series6: [11, 5],
            options6: {
                colors: [ '#AA4465', '#303633', '#F18F01', '#EDF0DA'],
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['yes', 'no'],
                responsive: [{
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 400
                        }
                    }
                }]
            }

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Roboto:wght@400;500;700&display=swap');

#planszappka-header {
    background-color: var(--PLANSZAPPKA);
}

@media (min-width: 1px) and (max-width: 576px) {
    #planszappka-header {
        height: 90vh;
    }
}

#main-photo {
    width: auto;
    height: 50vh;
}

.project-title {
    font-size: 300%;
}

.project-subject {
    font-size: 150%;
}

.section-row {
    justify-content: center;
    width: 100%;
    margin: 0;
    text-align: left;
}

.project-subtitle {
    font-size: 200%;
    margin-bottom: 1rem;
}

.ui-heading {
    font-size: 150%;
    font-weight: 600;
}

.project-text {
    text-align: justify;
}

span {
    display: block;
}

.basic-info-header, .project-subtitle {
    font-weight: 600;
    color: var(--PLANSZAPPKA);
}

li {
    color: var(--PLANSZAPPKA-LIGHT);
}

li span, li div {
    color: var(--BLACK);
}

.img {
    width: 100%;
}

.typography {
    color: var(--PLANSZAPPKA-LIGHT);
}

#heading-1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 26px;
}

#heading-2 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 20px;
}

#heading-3 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
}

#heading-4 {
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    font-size: 18px;
}

#body-text-1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
}

#body-text-2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
}

#body-text-3 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
}


.color-box {
    border-radius: 10px;
    height: 10vh;
}

.onyx {
    background-color: #303633;
}

.beige {
    background-color: #EDF0DA;
}

.irresistible {
    background-color: #AA4465;
}

.carrot-orange {
    background-color: #F18F01;
}

.black-coffee {
    background-color: #363033;
}

ol.charts-list {
    padding-left: 1.1rem;
}

.figma {
    font-size: 20px;
}

.figma-here {
    color: var(--PLANSZAPPKA);
    font-weight: bold;
    text-decoration: none;
}

.figma-heading {
    color: #afc2c0;
}

.figma-heading-link {
    color: #FDE74C;
    text-decoration: none;
}

</style>