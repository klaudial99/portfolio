<template>
    <div class="container px-sm-0 ">
        <div class="row align-items-md-center justify-content-sm-center title-row mb-3">
            <div class="col">
                <h1 class="text-center">{{ $t("navbar.projects") }}</h1>
            </div>

        </div>
        <div class="row justify-content-center justify-content-md-start mb-3 gy-3">
            <div class="col-10 col-md-6 col-lg-4" v-for="project in projects" :key="project.projectId">
                <project-card :project="project" class="my-3 px-0"/>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col d-flex justify-content-center">
                <p class="d-inline">
                    <span class="align-middle">{{ $t("projects.info") }}</span>
                    <img id="nerd-face" class="align-middle" src="@/assets/nerd-face.png" alt="nerd-face"/>
                </p>
            </div>


        </div>
    </div>

</template>

<script>
import ProjectCard from "@/components/ProjectCard";
export default {
    name: "Projects",
    components: {
        ProjectCard
    },
    data () {
        return {
            projects: [
                {
                    projectId: 1,
                    pictureSource: 'tba.png',
                    title: 'rent4events',
                    year: 2022
                },
                {
                    projectId: 2,
                    pictureSource: 'planszappka.png',
                    title: 'PlanszAppka',
                    year: 2021,
                    about: this.$i18n.t('planszappka.about'),
                },
                {
                    projectId: 3,
                    pictureSource: 'wellbeeing-temp.png',
                    title: 'WellBeeing',
                    year: 2021,
                    about: this.$t('wellbeeing.about'),
                },
                // {
                //     projectId: 4,
                //     pictureSource: 'soon.png',
                //     title: 'More projects soon',
                //     year: ''
                // }
            ]
        }
    },
    computed: {
        language() {
            return this.$store.getters.getLanguage
        }
    },
    watch: {
        language() {
            this.projects[1].about = this.$i18n.t('planszappka.about');
            this.projects[2].about = this.$i18n.t('wellbeeing.about');
        }
    }
}
</script>

<style scoped>

img {
    height: 1em;
    width: auto;
}

p, span {
    font-size: 32px;
}
</style>