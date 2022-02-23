<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navbar">
        <div class="container-fluid p-0 m-0 w-100">
            <div class="row w-100">
                <div class="col-12 col-md-11 offset-md-1 pe-0">
                    <div class="row mx-1 mx-sm-5 ms-md-0">
                        <div class="col text-start ms-2">
                            <div class="row">
                                <a class="navbar-brand ps-2 me-0" href="#">KLAUDIA LASKOWSKA</a>
                            </div>

                        </div>
                        <div class="col text-end ms-auto p-0 my-auto">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <span class="nav-link active clickable home ps-0 me-3 me-lg-0" @click="scrollTo('home')" aria-current="page">HOME</span>
                                    </li>
                                    <li class="nav-item">
                                        <span class="nav-link clickable projects ps-0 ms-3 me-3 me-lg-0" @click="scrollTo('projects')">PROJECTS</span>
                                    </li>
                                    <li class="nav-item">
                                        <span class="nav-link clickable contact ps-0 ms-3 me-3 me-lg-0" @click="scrollTo('contact')">CONTACT</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    </nav>
</template>

<script>

export default {
    name: "NavBar",
    methods: {
        scrollTo(id) {
            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const yOffset = -0.1*vh;
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        },
        setActiveClass () {
            window.onscroll = () => {
                let current = "";

                let sections = document.querySelectorAll('section')
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
                    const yOffset = 0.1*vh;
                    if (scrollY + yOffset >= sectionTop ) {
                        current = section.getAttribute("id"); }
                });

                let navLinks = document.querySelectorAll('span.nav-link')
                navLinks.forEach((li) => {
                    li.classList.remove("active");
                    if (li.classList.contains(current)) {
                        li.classList.add("active");
                    }
                });
            };
        }
    },
    mounted() {
        this.setActiveClass()
    }
}
</script>

<style scoped>

.navbar {
    min-height: max(60px, 10vh);
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    box-shadow: none;
}

.navbar-brand {
    font-size: 18px;
}

.clickable {
    cursor: pointer;
}

</style>