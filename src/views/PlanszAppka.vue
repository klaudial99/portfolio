<template>
    <div class="container-fluid px-0">
        <section id="planszappka-header">
            <div class="row py-4 w-100">
                <div class="col-12 col-sm-7 my-4 my-sm-0 text-white d-flex justify-content-center align-items-center">
                    <div class="text-start px-3">
                        <span class="project-title">{{ $t("planszappka.heading.title") }}</span>
                        <span class="project-subject text-center text-sm-start">{{ $t("planszappka.heading.subject") }}</span>
                        <span class="mt-2 figma-heading text-center text-sm-start">{{ $t("planszappka.heading.figma") }}<a href="https://www.figma.com/proto/53UYySDn8CZLFmW2c6LoLL/Untitled?node-id=0%3A1" class="fw-bolder figma-heading-link">{{ $t("planszappka.heading.link") }}</a></span>
                    </div>

                </div>
                <div class="col-12 col-sm-5 my-4 my-sm-0">
                    <img id="planszappka-main-photo" src="@/assets/planszappka/main.png" alt="main-photo"/>
                </div>
            </div>
        </section>

        <div class="row section-row">
            <div class="col-10 col-md-9">

                <section id="planszappka-basic-info" class="mt-5">
                    <div class="row w-100 m-0">
                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("planszappka.basicInfo.roleHeading") }}</span>
                            <span>{{ $t("planszappka.basicInfo.roleInfo1") }}</span>
                            <span>{{ $t("planszappka.basicInfo.roleInfo2") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("planszappka.basicInfo.timelineHeading") }}</span>
                            <span>{{ $t("planszappka.basicInfo.timelineInfo1") }}</span>
                            <span>{{ $t("planszappka.basicInfo.timelineInfo2") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("planszappka.basicInfo.platformHeading") }}</span>
                            <span>{{ $t("planszappka.basicInfo.platformInfo") }}</span>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 text-start my-3">
                            <span class="basic-info-header">{{ $t("planszappka.basicInfo.toolsHeading") }}</span>
                            <span>{{ $t("planszappka.basicInfo.toolsInfo") }}</span>
                        </div>
                    </div>
                </section>

                <section id="planszappka-background" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.background.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.background.info") }}</p>
                </section>

                <section id="planszappka-problem" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.problem.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.problem.info") }}</p>
                </section>

                <section id="planszappka-goal" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.goal.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.goal.info") }}</p>
                </section>

                <section id="planszappka-target-audience" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.targetAudience.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.targetAudience.info1") }}</p>
                    <p class="project-text">{{ $t("planszappka.targetAudience.info2") }}</p>
                </section>

                <section id="planszappka-in-depth" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.interviews.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.interviews.questions") }}</p>
                    <ul>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item1") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item2") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item3") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item4") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item5") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item6") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item7") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item8") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.questionsList.item9") }}</span></li>
                    </ul>
                    <p class="project-text">{{ $t("planszappka.interviews.conclusions") }}</p>
                    <ul>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item1") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item2") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item3") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item4") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item5") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item6") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.interviews.conclusionsList.item7") }}</span></li>
                    </ul>
                </section>

                <section id="planszappka-personas" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.personas.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.personas.info") }}</p>
                    <img class="img" id="persona-natalia" :src="require('@/assets/planszappka/' + $t('planszappka.personas.personaImgPath1'))" alt="persona-natalia"/>
                    <img class="img mt-4" id="persona-leopold" :src="require('@/assets/planszappka/' + $t('planszappka.personas.personaImgPath2'))" alt="persona-leopold"/>
                </section>

                <section id="planszappka-user-stories" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.userStories.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.userStories.info") }}</p>
                    <ol>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item1") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item2") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item3") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item4") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item5") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item6") }}</span></li>
                        <li><span class="project-text">{{ $t("planszappka.userStories.userStoriesList.item7") }}</span></li>
                    </ol>
                </section>

                <section id="planszappka-wireframes" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.wireframes.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.wireframes.info") }}</p>
                    <img class="img" id="wireframes" src="@/assets/planszappka/wireframes.jpg" alt="planszappka-wireframes"/>
                </section>

                <section id="planszappka-ui" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.ui.title") }}</span>
                    <div class="row">
                        <div class="col-12 col-lg-6 col-xl-5">
                            <span class="ui-heading">{{ $t("planszappka.ui.typography.title") }}</span>
                            <div class="row mt-3">
                                <div class="co-12 col-sm-6">
                                    <span class="typography">{{ $t("planszappka.ui.typography.headings.title") }}</span>
                                    <span id="heading-1" class="mt-3">{{ $t("planszappka.ui.typography.headings.heading1") }}</span>
                                    <span id="heading-2">{{ $t("planszappka.ui.typography.headings.heading2") }}</span>
                                    <span id="heading-3">{{ $t("planszappka.ui.typography.headings.heading3") }}</span>
                                    <span id="heading-4">{{ $t("planszappka.ui.typography.headings.heading4") }}</span>
                                </div>
                                <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <span class="typography">{{ $t("planszappka.ui.typography.bodyText.title") }}</span>
                                    <span id="body-text-1" class="mt-3">{{ $t("planszappka.ui.typography.bodyText.body1") }}</span>
                                    <span id="body-text-2" class="mt-0 mt-md-3">{{ $t("planszappka.ui.typography.bodyText.body2") }}</span>
                                    <span id="body-text-3" class="mt-0 mt-md-3">{{ $t("planszappka.ui.typography.bodyText.body3") }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-7 mt-4 mt-lg-0">
                            <span class="ui-heading">{{ $t("planszappka.ui.colors.title") }}</span>
                            <div class="row">
                                <div class="col-6 mt-3">
                                    <div class="onyx color-box"></div>
                                    <span class="ms-2 mt-2">{{ $t("planszappka.ui.colors.color1") }}</span>
                                </div>
                                <div class="col-6 mt-3">
                                    <div class="beige color-box"></div>
                                    <span class="ms-2 mt-2">{{ $t("planszappka.ui.colors.color2") }}</span>
                                </div>
                                <div class="col-4 mt-3">
                                    <div class="irresistible color-box"></div>
                                    <span class="ms-2 mt-2">{{ $t("planszappka.ui.colors.color3") }}</span>
                                </div>
                                <div class="col-4 mt-3">
                                    <div class="carrot-orange color-box"></div>
                                    <span class="ms-2 mt-2">{{ $t("planszappka.ui.colors.color4") }}</span>
                                </div>
                                <div class="col-4 mt-3">
                                    <div class="black-coffee color-box"></div>
                                    <span class="ms-2 mt-2">{{ $t("planszappka.ui.colors.color5") }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="planszappka-tests-1" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.tests1.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.tests1.info") }}</p>
                    <p class="project-text">{{ $t("planszappka.tests1.scenarios") }}</p>
                    <ol>
                        <li>
                            <span class="fst-italic">{{ $t("planszappka.tests1.scenario1.contextHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.scenario1.contextInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests1.scenario1.taskHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.scenario1.taskInfo") }}</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">{{ $t("planszappka.tests1.scenario2.contextHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.scenario2.contextInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests1.scenario2.taskHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.scenario2.taskInfo") }}</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">{{ $t("planszappka.tests1.scenario3.contextHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.scenario3.contextInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests1.scenario3.taskHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.scenario3.taskInfo") }}</span>
                        </li>
                    </ol>

                    <p class="project-text">{{ $t("planszappka.tests1.conclusions") }}</p>
                    <ol>
                        <li>
                            <span class="project-text">{{ $t("planszappka.tests1.conclusionsList.item1") }}</span>
                        </li>
                        <li class="mt-3">
                            <span class="project-text">{{ $t("planszappka.tests1.conclusionsList.item2") }}</span>
                        </li>
                        <li class="mt-3">
                            <span class="project-text">{{ $t("planszappka.tests1.conclusionsList.item3") }}</span>
                        </li>
                    </ol>

                    <p class="project-text">{{ $t("planszappka.tests1.survey.info") }}</p>
                    <ol>
                        <li>
                            <span class="fst-italic">{{ $t("planszappka.tests1.survey.question1.questionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.survey.question1.questionInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests1.survey.question1.conclusionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.survey.question1.conclusionInfo") }}</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">{{ $t("planszappka.tests1.survey.question2.questionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.survey.question2.questionInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests1.survey.question2.conclusionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.survey.question2.conclusionInfo") }}</span>
                        </li>
                        <li class="mt-3">
                            <span class="fst-italic">{{ $t("planszappka.tests1.survey.question3.questionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.survey.question3.questionInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests1.survey.question3.conclusionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests1.survey.question3.conclusionInfo") }}</span>
                        </li>
                    </ol>
                </section>

                <section id="planszappka-heuristics" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.heuristics.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.heuristics.info") }}</p>
                    <ul>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix1") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix2") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix3") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix4") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix5") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix6") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix7") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix8") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix9") }}</span></li>
                        <li><span>{{ $t("planszappka.heuristics.fixList.fix10") }}</span></li>
                    </ul>
                </section>

                <section id="planszappka-tests-2" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.tests2.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.tests2.info1") }}</p>
                    <ol start="4">
                        <li>
                            <span class="fst-italic">{{ $t("planszappka.tests2.scenario4.contextHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests2.scenario4.contextInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests2.scenario4.taskHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests2.scenario4.taskInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests2.scenario4.conclusionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests2.scenario4.conclusionInfo") }}</span>
                        </li>
                    </ol>

                    <p class="project-text">{{ $t("planszappka.tests2.info2") }}</p>

                    <ol start="5">
                        <li>
                            <span class="fst-italic">{{ $t("planszappka.tests2.scenario5.contextHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests2.scenario5.contextInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests2.scenario5.taskHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests2.scenario5.taskInfo") }}</span>
                            <span class="fst-italic mt-2">{{ $t("planszappka.tests2.scenario5.conclusionHeading") }}</span>
                            <span class="project-text">{{ $t("planszappka.tests2.scenario5.conclusionInfo") }}</span>
                        </li>
                    </ol>
                </section>

                <section id="planszappka-survey" class="mt-5">
                    <span class="project-subtitle">{{ $t("planszappka.survey.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.survey.info1") }}</p>
                    <div class="row">

                        <div class="col-12 col-md-6 mt-3">
                            <ol class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">{{ $t("planszappka.survey.questions.question1") }}</p>
<!--                                        <p>{{$t("planszappka.survey.charts.options1")}}</p>-->
                                        <apexchart type="pie" :options="JSON.parse($t('planszappka.survey.charts.options1'))" :series="series1"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="2" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">{{ $t("planszappka.survey.questions.question2") }}</p>
                                        <apexchart type="pie" :options="JSON.parse($t('planszappka.survey.charts.options2'))" :series="series2"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="3" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">{{ $t("planszappka.survey.questions.question3") }}</p>
                                        <apexchart type="pie" :options="JSON.parse($t('planszappka.survey.charts.options3'))" :series="series3"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="4" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">{{ $t("planszappka.survey.questions.question4") }}</p>
                                        <apexchart type="pie" :options="JSON.parse($t('planszappka.survey.charts.options4'))" :series="series4"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="5" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">{{ $t("planszappka.survey.questions.question5") }}</p>
                                        <apexchart type="pie" :options="JSON.parse($t('planszappka.survey.charts.options5'))" :series="series5"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <div class="col-12 col-md-6 mt-3">
                            <ol start="6" class="charts-list">
                                <li>
                                    <div>
                                        <p class="project-text">{{ $t("planszappka.survey.questions.question6") }}</p>
                                        <apexchart type="pie" :options="JSON.parse($t('planszappka.survey.charts.options6'))" :series="series6"></apexchart>
                                    </div>
                                </li>
                            </ol>
                        </div>

                    </div>
                    <p class="project-text mt-3">{{ $t("planszappka.survey.info2") }}</p>
                    <div class="text-center figma">{{ $t("planszappka.survey.figma1") }}<a href="https://www.figma.com/proto/53UYySDn8CZLFmW2c6LoLL/Untitled?node-id=0%3A1" class="d-inline figma-here">{{ $t("planszappka.survey.link") }}</a>{{ $t("planszappka.survey.figma2") }}</div>
                </section>

                <section id="planszappka-learnings" class="my-5">
                    <span class="project-subtitle">{{ $t("planszappka.learnings.title") }}</span>
                    <p class="project-text">{{ $t("planszappka.learnings.info") }}</p>
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
            series2: [8, 8],
            series3: [8, 6, 2],
            series4: [15, 1],
            series5: [14, 2],
            series6: [11, 5]
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

#planszappka-main-photo {
    width: auto;
    height: 50vh;
}

.ui-heading {
    font-size: 150%;
    font-weight: 600;
}

span {
    display: block;
}

.basic-info-header, .project-subtitle {
    color: var(--PLANSZAPPKA);
}

li {
    color: var(--PLANSZAPPKA-LIGHT);
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