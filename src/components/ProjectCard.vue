<template>
    <div class="container h-100">
        <div class="row">
            <div id="img-wrap" class="w-100 h-100 col p-0 mx-3">
                <img :src="this.getImgSrc(this.project.pictureSource)" :alt="this.project.pictureSource">
                <p class="img-description">This image looks super neat.</p>
            </div>

        </div>
        <div class="row mt-2">
            <h3 class="my-0">{{this.project.title}}</h3>
            <span>{{this.project.year}}</span>
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
h3, span {
    color: var(--LAVENDER);
}

img {
    width: 100%;
    /*height: 100%;*/
    object-fit: contain;
    border-radius: 20px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

#img-wrap {
    /*height: 20vh;*/
    border-radius: 20px;
    position: relative;
}

.img-description {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(29, 106, 154, 0.72);
    color: #fff;
    visibility: hidden;
    opacity: 0;

    /* transition effect. not necessary */
    transition: opacity .2s, visibility .2s;
}

.img-wrap:hover .img-description {
    visibility: visible;
    opacity: 1;
}
</style>