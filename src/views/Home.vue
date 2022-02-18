<template>
    <div class="home">
        <div class="welcome-page row">
            <div class="col left d-flex">
                <div id="left-text" class="text-start">
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
                        Engineer and computer science student based in Wroclaw, Poland.
                    </p>

                </div>

            </div>
            <div class="col right d-flex justify-content-center align-items-center">
                <img
                    data-aos="fade-up-left"
                    data-aos-anchor=".about-text"
                    data-aos-delay="1500"
                    data-aos-duration="700"
                    data-aos-easing="ease"
                    class="picture"
                    src="@/assets/design.svg"
                    alt="svg"
                    height="450"
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
            class="scroll-row row d-flex justify-content-center align-items-center"
        >
            <span>SCROLL DOWN</span>
            <i id="scroll-down-icon" class="fa fa-chevron-down"></i>
        </div>
        <div class="about row">

        </div>
    </div>
</template>

<style>

.welcome-page {
    margin: 0 30px 0 30px;

    height: 80vh;
}

.left {
    position: relative;
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
        transform: translateY(-20px);
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
    position: absolute;
    top: 20%;
    right: 10%;
    /*width: 80%;*/
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

