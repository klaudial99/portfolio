<template>
    <div class="container-fluid px-0">
        <section id="rent4events-header">
            <div class="row py-4">
                <div class="col-12 col-sm-6 col-md-7 my-4 my-sm-0 text-white d-flex justify-content-center align-items-center">
                    <div class="text-start px-3">
                        <span class="project-title">{{ $t("rent4events.heading.title") }}</span>
                        <span class="project-subject text-center text-sm-start">{{ $t("rent4events.heading.subject") }}</span>
                        <span class="mt-2 github-heading text-center text-sm-start">{{ $t("rent4events.heading.code") }}<a href="https://github.com/klaudial99/rent4events-front-mobile" class="fw-bolder github-heading-link">{{ $t("rent4events.heading.link") }}</a></span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-5 my-4 my-sm-0">
                    <img id="rent4events-main-photo" src="@/assets/rent4events/rent4events-main.png" alt="main-photo"/>
                </div>
            </div>
        </section>

        <div class="row section-row">
            <div class="col-10 col-md-9">

                <section id="rent4events-basic-info" class="mt-5">
                    <div class="row w-100 m-0">
                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("rent4events.basicInfo.roleHeading") }}</span>
                            <span>{{ $t("rent4events.basicInfo.roleInfo") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("rent4events.basicInfo.timelineHeading") }}</span>
                            <span>{{ $t("rent4events.basicInfo.timelineInfo") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("rent4events.basicInfo.platformHeading") }}</span>
                            <span>{{ $t("rent4events.basicInfo.platformInfo") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("rent4events.basicInfo.toolsHeading") }}</span>
                            <span>{{ $t("rent4events.basicInfo.toolsInfo") }}</span>
                        </div>
                    </div>
                </section>

                <section id="rent4events-background" class="mt-5">
                    <span class="project-subtitle">{{ $t("rent4events.background.title") }}</span>
                    <p class="project-text">{{ $t("rent4events.background.info") }}</p>
                </section>

                <section id="rent4events-description" class="mt-5">
                    <span class="project-subtitle">{{ $t("rent4events.description.title") }}</span>
                    <p class="project-text">{{ $t("rent4events.description.info1") }}</p>
                    <p class="project-text">{{ $t("rent4events.description.info2") }}</p>
                    <p class="project-text">{{ $t("rent4events.description.info3") }}</p>
                </section>

                <section id="rent4events-improvement" class="mt-5">
                    <span class="project-subtitle">{{ $t("rent4events.improvement.title") }}</span>
                    <p class="project-subtitle-2">{{ $t("rent4events.improvement.subtitle1") }}</p>
                    <p class="project-text">{{ $t("rent4events.improvement.usersInfo1") }}</p>
                    <ul>
                        <li><span>{{ $t("rent4events.improvement.usersList.item1") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.usersList.item2") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.usersList.item3") }}</span></li>
                    </ul>
                    <p class="project-text">{{ $t("rent4events.improvement.usersInfo2") }}</p>
                    <p class="project-subtitle-3">{{ $t("rent4events.improvement.user1") }}</p>
                    <ul>
                        <li><span>{{ $t("rent4events.improvement.user1List.item1") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user1List.item2") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user1List.item3") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user1List.item4") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user1List.item5") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user1List.item6") }}</span></li>
                    </ul>
                    <p class="project-subtitle-3">{{ $t("rent4events.improvement.user2") }}</p>
                    <ul>
                        <li><span>{{ $t("rent4events.improvement.user2List.item1") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user2List.item2") }}</span></li>
                    </ul>
                    <p class="project-subtitle-3">{{ $t("rent4events.improvement.user3") }}</p>
                    <ul>
                        <li><span>{{ $t("rent4events.improvement.user3List.item1") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user3List.item2") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user3List.item3") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.user3List.item4") }}</span></li>
                    </ul>
                    <p class="project-text">{{ $t("rent4events.improvement.usersInfo3") }}</p>
                    <p class="project-subtitle-2">{{ $t("rent4events.improvement.subtitle2") }}</p>
                    <p class="project-text">{{ $t("rent4events.improvement.orderInfo1") }}</p>
                    <ul>
                        <li><span>{{ $t("rent4events.improvement.orderList.item1") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.orderList.item2") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.orderList.item3") }}</span></li>
                        <li><span>{{ $t("rent4events.improvement.orderList.item4") }}</span></li>
                    </ul>
                    <p class="project-text">{{ $t("rent4events.improvement.orderInfo2") }}</p>
                </section>

                <section id="rent4events-current" class="mt-5">
                    <span class="project-subtitle">{{ $t("rent4events.current.title") }}</span>
                    <p class="project-text">
                        {{ $t("rent4events.current.info1") }}
                        <a href="" class="d-inline heroku-link">{{ $t("rent4events.current.link") }}</a>{{ $t("rent4events.current.info2") }}
                    </p>

                    <ul>
                        <li><span>{{ $t("rent4events.current.currentList.item1") }}</span></li>
                    </ul>
                </section>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: "Rent4Events"
}
</script>

<style scoped>
#rent4events-header {
    background-color: var(--RENT4EVENTS);
}

@media (min-width: 1px) and (max-width: 576px) {
    #rent4events-header {
        height: 90vh;
    }
}

#rent4events-main-photo {
    max-height: 50vh;
    max-width: 100%;
}

span {
    display: block;
}

.github-heading {
    color: #f3f3f3;
}

.github-heading-link {
    color: #82d4bb;
    text-decoration: none;
}

.basic-info-header, .project-subtitle {
    color: var(--RENT4EVENTS);
}

.project-subtitle-2 {
    color: var(--RENT4EVENTS-LIGHT);
}

.project-subtitle-3 {
    color: var(--RENT4EVENTS-LIGHT);
}

li {
    color: var(--RENT4EVENTS-LIGHT);
}

.heroku-link {
    color: var(--RENT4EVENTS);
    font-weight: 600;
    text-decoration: none;
}
</style>