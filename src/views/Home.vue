<template>
    <div class="home">
        <div class="welcome-page row">
            <div class="col left d-flex">
                <div id="left-text">
                    <span id="title">Hi, I'm Klaudia</span>
                    <p id="about" class="text-start">Engeneer and computer science student based in Wroclaw, Poland.</p>

                </div>

            </div>
            <div class="col right d-flex justify-content-center align-items-center">
                <img src="@/assets/design.svg" alt="svg" height="450" width="450"/>

            </div>

        </div>
        <div class="scroll-row row d-flex justify-content-center align-items-center">
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
    color: red;
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
    width: 70%;
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

