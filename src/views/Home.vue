<template>
    <div class="home">
        <div class="welcome-page row">
            <div class="col left d-flex justify-content-end align-items-center">
                <span id="left-text">Siema</span>
            </div>
            <div class="col right d-flex justify-content-start align-items-center">
                <span id="right-text">:)</span>
            </div>

        </div>
        <div class="about row">

        </div>
    </div>
</template>

<style>

.welcome-page {
    margin: 0 30px 0 30px;

    height: 90vh;
}

.left {
    background-color: var(--MAIN);
}

.about {
    margin: 0px 30px 0px 30px;
    background-color: grey;
    height: 90vh;
}

#left-text, #right-text {
    font-size: 300%;
}

#left-text {
    color: white;
}

#right-text {
    color: var(--MAIN);
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

