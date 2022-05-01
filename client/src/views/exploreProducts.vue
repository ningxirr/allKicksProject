<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="navbar-brand" href="/">
          <img
            src="src/assets/allKicks.png"
            alt="Image"
            height="35"
            width="100"
          />
        </a>

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
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/explore"
                >Shop</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/aboutus">About us</a>
            </li>
          </ul>
          <form class="d-flex">
            <a class="nav-link" href="/cart">
              <i
                class="bi bi-bag-check-fill"
                style="font-size: 1.5rem; color: rgb(255, 255, 255)"
              ></i>
            </a>
            <a
              class="nav-link dropdown-toggle"
              id="navbarDarkDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="bi bi-person-circle"
                style="font-size: 1.5rem; color: rgb(255, 255, 255)"
              ></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-lg-end"
              style="text-align: right"
            >
              <li>Welcome {{ this.username }} !&nbsp;</li>
              <li v-if="username">
                <a class="dropdown-item" @click="logOut()">Signout</a>
              </li>
              <li v-else>
                <a class="dropdown-item" @click="logIn()">Signin</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>

    <div>
      <div class="bg-img">
        <div class="container" style="padding: 2cm;text-align:center;">
              <h1 class="logo" style="text-align:center;">Find your favorite shoes.</h1>
              <br />
              <div class="mx-auto">
                <div class="card mb-2">
                  <div class="card-body p-2">
                    <div class="input-group input-group-md">
                      <input
                        type="text"
                        class="form-control form-control-lg rounded"
                        placeholder="Search..."
                        v-model="search"
                        aria-label="Type Keywords"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <section class="intro" style="height: 300px">
        <div
          class="bg-image h-100"
          style="
            background-image: url(https://mdbootstrap.com/img/Photos/new-templates/search-box/img6.jpg);
          "
        >
          <div
            class="mask d-flex align-items-center h-100"
            style="background-color: rgba(0, 0, 0, 0.43)"
          ></div>
        </div>
      </section>
    </div>
    <br />
    <br />
    <br />

    <div class="container" style="text-align: center; align-content: center">
      <div class="row">
        <div
          class="col-sm"
          style="padding-bottom: 40px"
          v-for="product_alias in filterProducts"
          v-bind:key="product_alias._id"
        >
          <router-link
            :to="{
              path: 'product',
              name: 'Product',
              params: { productId: product_alias._id },
            }"
            style="text-decoration: none"
          >
            <div
              class="card text-dark bg-light mb-3 h-100 center"
              style="width: 18rem"
            >
              <br />
              <br />
              <img
                v-bind:src="`./src/assets/imgproducts/${product_alias.img}/${product_alias.img}-middle.png`"
                class="card-img-top center"
                alt="..."
                style="width: 190px"
              />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>{{ product_alias.name }}</strong>
                </h5>
                <div>{{ product_alias.description1 }}</div>
                <div>{{ product_alias.description2 }}</div>
              </div>
              <h5>
                <b>${{ product_alias.price }}</b>
              </h5>
              <br />
              <br />
              <br />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
let localhost = "http://localhost:5001/products/";
export default {
  name: "Products",
  props: {},
  data() {
    return {
      username: "",
      search: "",
      Products: []
    }
  },
  mounted() {
    var auth = getAuth();
    var user = auth.currentUser;
    if (user !== null) {
      this.emailregist = user.email;
      this.username = user.email.split("@")[0];
    }
    axios
      .get(localhost)
      .then(reponse => {
        this.Products = reponse.data;
        console.log();
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    logIn() {
      this.$router.replace("/signin");
    },
    logOut() {
      const currentUser = getAuth().currentUser;
      const auth = getAuth();
      if (currentUser && auth) {
        signOut(auth)
          .then(() => {
            this.$router.replace("/signin");
          })
          .catch(error => {
            alert(error.message);
          });
      }
    }
  },
  computed: {
    filterProducts: function() {
      return this.Products.filter(product => {
        return (
          product.name.toLowerCase().match(this.search.toLowerCase()) ||
          product.description1.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap");
a {
  margin: 0;
  padding-right: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
}
.header {
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: rgb(0, 0, 0);
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.centered {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.15s all ease-in-out;
}
.card:hover {
  transform: scale(1.1);
  z-index: 100;
  background-color: #fff;
}
</style>