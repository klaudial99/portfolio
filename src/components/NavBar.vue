<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container-fluid p-0 m-0 w-100">
            <div class="row w-100">
                <div class="col-12 col-md-11 offset-md-1 pe-0">
                    <div class="row mx-3 mx-sm-5 ms-md-0">
                        <div class="col text-start d-flex align-items-center">
                            <a class="navbar-brand" href="#">KLAUDIA LASKOWSKA</a>
                        </div>
                        <div class="col text-end p-0 my-auto">
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
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

.navbar {
    height: 10vh;
    min-height: 60px;
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    box-shadow: none;
}
</style>