<template>
    <div class="layout">
        <nav-bar/>
        <slot/>
        <button class="scroll-top" id="scroll-btn" @click="scrollTop">
            <i class="fa fa-arrow-up"></i>
        </button>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
    name: "Layout",
    components: {
        NavBar,
    },
    methods: {
        handleScroll() {
            let scrollToTopBtn = document.getElementById("scroll-btn")
            if (window.scrollY > 500)
                scrollToTopBtn.classList.add("show-btn")
            else scrollToTopBtn.classList.remove("show-btn")
        },
        scrollTop () {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    },
    mounted() {
        document.addEventListener("scroll", this.handleScroll)
    }
}
</script>

<style scoped>
.scroll-top {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    color: white;
    background-color: #3b3b3b;
    position: fixed;
    bottom: 25px;
    right: 25px;

    z-index: 100;
    opacity: 0;
    transform: translateY(100px);
    transition: all .7s ease
}

.show-btn {
    opacity: 0.75;
    transform: translateY(0)
}
</style>