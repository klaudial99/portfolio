<template>
    <div class="container-fluid px-0">
        <section id="wellbeeing-header">
            <div class="row py-4 w-100">
                <div class="col-12 col-sm-6 col-md-7 my-4 my-sm-0 text-white d-flex justify-content-center align-items-center">
                    <div class="text-start px-3">
                        <span class="project-title">{{ $t("wellbeeing.heading.title") }}</span>
                        <span class="project-subject text-center text-sm-start">{{ $t("wellbeeing.heading.subject") }}</span>
                        <span class="mt-2 github-heading text-center text-sm-start">{{ $t("wellbeeing.heading.code") }}<a href="https://github.com/klaudial99/well-beeing" class="fw-bolder github-heading-link">{{ $t("wellbeeing.heading.link") }}</a></span>
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
                            <span class="basic-info-header">{{ $t("wellbeeing.basicInfo.roleHeading") }}</span>
                            <span>{{ $t("wellbeeing.basicInfo.roleInfo1") }}</span>
                            <span>{{ $t("wellbeeing.basicInfo.roleInfo2") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("wellbeeing.basicInfo.timelineHeading") }}</span>
                            <span>{{ $t("wellbeeing.basicInfo.timelineInfo1") }}</span>
                            <span>{{ $t("wellbeeing.basicInfo.timelineInfo2") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("wellbeeing.basicInfo.platformHeading") }}</span>
                            <span>{{ $t("wellbeeing.basicInfo.platformInfo") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("wellbeeing.basicInfo.toolsHeading") }}</span>
                            <span>{{ $t("wellbeeing.basicInfo.toolsInfo") }}</span>
                        </div>
                    </div>
                </section>

                <section id="wellbeeing-overview" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.overview.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.overview.info1") }}</p>
                    <ul>
                        <li><span>{{ $t("wellbeeing.overview.modulesList.item1") }}</span></li>
                        <li><span>{{ $t("wellbeeing.overview.modulesList.item2") }}</span></li>
                        <li><span>{{ $t("wellbeeing.overview.modulesList.item3") }}</span></li>
                        <li><span>{{ $t("wellbeeing.overview.modulesList.item4") }}</span></li>
                    </ul>
                    <p class="project-text">{{ $t("wellbeeing.overview.info2") }}</p>
                </section>

                <section id="wellbeeing-problem" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.problem.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.problem.info1") }}</p>
                    <p class="project-text">{{ $t("wellbeeing.problem.info2") }}</p>
                    <p class="project-text">{{ $t("wellbeeing.problem.info3") }}</p>
                    <p class="project-text">{{ $t("wellbeeing.problem.info4") }}</p>
                </section>

                <section id="wellbeeing-idea" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.idea.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.idea.info1") }}</p>
                    <p class="project-text">{{ $t("wellbeeing.idea.info2") }}</p>
                </section>

                <section id="wellbeeing-actors" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.actors.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.actors.info") }}</p>
                    <div class="text-center mb-4">
                        <img id="actors" class="mw-100" :src="require('@/assets/wellbeeing/' + $t('wellbeeing.actors.imgPath'))" alt="wellbeeing-actors"/>
                    </div>
                    <ul>
                        <li><span class="project-text">{{ $t("wellbeeing.actors.usersList.item1") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.actors.usersList.item2") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.actors.usersList.item3") }}</span></li>
                    </ul>
                </section>

                <section id="wellbeeing-user-stories" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.userStories.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.userStories.info") }}</p>
                    <p class="project-subtitle-2">{{ $t("wellbeeing.userStories.basicUser") }}</p>
                    <ol>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item1") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item2") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item3") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item4") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item5") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item6") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item7") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item8") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item9") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item10") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item11") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item12") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item13") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item14") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.basicUserList.item15") }}</span></li>
                    </ol>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.userStories.admin") }}</p>
                    <ol start="16">
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.adminList.item1") }}</span></li>
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.adminList.item1") }}</span></li>
                    </ol>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.userStories.specialist") }}</p>
                    <ol start="18">
                        <li><span class="project-text">{{ $t("wellbeeing.userStories.specialistList.item1") }}</span></li>
                    </ol>
                </section>

                <section id="wellbeeing-use-cases" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.useCases.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.useCases.info") }}</p>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.useCases.basicUserNotLogged") }}</p>
                    <ul>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserNotLoggedList.item1") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserNotLoggedList.item2") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserNotLoggedList.item3") }}</span></li>
                    </ul>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.useCases.basicUser") }}</p>
                    <ul>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item1") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item2") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item3") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item4") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item5") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item6") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item7") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item8") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item9") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item10") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item11") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item12") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item13") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item14") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item15") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item16") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item17") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item18") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item19") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item20") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item21") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item22") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.basicUserList.item23") }}</span></li>
                    </ul>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.useCases.adminNotLogged") }}</p>
                    <ul>
                        <li><span>{{ $t("wellbeeing.useCases.adminNotLoggedList.item1") }}</span></li>
                    </ul>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.useCases.admin") }}</p>
                    <ul>
                        <li><span>{{ $t("wellbeeing.useCases.adminList.item1") }}</span></li>
                        <li><span>{{ $t("wellbeeing.useCases.adminList.item2") }}</span></li>
                    </ul>

                    <p class="project-subtitle-2">{{ $t("wellbeeing.useCases.specialist") }}</p>
                    <ul>
                        <li><span>{{ $t("wellbeeing.useCases.specialistList.item1") }}</span></li>
                    </ul>

                </section>

                <section id="wellbeeing-prototypes-screens" class="mt-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.prototypes.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.prototypes.info") }}</p>

                    <p class="screen-title mt-5 mb-4">{{ $t("wellbeeing.prototypes.home") }}</p>
                    <div id="home" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="home-prototype" src="@/assets/wellbeeing/home-prototype.png" alt="wellbeeing-home-prototype" @click="showSingle('home-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl arrow-icon"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl arrow-icon"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="home-screen" src="@/assets/wellbeeing/home-screen.png" alt="wellbeeing-home-screen" @click="showSingle('home-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5 mb-4">{{ $t("wellbeeing.prototypes.profile") }}</p>
                    <div id="profile" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="profile-prototype" src="@/assets/wellbeeing/profile-prototype.png" alt="wellbeeing-profile-prototype" @click="showSingle('profile-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl arrow-icon"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl arrow-icon"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="profile-screen" src="@/assets/wellbeeing/profile-screen.png" alt="wellbeeing-profile-screen" @click="showSingle('profile-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5 mb-4">{{ $t("wellbeeing.prototypes.opinions") }}</p>
                    <div id="opinions" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="opinions-prototype" src="@/assets/wellbeeing/opinions-prototype.png" alt="wellbeeing-opinions-prototype" @click="showSingle('opinions-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl arrow-icon"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl arrow-icon"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="opinions-screen" src="@/assets/wellbeeing/opinions-screen.png" alt="wellbeeing-opinions-screen" @click="showSingle('opinions-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5 mb-4">{{ $t("wellbeeing.prototypes.friends") }}</p>
                    <div id="friends" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="friends-prototype" src="@/assets/wellbeeing/friends-prototype.png" alt="wellbeeing-friends-prototype" @click="showSingle('friends-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl arrow-icon"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl arrow-icon"></i>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="friends-screen" src="@/assets/wellbeeing/friends-screen.png" alt="wellbeeing-friends-screen" @click="showSingle('friends-screen.png')"/>
                        </div>
                    </div>

                    <p class="screen-title mt-5 mb-4">{{ $t("wellbeeing.prototypes.roleRequests") }}</p>
                    <div id="requests" class="row align-items-center">
                        <div class="col-12 col-lg-5">
                            <img class="w-100" id="requests-prototype" src="@/assets/wellbeeing/requests-prototype.png" alt="wellbeeing-requests-prototype" @click="showSingle('requests-prototype.png')"/>
                        </div>
                        <div class="col-12 col-lg-2">
                            <div class="d-none d-lg-flex justify-content-center">
                                <i class="fa fa-arrow-right-long fa-2xl arrow-icon"></i>
                            </div>
                            <div class="d-flex d-lg-none justify-content-center my-3">
                                <i class="fa fa-arrow-down-long fa-2xl arrow-icon"></i>
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

                </section>

                <section id="wellbeeing-learnings" class="my-5">
                    <span class="project-subtitle">{{ $t("wellbeeing.learnings.title") }}</span>
                    <p class="project-text">{{ $t("wellbeeing.learnings.info") }}</p>
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

.arrow-icon {
    color: #6C6C6C;
}


</style>