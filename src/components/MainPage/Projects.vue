<template>
    <div>
        <div class="row align-items-md-center justify-content-sm-center title-row mb-3">
            <div class="col">
                <h1 class="text-center">PROJECTS</h1>
            </div>

        </div>
        <div class="row justify-content-center projects-row mb-3">
            <div class="col-12 col-lg-6" v-for="project in projects" :key="project.projectId">
                <project-card :project="project" class="my-3"/>
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
                    title: 'TBA',
                    year: 2022
                },
                {
                    projectId: 2,
                    pictureSource: 'planszappka.png',
                    title: 'PlanszAppka',
                    year: 2021
                },
                {
                    projectId: 3,
                    pictureSource: 'wellbeeing.png',
                    title: 'WellBeeing',
                    year: 2021
                },
                {
                    projectId: 4,
                    pictureSource: 'soon.png',
                    title: 'More projects soon',
                    year: ''
                }
            ]
        }
    }
}
</script>

<style scoped>

@media (min-width: 1500px) {
    .projects-row {
        margin-left: 3rem;
        margin-right: 3rem;
        padding-left: 3rem;
        padding-right: 3rem;
    }
}
</style>