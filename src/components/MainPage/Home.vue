<template>
    <div class="container h-100">
        <div class="row mt-1 mt-lg-0 h-85" >

            <div class="col-12 col-lg-7 d-flex justify-content-center align-items-center">
                <div class="row d-flex justify-content-center">
                    <div class="col-11 col-lg-10">
                        <div id="left-text" class="text-start mt-4">
                            <span
                                v-if="isLoaded"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                                id="title"
                                class="title-text"
                            >
                                Hi, I'm Klaudia.
                            </span>
                            <p
                                v-if="isLoaded"
                                data-aos="fade-up"
                                data-aos-delay="800"
                                data-aos-duration="700"
                                data-aos-easing="ease"
                                id="about"
                                class="about-text"
                            >
                                {{ $t("home.about") }}
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-5 d-flex justify-content-center align-items-start align-items-md-center">
                <img
                    v-if="isLoaded"
                    data-aos="fade-up-left"
                    data-aos-delay="1500"
                    data-aos-duration="700"
                    data-aos-easing="ease"
                    class="picture"
                    src="@/assets/design.svg"
                    alt="svg"
                    width="450"
                />
            </div>

        </div>
        <div
            data-aos="fade-up"
            data-aos-anchor=".picture"
            data-aos-delay="2000"
            data-aos-duration="700"
            data-aos-easing="ease"
            class="row d-flex justify-content-center align-items-center container-fluid h-15 pb-3 mx-0 px-0"
            type="button"
            @click="scrollDown"
        >
            <span>SCROLL DOWN</span>
            <i id="scroll-down-icon" class="fa fa-chevron-down p-0"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            isLoaded: false
        }
    },
    methods: {
        scrollDown () {
            document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
            const id = 'projects';
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const yOffset = 0.1*vh;
            const element = document.getElementById(id);
            const y = element.
            getBoundingClientRect().top + scrollY - yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    },
    mounted() {
        this.isLoaded = true
    }
}
</script>

<style scoped>

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
    text-align: justify;
}

@media (min-width: 1px) and (max-width: 576px) {
    #title {
        line-height: 1.1;
    }

    #about {
        margin-top: 1.5rem;
    }
}

@media (min-width: 992px) {
    #left-text {
        position: relative;
        top: -15%;
    }

    .picture {
        position: relative;
        top: 15%;
    }
}

#scroll-down-icon {
    color: var(--VIOLET);
    animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
    0%, 100% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(-15px);
    }
}

.h-85 {
    height: 85%;
}

.h-15 {
    height: 15%;
}

</style>