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
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/explore">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/aboutus">About us</a>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <a class="nav-link" href="/cart"><i class="bi bi-bag-check-fill" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a>
                        <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-person-circle" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-lg-end" style="text-align:right">
                            <li>Welcome {{this.username}} !&nbsp;</li>
                            <li v-if="username"><a class="dropdown-item" @click="logOut()">Signout</a></li>
                            <li v-else><a class="dropdown-item" @click="logIn()">Signin</a></li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container">
            <h1 style="padding: 50px 50px 0px;"><b>About Us</b></h1>
            <div class="row" style="padding-top:40px; margin:5%; text-align: center;">
                <div class="col-sm">
                    <img src="../assets/aboutus/ya.png" width="200" alt="">
                    <br><br>
                    <p class="name"><b>@yaa.jkj</b></p>
                    <p>Nasreeya Tippayanont</p>
                    <img src="../assets/aboutus/yasign.png" width="40" alt="">
                </div>
                <div class="col-sm">
                    <img src="../assets/aboutus/ning.png" width="200" alt="">
                    <br><br>
                    <p class="name"><b>@ningxirr_</b></p>
                    <p>Pojanut Aramvuttanagul</p>
                    <img src="../assets/aboutus/ningsign.png" width="70" alt="">
                </div>
                <div class="col-sm">
                    <img src="../assets/aboutus/ohm.png" width="200" alt="">
                    <br><br>
                    <p class="name"><b>@ohmabcd</b></p>
                    <p>Phuwit Chantafong</p>
                    <img src="../assets/aboutus/ohmsign.png" width="70" alt="">
                </div>
                <div class="col-sm">
                    <img src="../assets/aboutus/new.png" width="200" alt="">
                    <br><br>
                    <p class="name"><b>@new_norawich</b></p>
                    <p>Norawich Supagitchanchai</p>
                    <img src="../assets/aboutus/newsign.png" width="70" alt="">
                </div>
            </div>
            <br><br><br>
            <h3 style="padding:0cm 1cm 0cm 1cm"><b>Web programming course project</b></h3>
            <p style="padding:0cm 1cm 0cm 1cm">Web programming refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security. The most common languages used for Web programming are XML, HTML, JavaScript, Perl 5 and PHP. Web programming is different from just programming, which requires interdisciplinary knowledge on the application area, client and server scripting, and database technology.

        </p>
            <br><br>
        </div>
    </div>


</template>

<script>
import { getAuth } from "firebase/auth";
import {signOut } from 'firebase/auth'
    export default {
        data() {
            return {
                emailregist: '',
                username: '',
            }
        },
        mounted() {
            var auth = getAuth();
            var user = auth.currentUser;
            if (user !== null) {
                this.emailregist = user.email
                this.username = user.email.split('@')[0];
            }
        },
        methods: {
            logIn(){
                this.$router.replace('/signin')
            },
            logOut(){
                const currentUser = getAuth().currentUser
                const auth = getAuth()
                if (currentUser&&auth){
                    signOut(auth)
                    .then(()=>{
                    this.$router.replace('/signin')
                    })
                    .catch((error)=>{
                    alert(error.message)
                    })
                }
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
.name{
    font-size: 20px;
}
h1{
    font-family: "Poppins", sans-serif;
}
h3{
    font-family: "Poppins", sans-serif;
}
p{
    font-family: "Poppins", sans-serif;
}
</style>