<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="navbar-brand" href="/"
          ><img
            src="src/assets/allKicks.png"
            alt="Image"
            height="35"
            width="100"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/explore">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/aboutus">About us</a>
            </li>
          </ul>
          <form class="d-flex">
            <a class="nav-link" href="/cart"
              ><i
                class="bi bi-bag-check-fill"
                style="font-size: 1.5rem; color: rgb(255, 255, 255)"
              ></i
            ></a>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="search"
            />
            <a class="nav-link" href="/signin"
              ><i
                class="bi bi-person-circle"
                style="font-size: 1.5rem; color: rgb(255, 255, 255)"
              ></i
            ></a>
          </form>
        </div>
      </div>
    </nav>

    <img src="../assets/home.png" class="img-fluid" alt="Image" />
    <br /><br />
    <div class="container col-8">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <img src="../assets/home-1.png" class="img-fluid" alt="Image" />
        <img src="../assets/home-2.png" class="img-fluid" alt="Image" />
      </div>
      <br />
      <a style="font-size: 1.5rem;">New Arrival "Nike air max 97"</a>
      <p class="p2">
        The design of the shoe is commonly thought to be inspired by the bullet
        trains of Japan, but the design was inspired by mountain bikes. The Air
        Max 97 was Nike's first shoe that introduced full-length air. The Air
        Max 97 also introduced a hidden lacing system. Due to the influence of
        Japanese bullet trains, the Air Max 97 silver colorway was nicknamed the
        "silver bullet."
      </p>
      <br />
      <div style="text-align: center">
        <router-link to="/cart">
          <button type="button" class="btn btn-outline-dark">
            <a>Add to Cart</a>
          </button>
        </router-link>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
let localhost = "http://localhost:5001/products/";
export default {
  name: "Products",
  props: {},
  data() {
    return {
      search: "",
      Products: [],
      // _id: ''
    };
  },
  mounted() {
    axios
      .get(localhost)
      .then((reponse) => {
        console.log(reponse.data);
        this.Products = reponse.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  computed: {
    filterProducts: function () {
      return this.Products.filter((product) => {
        return (
          product.name.match(this.search) ||
          product.description.match(this.search)
        );
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');
*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins',sans-serif;
}
.p2{
  margin: 0;
  padding: 0;
  font-family: 'Poppins',sans-serif;
  font-weight: normal;
}
</style>