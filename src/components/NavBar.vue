<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container-fluid p-0 m-0 w-100">
            <div class="row w-100">
                <div class="col-12 col-md-11 offset-md-1 pe-0">
                    <div class="row mx-1 mx-sm-5 ms-md-0">
                        <div class="col text-start ms-2">
                            <div class="row">
                                <a class="navbar-brand ps-2 " href="#">KLAUDIA LASKOWSKA</a>
                            </div>

                        </div>
                        <div class="col text-end ms-auto p-0 my-auto">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">PROJECTS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">CONTACT</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    </nav>


<!--    <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--        <div class="container-fluid">-->
<!--            <a class="navbar-brand" href="#">Navbar</a>-->
<!--            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                <span class="navbar-toggler-icon"></span>-->
<!--            </button>-->
<!--            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">-->
<!--                <div class="navbar-nav">-->
<!--                    <a class="nav-link active" aria-current="page" href="#">Home</a>-->
<!--                    <a class="nav-link" href="#">Features</a>-->
<!--                    <a class="nav-link" href="#">Pricing</a>-->
<!--                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
<!--                </div>-->
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

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}
</style>