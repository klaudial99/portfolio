<template>
    <div class="container-fluid px-0">
        <section id="planszappka-header">
            <div class="row py-4 w-100">
                <div class="col-12 col-sm-7 my-4 my-sm-0 text-white d-flex justify-content-center align-items-center">
                    <div class="text-start px-3">
                        <span class="project-title">PlanszAppka</span>
                        <span class="project-subject">UX/UI Design</span>
                    </div>

                </div>
                <div class="col-12 col-sm-5 my-4 my-sm-0">
                    <img id="main-photo" src="@/assets/planszappka/main.png" alt="main-photo"/>
                </div>
            </div>
        </section>

        <section id="planszappka-basic-info" class="mt-5">
            <div class="row d-flex justify-content-center mx-3 mx-md-5 px-3 px-md-3">
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
    </div>
</template>

<script>
export default {
    name: "PlanszAppka"
}
</script>

<style scoped>
#planszappka-header {
    background-color: #19535F;
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

span {
    display: block;
}

.basic-info-header {
    font-weight: 600;
    color: #19535F;
}
</style>