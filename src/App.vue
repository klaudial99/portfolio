<template>
    <layout>
        <router-view/>
    </layout>

</template>

<style>
@import "./assets/colors.css";

html {
    scroll-behavior: smooth;
}

#app {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--BLACK);
}

/*projects*/
.project-title {
    font-size: 300%;
}

.project-subject {
    font-size: 150%;
}

.section-row {
    justify-content: center;
    width: 100%;
    margin: 0;
    text-align: left;
}

.basic-info-header {
    font-weight: 600;
}

.project-subtitle {
    font-size: 200%;
    font-weight: 600;
    margin-bottom: 1rem;
}

.project-subtitle-2 {
    font-weight: 600;
    font-size: 115%;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
}

.project-subtitle-3 {
    font-weight: 500;
    font-size: 105%;
    margin-bottom: 0;
}

li span, li div {
    color: var(--BLACK);
}

.project-text {
    text-align: justify;
}

.red {
    background-color: red;
}

</style>

<script>
import Layout from "@/components/Layout";
export default {
    components: {
        Layout
    }
}
</script>