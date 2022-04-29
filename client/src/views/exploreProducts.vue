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
            <a class="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/explore">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/aboutus">About us</a>
          </li>

        </ul>
        <form class="d-flex">
          <a class="nav-link" href="/cart"><i class="bi bi-bag-check-fill" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
          <!-- <a class="nav-link" href="/signin"><i class="bi bi-person-circle" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a> -->
          <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <i class="bi bi-person-circle" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg-end" style="text-align:right">
            <li>Welcome {{this.username}} !&nbsp;</li>
            <li><a class="dropdown-item" @click="logout()">Signout</a></li>
          </ul>
          

        </form>
      </div>
    </div>
  </nav>


  <div>
      <img src="../assets/homeexplore.jpeg" class="img-fluid" alt="Image" >
      <div class="centered" style="text-align: center">Find your favorite shoes</div>

    <br><br><br>
    <div class="container col-9" style="text-align : center;">
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        <div class="col" v-for="product_alias in filterProducts" v-bind:key="product_alias._id" >
          <router-link :to="{ path: 'product', name: 'Product', params:{productId: product_alias._id} } " style="text-decoration : none;">
          <div class="card text-dark bg-light mb-3 h-100 " style="width: 20rem;">
            <img v-bind:src="`./src/assets/imgproducts/${product_alias.img}/${product_alias.img}-middle.png`" class="card-img-top" alt="..." height="160" width="40">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ product_alias.name }}</strong></h5>
            <div>{{ product_alias.description1 }}</div>
            <div>{{ product_alias.description2 }}</div>
          </div>
          <h5><b>${{ product_alias.price }} {{this.username}}</b></h5>
          <br>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <br><br><br>
    <div style="text-align: center">
        <router-link to="/cart">
          <button type="button" class="btn btn-outline-dark">
            <a>Find more</a>
          </button>
        </router-link>
      </div>
  </div>
  <br><br><br>
    </div>
</template>

<script>
  import axios from 'axios'
  import { getAuth } from "firebase/auth";
  // import { fb } from '../firebase'
  // import * as firebase from "firebase";
  // import 'firebase/auth'
  let localhost = "http://localhost:5001/products/"
  export default {
    name: 'Products',
    props: {},
    data() {
      return {
        username: '',
        search: '',
        Products: []
      }
    },
    mounted() {
      var auth = getAuth();
      var user = auth.currentUser;
      if (user !== null) {
        this.emailregist = user.email
        this.username = user.email.split('@')[0];
      }

      axios.get(localhost)
        .then((reponse) => {
          console.log(reponse.data)
          this.Products = reponse.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods:{
      checkStatus(){
        
      },
      logout(){
        console.log("logout")
        /* fb.auth().signOut()
        .then(() => {
          this.$router.replace('/signin')
        })
        .catch((err)=>{
          console.log(err)
        }) */
        firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/signin')
        });
      }
    },
    computed: {
      filterProducts: function () {
        return this.Products.filter((product) => {
          return product.name.match(this.search) || product.description.match(this.search)
        })
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
a{
  margin: 0;
  padding: 0;
  font-family: 'Poppins',sans-serif;
  font-weight: bold;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 4em;
  font-family: 'Poppins',sans-serif;
  font-weight: bold;
  transform: translate(-50%, -50%);
}
</style>