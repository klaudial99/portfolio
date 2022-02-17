<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">KLAUDIA LASKOWSKA</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PROJECTS</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>


<!--    <nav class="navbar navbar-expand-lg fixed-top">-->

<!--        <div class="col-1">-->
<!--            <router-link :to="{ name: 'FeedView' }">-->
<!--                <img src="@/assets/bee.png" alt="Bee image" height="70">-->
<!--            </router-link>-->
<!--        </div>-->

<!--        <div class="col-md-8 col-sm-6 align-self-center">-->
<!--            <input-->
<!--                type="text"-->
<!--                placeholder="Wyszukaj..."-->
<!--                id="search-input"-->
<!--                class="w-100 shadow"-->
<!--                v-model="searchPhrase"-->
<!--                @keydown.enter="getProfiles"-->
<!--            />-->
<!--        </div>-->

<!--        <div class="col-1 align-self-center">-->
<!--            <font-awesome-icon :icon="['far', 'bell']" size="2x" class="navbar-icon"/>-->
<!--        </div>-->

<!--        <div class="col-2 d-flex align-self-center align-items-center">-->
<!--            <img v-if="this.$store.getters.getProfileImageSrc !== ''" :src="this.$store.getters.getProfileImageSrc" alt="Profile picture"  class="profile-picture" height="40" width="40">-->
<!--            <img v-else src="@/assets/no-photo.png" alt="Profile picture"  class="profile-picture" height="40" width="40">-->
<!--            <div class="dropdown">-->
<!--                <a class="dropdown-toggle ms-2" href="#" role="button" id="dropdown-profile" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                    <span>Cześć</span>-->
<!--                    <span v-if="this.$store.getters.getFirstName">, {{this.$store.getters.getFirstName}}</span>-->
<!--                    <span>!</span>-->
<!--                </a>-->
<!--                <ul class="dropdown-menu" aria-labelledby="dropdown-profile">-->
<!--                    <li>-->
<!--                        <router-link class="dropdown-item" :to="{ name: 'ProfileEdit' }">-->
<!--                            Ustawienia-->
<!--                        </router-link>-->
<!--                    </li>-->
<!--                    <li><a @click="handleLogout" class="dropdown-item">Wyloguj się</a></li>-->
<!--                </ul>-->
<!--            </div>-->
<!--        </div>-->

<!--    </nav>-->
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

</style>