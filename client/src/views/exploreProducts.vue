<template>

  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>

          </ul>
          <form class="d-flex">
            <a class="nav-link" href="#">Cart</a>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <img src="../assets/homeexplore.jpg" class="img-fluid" alt="Image" height="500" width="420">
    <sui-divider />

    <!-- <sui-card-group :itemsPerRow="3" doubling style="text-align : center;">
        <sui-card v-for="product_alias in filterProducts" v-bind:key="product_alias._id">
          <sui-card-content>
            <sui-image v-bind:src="`./src/assets/imgproducts/${product_alias.img}`" wrapped />
            <sui-card-header>{{ product_alias.name }}</sui-card-header>
            <sui-card-description>
              <p>{{ product_alias.description1 }}</p>
              <p>{{ product_alias.description2 }}</p>
            </sui-card-description>
            
            &nbsp;&nbsp;
            <sui-card-description>
              <h5><b>${{ product_alias.price }}</b></h5>
            </sui-card-description>
          </sui-card-content>
        </sui-card> 
      </sui-card-group> -->
  <div class="row row-cols-3">
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Header</div>
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>
  </div>

  </div>


</template>

<script>
  import axios from 'axios'
  let localhost = "http://localhost:5001/products/"
  export default {
    name: 'Products',
    props: {},
    data() {
      return {
        search: '',
        Products: [],
        // _id: ''
      }
    },
    mounted() {
      axios.get(localhost)
        .then((reponse) => {
          console.log(reponse.data)
          this.Products = reponse.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {

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
</style>