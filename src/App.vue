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
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-top: 10vh;
    color: var(--BLACK);
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