<template>
    <div class="container">
        <div class="row">
            <div id="img-wrap" class="w-100 h-100 col px-0">
                <router-link :to="'/'+this.project.title">
                    <img :src="this.getImgSrc(this.project.pictureSource)" :alt="this.project.pictureSource">
                </router-link>
            </div>

        </div>
        <div class="row mt-2 text-start">
            <div>
                <router-link :to="'/'+this.project.title">
                    <h3 class="my-0 d-inline">{{this.project.title}}</h3>
                </router-link>
                <span class="ms-2">/ {{this.project.year}}</span>
            </div>
            <span class="about mt-2">{{this.project.about}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        project: Object
    },
    methods: {
        getImgSrc(img) {
            return require('@/assets/' + img)
        }
    }
}
</script>

<style scoped>

#img-wrap {
    overflow: hidden;
    margin: 0 12px;
}

img {
    width: 100%;
    height: 100%;
}

#img-wrap img {
    -webkit-transition: .2s ease-in-out;
    transition: .2s ease-in-out;
}

#img-wrap:hover img {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
}

a {
    color: var(--BLACK);
    text-decoration: none !important;
}

.about {
    text-align: justify;
}

</style>