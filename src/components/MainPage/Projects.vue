<template>
    <div class="row align-items-md-center justify-content-sm-center title-row mt-3">
        <div class="col">
            <h1 class="text-center">PROJECTS</h1>
        </div>

    </div>
    <div class="row justify-content-center projects-row mb-3">
        <div class="col-9 col-sm-8 col-md-5 col-lg-4" v-for="project in projects" :key="project.projectId">
            <project-card :project="project" class="mt-3"/>
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
                    pictureSource: '1458.png',
                    title: 'PlanszAppka',
                    year: 2021
                },
                {
                    projectId: 2,
                    pictureSource: '1458.png',
                    title: 'WellBeeing',
                    year: 2021
                },
                {
                    projectId: 3,
                    pictureSource: '1458.png',
                    title: 'WellBeeing',
                    year: 2021
                }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    color: var(--LAVENDER);
}

.title-row {
    height: 35%;
}

.projects-row {
    height: 65%;
}

@media (min-width: 1px) and (max-width: 992px) {
    .title-row {
        height: auto;
    }

    .projects-row {
        height: auto;
    }
}
</style>