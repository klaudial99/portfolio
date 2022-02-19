<template>
    <div class="home container-fluid mw-100">
        <div class="row ">
            <div class="col-md-1 d-none d-md-flex flex-column justify-content-center align-items-center socials pb-5 position-fixed">
                <a href="https://www.linkedin.com/in/klaudia-laskowska-10815022b/" target="_blank" rel="noopener noreferrer" class="d-block my-2">
                    <i class="fa-brands fa-linkedin fa-xl social-icon" size="2x"></i>
                </a>
                <a href="https://github.com/klaudial99" target="_blank" rel="noopener noreferrer" class="d-block my-2">
                    <i class="fa-brands fa-github fa-xl social-icon"></i>
                </a>

            </div>
            <div class="col-12 col-md-11 offset-md-1">
                <div class="welcome-page mx-3 mx-sm-5 ms-md-0 pb-sm-5 d-flex flex-column">
                    <div class="row">
                        <div class="col-12 col-lg-6 left d-flex justify-content-center align-items-center">
                            <div class="row justify-content-center">
                                <div class="col-11 col-sm-10">
                                    <div id="left-text" class="text-start ">
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
                                            Engineer and computer science student based in Wroclaw, Poland. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla purus vitae pharetra varius. Phasellus ut lobortis neque. Donec iaculis augue vitae massa blandit, ac dignissim erat faucibus. Vestibulum dignissim erat consequat elit tristique, vel consequat diam luctus.
                                        </p>

                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-12 col-lg-6 right d-flex justify-content-center align-items-start align-items-md-center">
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
                    >
                        <span>SCROLL DOWN</span>
                        <i id="scroll-down-icon" class="fa fa-chevron-down"></i>
                    </div>
                </div>

                <div class="about row">

                </div>
            </div>
        </div>

    </div>
</template>

<style>

.welcome-page {
    background-color: var(--LAVENDER);
    background-clip: content-box;
    height: 90vh;
}

.left {
    /*position: relative;*/
    min-height: 30vh;
}

.scroll-row {
    height: 10vh;
}

#scroll-down-icon {
    color: #B40572;
    animation: pulse-animation 2s infinite;

}

@keyframes pulse-animation {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

.about {
    margin: 0px 30px 0px 30px;
    background-color: grey;
    height: 90vh;
}

#title {
    font-weight: bold;
    background: rgb(2,84,128);
    font-size: 400%;
    background: linear-gradient(90deg, rgba(2,84,128,1) 0%, rgba(92,9,121,1) 25%, rgba(180,5,114,1) 50%, rgba(255,0,0,1) 75%, rgba(255,154,0,1) 100%);
    -webkit-background-clip: text;
    color: transparent;

}

#left-text {
    /*position: absolute;*/
    /*top: 20%;*/
    /*right: 15%;*/
    /*width: 80%;*/
}

#about {
    text-align: justify;
}

@media (min-width: 1px) and (max-width: 576px) {
    .left {
        position: static;
    }

    #left-text {
        position: static;
        margin-top: 2.5rem;
    }

    #title {
        line-height: 1.1;
    }

    #about {
        margin-top: 1.5rem;
    }
}

.picture {
    max-width: 80%;
}

.social-icon {
    color: var(--BLACK);
}

.socials {
    height: 90vh;
}

</style>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
    }
}
</script>

