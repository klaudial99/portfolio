<template>
    <router-link :to="'/'+this.project.title" class="container">
        <div class="row">
            <div id="img-wrap" class="w-100 h-100 col p-0 mx-3">
                <img :src="this.getImgSrc(this.project.pictureSource)" :alt="this.project.pictureSource">
            </div>

        </div>
        <div class="row mt-2">
            <h3 class="my-0">{{this.project.title}}</h3>
            <span>{{this.project.year}}</span>
        </div>
    </router-link>
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

</style>