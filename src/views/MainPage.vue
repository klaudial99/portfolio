<template>

    <div class="home container-fluid">
        <div class="row">

            <div class="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center socials pb-5 position-fixed">
                <a href="https://www.linkedin.com/in/klaudia-laskowska-10815022b/" target="_blank" rel="noopener noreferrer" class="d-block my-2">
                    <i class="fa-brands fa-linkedin fa-xl social-icon" size="2x"></i>
                </a>
                <a href="https://github.com/klaudial99" target="_blank" rel="noopener noreferrer" class="d-block my-2">
                    <i class="fa-brands fa-github fa-xl social-icon"></i>
                </a>
            </div>

            <div class="col-12 col-md-11 offset-md-1 px-0">
                <section class="home-section mx-0 mx-sm-5 ms-md-0 pb-sm-5 d-flex flex-column" id="home">
                    <home />
                </section>

                <section class="projects-section row mx-0 mx-sm-5 ms-md-0 pb-sm-5 mt-5 mt-sm-0" id="projects">
                    <projects/>
                </section>

                <section class="contact-section row mx-0 mx-sm-5 ms-md-0 pb-sm-5" id="contact">
                    <contact/>
                </section>
            </div>

        </div>
    </div>
</template>

<style>

.socials {
    height: 90vh;
}

.social-icon {
    color: var(--BLACK);
}

.home-section, .contact-section {
    background-clip: content-box;
    min-height: 90vh;
    scroll-snap-align: start;
}
@media (min-width: 768px) {
    .home-section {
        height: 90vh;
    }
}

.home-section {
    background-color: var(--LAVENDER);
}

</style>

<script>
// @ is an alias to /src
import Home from "@/components/MainPage/Home";
import Projects from "@/components/MainPage/Projects";
import Contact from "@/components/MainPage/Contact";
export default {
    name: 'MainPage',
    components: {
        Home,
        Projects,
        Contact
    },
}
</script>

