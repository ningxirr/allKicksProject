<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a class="navbar-brand" href="/"><img src="src/assets/allKicks.png" alt="Image" height="35" width="100"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="nav-link" href="/aboutus">About us</a>
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
  
      <div class="container col-10 pt-5">
      <div class="row">
        <div class="col-5">
          <form class="signin" @submit.prevent="Login">
            <h1 class="header-sign">Sign In</h1>
            <br><br>
            <h5 class="h5" style="color:black;">Email</h5>
            <input type="email" v-model="formData.email" class="form-control" placeholder="email" >
            <br>
            <h5 class="h5" style="color:black;">Password</h5>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <p>Need an account? <router-link :to="{ path: 'signup', name: 'Signup'} " style="text-decoration : none; color: navy">signup here</router-link></p>
            <button class="btn btn-success btn-block full-width" @click="signIn">Sign In</button>
            
          </form>
        </div>
        <div class="col">
          <img src="../assets/siginpic.png" class="img-fluid" alt="Image" width=500>
        </div>
      </div>
      <br><br>
    </div>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
export default {
    name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
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
      },
      signIn () {
            const auth = getAuth()
            signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
            .then(user => {
            this.$router.replace('/cart')
            })
            .catch(e => {
            alert(e.message)
            })
      }
  },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC&family=Poppins:wght@200;700&display=swap");
/* font responsive for matching with screen */
@media screen and (min-width: 601px) {
  .caption {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  .header-sign {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 80px;
    font-family: "Poppins", sans-serif;
    color: rgb(0, 0, 0);
  }
  .h5 {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    color: #fff;
  }
  .h2 {
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #fff;
  }
}
/* font responsive for matching with screen */
@media screen and (max-width: 600px) {
  .caption {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  .header-sign {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    color: rgb(0, 0, 0);
  }
  .h5 {
    font-size: 0.75rem;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    color: #fff;
  }
  .h2 {
    font-size: 1.75rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #fff;
  }
}

</style>