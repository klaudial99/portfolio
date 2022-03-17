<template>
    <div class="container-fluid px-0">
        <section id="wellbeeing-header">
            <div class="row py-4 w-100">
                <div class="col-12 col-sm-6 col-md-7 my-4 my-sm-0 text-white d-flex justify-content-center align-items-center">
                    <div class="text-start px-3">
                        <span class="project-title">WeelBeeing</span>
                        <span class="project-subject text-center text-sm-start">Web Development</span>
                        <span class="mt-2 github-heading text-center text-sm-start">Check out code <a href="https://github.com/klaudial99/well-beeing" class="fw-bolder github-heading-link">here</a></span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-5 my-4 my-sm-0">
                    <img id="wellbeing-main-photo" src="@/assets/wellbeeing/wellbeeing-main.png" alt="main-photo"/>
                </div>
            </div>
        </section>

        <div class="row section-row">
            <div class="col-10 col-md-9">
                <section id="wellbeeing-basic-info" class="mt-5">
                    <div class="row w-100 m-0">
                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Role</span>
                            <span>Full-Stack Developer,</span>
                            <span>Business Analyst</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Timeline</span>
                            <span>2 months</span>
                            <span>Oct - Dec 2021</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Platform</span>
                            <span>Web</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">Technology and Tools</span>
                            <span>Spring Boot, Vue.js, PostgreSQL, Adobe XD</span>
                        </div>
                    </div>
                </section>

                <section id="wellbeeing-overview" class="mt-5">
                    <span class="project-subtitle">Overview</span>
                    <p class="project-text">WellBeeing is a website that allows its users to take care of their health, maintain a balanced diet and provide appropriate amount of exercise. It was created in a team of 4 people, where each person was responsible for one of the modules:</p>
                    <ul>
                        <li><span>social,</span></li>
                        <li><span>diet,</span></li>
                        <li><span>sports,</span></li>
                        <li><span>telemedicine.</span></li>
                    </ul>
                    <p class="project-text">This is the project, on the basis of which I wrote my Engineering Thesis. My role was to create a social module that would spread the community and provide an opportunity to share relevant content within the whole system. It should allow for mutual motivation in pursuit of a goal and bind the whole website together, making it more attractive to the user. The project was not strictly related to UX/UI, so I will only present its elements most related to this topic.</p>
                </section>

                <section id="wellbeeing-problem" class="mt-5">
                    <span class="project-subtitle">Problem recognition</span>
                    <p class="project-text">Social media has been in its heyday for some time now. A research carried out in 2021 proves that they are used by more than 4 billion people, which is slightly more than half of the world's population. What's more - this number has almost doubled in the last 5 years. Undoubtedly, this is greatly influenced by the pandemic period, during which it became necessary to replace direct contacts with other people.</p>
                    <p class="project-text">Everyone uses social media for a specific purpose. By far the largest group is the need to stay in touch with loved ones. However, they are also used to get information from the world, follow popular topics and people or just relax in their free time. The average user spends an average of 2.5 hours each day using social media. </p>
                    <p class="project-text">However, there is a certain risk of spending too much time on them and neglecting important aspects of life, especially the health ones. Using social media requires time spent in front of a computer or phone screen, which can significantly affect the amount of exercise a person gets during the day. Lack of time can additionally translate into an improperly balanced diet and consequently health problems. Overweight and obesity are common consequences of this lifestyle, which in many cases can be avoided. According to a study conducted in 2016, 39% of the population was overweight and 13% was obese. These results are nearly triple what they were 40 years earlier.</p>
                    <p class="project-text">Considering the ever-increasing popularity of social media and the health problems of mankind, it is worth taking advantage of both facts. Many people can no longer imagine their lives without the Internet, so you should do everything to take advantage of its benefits.</p>
                </section>

                <section id="wellbeeing-idea" class="mt-5">
                    <span class="project-subtitle">Project idea</span>
                    <p class="project-text">Considering the power of social media to attract crowds, it can be used to interest the user in a larger system designed to draw attention to a fundamental aspect of human life, which is health. The entire system would allow the creation of personalized training and nutrition plans and analyze the results they produce. Moreover, it would allow you to interpret your health parameters. To ensure the best possible quality, this would be done under the supervision of trusted specialists. The social module would play an important role in the entire system. It should be the bonding part of the whole application, its promotional aspect. Keeping people connected and motivated is very important for everyone. Sharing important, verified content helps spread information that can be useful to many other users. Additionally, a person who knows they are supported by others is much more likely to be able to achieve their goals. Getting an opinion from someone who is well versed in the subject can be very valuable.</p>
                </section>

                <section id="wellbeeing-actors" class="mt-5">
                    <span class="project-subtitle">Actors</span>
                    <p class="project-text">The system distinguishes the following actors:</p>
                    <div class="text-center mb-4">
                        <img id="actors" class="mw-100" src="@/assets/wellbeeing/actors.png" alt="wellbeeing-actors"/>
                    </div>
                    <ul>
                        <li><span>Basic user - each registered user of the service, has access to all basic functionalities of the system</span></li>
                        <li><span>Administrator - manages the mechanism of assigning roles within the system</span></li>
                        <li><span>Specialist - an abstract actor, extends the functionality of the Basic user and has common features of a Dietician, Trainer and Doctor. Other modules are more focused on extending its capabilities, within the social module it is additionally able to view the profiles of users who follow it.</span></li>
                    </ul>
                </section>

                <section id="wellbeeing-user-stories" class="mt-5">
                    <span class="project-subtitle">User stories</span>
                    <p class="project-text">After identifying the project problem and separating the actors, I created the following user stories:</p>
                    <p class="project-subtitle-2">Basic user requirements:</p>
                    <ol>
                        <li><span>As a Basic user, I want to be able to get to know the subject of the website so that I can find out if I am interested in using it.</span></li>
                        <li><span>As a Basic user, I want to be able to join the service so that I can use what it offers.</span></li>
                        <li><span>As a Basic user, I want my privacy guaranteed when using the service so that my data is safe.</span></li>
                        <li><span>As a Basic user, I want to be able to expand my competences so that I can help other users.</span></li>
                        <li><span>As a Basic user, I want to be able to learn information about other users so that I can get to know them better.</span></li>
                        <li><span>As a Basic user, I want to be able to read content shared by other users so I can expand my knowledge.</span></li>
                        <li><span>As a Basic user, I want to be able to interact with content shared by other users so I can express my opinion and engage in discussion.</span></li>
                        <li><span>As a Basic user, I want to be able to publish my content so that I can interest other users.</span></li>
                        <li><span>As a Basic user, I want to be able to find other users of the system so I can meet people that interest me.</span></li>
                        <li><span>As a Basic user, I want to be able to track the activity of my friends so that I can stay up to date with the content they post.</span></li>
                        <li><span>As a Basic user I want to be able to follow the activities of specialists so that I can constantly expand my knowledge with new, reliable information.</span></li>
                        <li><span>As a Basic user, I want to be able to evaluate the qualifications of a specialist so that it is easier for others to decide about potential cooperation.</span></li>
                        <li><span>As a Basic user, I want to be able to manage my profile data so that it is always up to date.</span></li>
                        <li><span>As a Basic user, I want to be able to browse content that interests me so that my use of the website is attractive and educational for me.</span></li>
                        <li><span>As a Basic user, I want to be able to interact privately with other users so that I am guaranteed freedom of speech.</span></li>
                    </ol>

                    <p class="project-subtitle-2">Administrator requirements:</p>
                    <ol start="16">
                        <li><span>As an Administrator, I want to be guaranteed a separate way of accessing the website so that it is not available to all system users.</span></li>
                        <li><span>As an Administrator, I want to be able to decide about assigning roles to users so that I have control over their competences.</span></li>
                    </ol>

                    <p class="project-subtitle-2">Specialist requirements:</p>
                    <ol start="18">
                        <li><span>As a Specialist, I want to be able to know my audience so that I can find out who is following my activity.</span></li>
                    </ol>
                </section>

                <section id="wellbeeing-use-cases" class="mt-5">
                    <span class="project-subtitle">Use cases</span>
                    <p class="project-text">To meet user requirements, I implemented the following use cases within the social module:</p>

                    <p class="project-subtitle-2">For Basic user who is not logged in:</p>
                    <ul>
                        <li><span>viewing the homepage,</span></li>
                        <li><span>registering in the system, </span></li>
                        <li><span>logging into the system.</span></li>
                    </ul>

                    <p class="project-subtitle-2">For Basic user:</p>
                    <ul>
                        <li><span>viewing user profile,</span></li>
                        <li><span>viewing post,</span></li>
                        <li><span>managing your posts (create, read, update, delete), </span></li>
                        <li><span>reacting to posts (likes),</span></li>
                        <li><span>browsing the post's likes list,</span></li>
                        <li><span>viewing post’s comments,</span></li>
                        <li><span>managing your comments,</span></li>
                        <li><span>sharing a post,</span></li>
                        <li><span>sharing a training plan,</span></li>
                        <li><span>sharing a nutrition plan,</span></li>
                        <li><span>searching for other users, </span></li>
                        <li><span>managing invitations to friends list,</span></li>
                        <li><span>managing your friends list,</span></li>
                        <li><span>managing your list of followed specialists,</span></li>
                        <li><span>viewing opinions on specialists,</span></li>
                        <li><span>managing your opinions</span></li>
                        <li><span>editing your user profile,</span></li>
                        <li><span>viewing your newsfeed,</span></li>
                        <li><span>viewing your conversations,</span></li>
                        <li><span>sending a new message,</span></li>
                        <li><span>managing your specialist role requests,</span></li>
                        <li><span>attaching proof of qualifications,</span></li>
                        <li><span>logging out of the system.</span></li>
                    </ul>

                    <p class="project-subtitle-2">For Administrator who is not logged in:</p>
                    <ul>
                        <li><span>logging to the admin panel.</span></li>
                    </ul>

                    <p class="project-subtitle-2">For Administrator:</p>
                    <ul>
                        <li><span>managing users’ specialist role requests,</span></li>
                        <li><span>logging out of the administrator panel.</span></li>
                    </ul>

                    <p class="project-subtitle-2">For Specialist:</p>
                    <ul>
                        <li><span>viewing your list of followers.</span></li>
                    </ul>

                </section>

                <section id="wellbeeing-prototypes-screens" class="mt-5">
                    <span class="project-subtitle">Prototypes and outcome</span>
                    <p class="project-text">Below I present selected screens at prototype level in Adobe XD and corresponding implemented versions:</p>

                    <p class="screen-title mt-5">HOMEPAGE</p>
                    <div id="home" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="home-prototype" src="@/assets/wellbeeing/home-prototype.png" alt="wellbeeing-home-prototype" @click="showSingle('home-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="home-screen" src="@/assets/wellbeeing/home-screen.png" alt="wellbeeing-home-screen" @click="showSingle('home-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5">PROFILE VIEW</p>
                    <div id="profile" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="profile-prototype" src="@/assets/wellbeeing/profile-prototype.png" alt="wellbeeing-profile-prototype" @click="showSingle('profile-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="profile-screen" src="@/assets/wellbeeing/profile-screen.png" alt="wellbeeing-profile-screen" @click="showSingle('profile-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5">SPECIALIST'S OPINIONS</p>
                    <div id="opinions" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="opinions-prototype" src="@/assets/wellbeeing/opinions-prototype.png" alt="wellbeeing-opinions-prototype" @click="showSingle('opinions-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="opinions-screen" src="@/assets/wellbeeing/opinions-screen.png" alt="wellbeeing-opinions-screen" @click="showSingle('opinions-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5">FRIENDS LIST</p>
                    <div id="friends" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="friends-prototype" src="@/assets/wellbeeing/friends-prototype.png" alt="wellbeeing-friends-prototype" @click="showSingle('friends-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="friends-screen" src="@/assets/wellbeeing/friends-screen.png" alt="wellbeeing-friends-screen" @click="showSingle('friends-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5">SPECIALIST ROLE REQUESTS PANEL</p>
                    <div id="requests" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="requests-prototype" src="@/assets/wellbeeing/requests-prototype.png" alt="wellbeeing-requests-prototype" @click="showSingle('requests-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="requests-screen" src="@/assets/wellbeeing/requests-screen.png" alt="wellbeeing-requests-screen" @click="showSingle('requests-screen.png')"/>
                        </div>
                    </div>

                    <vue-easy-lightbox
                        moveDisabled
                        :visible="visible"
                        :imgs="imgs"
                        :index="index"
                        @hide="handleHide"
                    ></vue-easy-lightbox>

                    <div class="project-text mt-5">Due to organizational changes we had 2,5 months to implement the whole system and write an Engineering Thesis. As a result, the application is unfortunately not responsive, so I recommend opening it on larger screens. Demo available <a href="https://wellbeeing-app.herokuapp.com/" class="d-inline demo-here">here</a> :)</div>

                </section>

                <section id="wellbeeing-learnings" class="my-5">
                    <span class="project-subtitle">Lessons learned</span>
                    <p class="project-text">This was my first project done in a group larger than two people and by far my biggest. It showed me how important it is to be systematic with a short deadline and many functionalities to be implemented. I've also had the opportunity to see that developing some collaborative principles for larger projects is crucial.</p>
                </section>

            </div>

        </div>

    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
    name: "WellBeeing",
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            imgs: '',
            visible: false,
            index: 0
        }
    },
    methods: {
        showSingle(img) {
            this.imgs = require('@/assets/wellbeeing/' + img)
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>

<style scoped>
#wellbeeing-header {
    background-color: var(--WELLBEEING);
}

@media (min-width: 1px) and (max-width: 576px) {
    #wellbeeing-header {
        height: 90vh;
    }
}

#wellbeing-main-photo {
    max-height: 50vh;
    max-width: 100%;
    /*width: auto;*/

}

span {
    display: block;
}

.github-heading {
    color: #f3f3f3;
}

.github-heading-link {
    color: #FFDD00;
    text-decoration: none;
}

.basic-info-header, .project-subtitle {
    font-weight: 600;
    color: var(--WELLBEEING);
}

.project-subtitle-2 {
    font-weight: 500;
    color: var(--WELLBEEING);
    font-size: 115%;
}

.screen-title {
    font-weight: 500;
    color: var(--WELLBEEING);
    font-size: 115%;
    text-align: center;
}


li {
    color: var(--WELLBEEING-LIGHT);
}

li span, li div {
    color: var(--BLACK);
}

.demo-here {
    color: var(--WELLBEEING);
    font-weight: bold;
    text-decoration: none;
}


</style>