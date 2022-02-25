<template>

    <div class="row h-100 w-100 mt-1 mt-lg-0">

        <div class="col-12 col-lg-7 left d-flex justify-content-center align-items-center">
            <div class="row d-flex justify-content-center w-100">
                <div class="col-9">
                    <div id="left-text" class="text-start mt-4">
                        <span
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            id="title"
                            class="title-text"
                        >
                            Hi, I'm Klaudia.
                        </span>
                        <p
                            data-aos="fade-up"
                            data-aos-anchor=".title-text"
                            data-aos-delay="800"
                            data-aos-duration="700"
                            data-aos-easing="ease"
                            id="about"
                            class="about-text"
                        >
                            Engineer and applied computer science student based in Wroclaw, Poland. Great design enthusiast looking for a first job as a UX Designer.
                        </p>

                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-5 right d-flex justify-content-center align-items-start align-items-md-center">
            <img
                data-aos="fade-up-left"
                data-aos-anchor=".about-text"
                data-aos-delay="1500"
                data-aos-duration="700"
                data-aos-easing="ease"
                class="picture"
                src="@/assets/design.svg"
                alt="svg"
                width="450"
                height="auto"
            />
        </div>

    </div>
    <div
        data-aos="fade-up"
        data-aos-anchor=".picture"
        data-aos-delay="2000"
        data-aos-duration="700"
        data-aos-easing="ease"
        class="scroll-row row d-flex justify-content-center align-items-center container-fluid mt-auto"
        type="button"
        @click="scrollDown"
    >
        <span>SCROLL DOWN</span>
        <i id="scroll-down-icon" class="fa fa-chevron-down"></i>
    </div>

</template>

<script>
export default {
    name: "Home",
    methods: {
        scrollDown () {
            document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
            const id = 'projects';
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const yOffset = 0.1*vh;
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + scrollY - yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped>

.left {
    min-height: 30vh;
}

#title {
    font-weight: bold;
    background: rgb(2,84,128);
    font-size: 350%;
    background: linear-gradient(90deg, rgba(2,84,128,1) 0%, rgba(92,9,121,1) 25%, rgba(180,5,114,1) 50%, rgba(255,0,0,1) 75%, rgba(255,154,0,1) 100%);
    -webkit-background-clip: text;
    color: transparent;
}

.picture {
    max-width: 75%;
}

.about-text {
    font-size: 18px;
}

@media (min-width: 1px) and (max-width: 576px) {
    .left {
        position: static;
    }

    #left-text {
        position: static;
        margin-top: 2.5rem;
        text-align: justify;

    }

    #title {
        line-height: 1.1;
    }

    #about {
        margin-top: 1.5rem;
    }

    .picture {
        margin-left: 2rem;
    }
}

@media (min-width: 992px) {
    #left-text {
        position: relative;
        top: -35%;
    }

    .picture {
        position: relative;
        top: 15%;
    }
}

.scroll-row {
    height: 10vh;
}

#scroll-down-icon {
    color: var(--VIOLET);
    animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

</style>