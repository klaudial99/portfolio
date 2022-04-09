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

.project-subtitle {
    font-size: 200%;
    margin-bottom: 1rem;
}

.project-text {
    text-align: justify;
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