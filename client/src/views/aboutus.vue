<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="navbar-brand" href="/"><img src="src/assets/allKicks.png" alt="Image" height="35"
                        width="100"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/explore">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/aboutus">About us</a>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <a class="nav-link" href="/cart"><i class="bi bi-bag-check-fill"
                                style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            v-model="search">
                        <a class="nav-link" href="/signin"><i class="bi bi-person-circle"
                                style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container col-10 pt-5" >
            <h1><b>About us</b></h1>
            <div class="container row pt-5" style="text-align:center;">
                <div class="col-3">
                    <img src="../assets/aboutus/ya.png" width="150" alt="">
                    <br><br>
                    <p><b>@yaaa.jkj</b></p>
                    <p>Nasreeya Tippayanont</p>
                    <br><br>
                    <img src="../assets/aboutus/yasign.png" width="30" alt="">
                </div>
                <div class="col-3">
                    <img src="../assets/aboutus/ning.png" width="150" alt="">
                    <br><br>
                    <p><b>@ningxirr_</b></p>
                    <p>Pojanut Aramvuttanagul</p>
                    <br><br>
                    <img src="../assets/aboutus/ningsign.png" width="60" alt="">
                </div>
                <div class="col-3">
                    <img src="../assets/aboutus/ohm.png" width="150" alt="">
                    <br><br>
                    <p><b>@ohmabcd</b></p>
                    <p>Phuwit Chantafong</p>
                    <br><br>
                    <img src="../assets/aboutus/ohmsign.png" width="50" alt="">
                </div>
                <div class="col-3">
                    <img src="../assets/aboutus/new.png" width="150" alt="">
                    <br><br>
                    <p><b>@new_norawich</b></p>
                    <p>Norawich Supagitchanchai</p>
                    <br><br>
                    <img src="../assets/aboutus/newsign.png" width="50" alt="">
                </div>
            </div>
            <br><br><br>
            <h3><b>Web programming course project</b></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae vero, quos debitis voluptate
                dolorum libero assumenda tempora sint explicabo recusandae possimus perspiciatis vitae temporibus sit,
                accusamus nemo magni fugit aliquid.</p>
            <br><br>
        </div>
    </div>


</template>

<script>
    export default {
        mounted() {}
    }
</script>

<style>
@import url('https://fonts.google.com/css?family=Poppins');

a{
  margin: 0;
  padding: 0;
  font-family: 'Poppins',sans-serif;
  font-weight: bold;
}


</style>