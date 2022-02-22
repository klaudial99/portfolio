<template>
    <layout class="wrapper">
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
}

.wrapper {
    height: 100vh;
    overflow-y: scroll;
    /*scroll-snap-type: y mandatory;*/
    scroll-behavior: smooth;
}

@media (min-width: 768px) {
    .wrapper {
        /*height: 100vh;*/
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
    }
}

body {
    color: var(--BLACK);
}

</style>
<script>
import Layout from "@/components/Layout";
export default {
    components: {
        Layout
    },
    methods: {
        setActiveClass() {
            let current = '';
            const main = document.querySelector('.wrapper');
            let sections = document.querySelectorAll('section')
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (main.scrollTop + 150 > sectionTop ) {
                    current = section.getAttribute('id')
                }
            });

            let navLinks = document.querySelectorAll('span.nav-link')
            navLinks.forEach((li) => {
                li.classList.remove('active');
                if (li.classList.contains(current)) {
                    li.classList.add('active');
                }
            });
        }
    },
    mounted() {
        const main = document.querySelector('.wrapper');
        main.addEventListener('scroll', this.setActiveClass);
    }
}
</script>