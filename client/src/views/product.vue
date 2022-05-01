<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a class="navbar-brand" href="/"
          ><img
            src="/src/assets/allKicks.png"
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
              <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/explore">Shop</a>
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

    <div class="container pt-5" style="margin:2cm;">
      <div class="row">
        <div class="col-3" style="padding:2px;">
          <!-- {{Product._id}} -->
          <!-- {{Contact.history[0]}} -->
          <h2 class="h2" style="color:black;">
            <b>{{ Product.name }}</b>
          </h2>
          <div class="caption" style="color:black;">{{ Product.description1 }}</div>
          <br />
          <h4>
            <b>${{ Product.price }}</b>
          </h4>
          <div class="row">
            <br />
            <sui-dropdown
              style="margin-top:1%"
              clearable
              selection
              placeholder="Select size"
              v-model="size"
              :options="['6 UK', '6.5 UK', '7 UK', '7.5 UK', '8 UK', '8.5 UK']"
            />
            <input placeholder="qty" v-model="p_qty" />
            <br /><br />
          </div>
          <!-- <p> Contact {{this.Contact}} </p>
                <p> Product {{this.Product}} </p>
                <p> orderContact {{this.orderContactProduct}} </p> -->
          <br />
          <!-- <router-link :to="{ path: 'cart', name: 'Cart'} " style="text-decoration : none;"> -->
          <router-link to="/cart">
            <button type="button" class="btn btn-dark" @click="AddToCart">
              Add to cart
            </button>
          </router-link>
        </div>
        <div class="col-7" style="margin:0cm 1cm 0cm 1.75cm;">
          <div class="row">
              
            <img
              v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-middle.png`"
              alt="..."
              style="width:80%;"
            />
          </div>
          <div class="row">
            <div class="col-6">
              <img
                v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-left.png`"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="col-6">
              <img
                v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-right.png`"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <h4><b>Suggestion</b></h4>
      <div class="container col-9">
        <div class="row row-cols-1 row-cols-md-3 g-10">
          <div
            class="col"
            v-for="(aRecent, key) in Contact.history"
            :key="key"
            style="text-align: center"
          >
            <!-- <div class="col" v-for = "(aRecent, index) in Contact.history"  v-if="index >= 2" :key='key' style="text-align : center;"> -->
            <!-- <div class="col" v-for = "(aRecent, key) in startFrom(Contact.history, 3)" style="text-align : center;" :key='key'> -->
            <!-- <router-link :to="{ path: 'product', name: 'Product', params:{productId: aRecent.productId} } " style="text-decoration : none;"> -->
            <div
              class="card text-dark bg-light mb-3 h-100"
              style="width: 20rem"
            >
              <img
                v-bind:src="`../src/assets/imgproducts/${aRecent.img}/${aRecent.img}-middle.png`"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>{{ aRecent.name }}{{ aRecent.productId }}</strong>
                </h5>
                <div>{{ aRecent.description1 }}</div>
                <div>{{ aRecent.description2 }}</div>
              </div>
              <h5>
                <b>${{ aRecent.price }}</b>
              </h5>
              <br />
            </div>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
      <!-- 
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        <div class="col" v-for = "(aRecent, key) in Contact.history" :key='key' style="text-align : center;">
          <router-link :to="{ path: 'product', name: 'Product', params:{productId: product_alias._id} } " style="text-decoration : none;">
            <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
                <img v-bind:src="`./src/assets/imgproducts/${aRecent.img}/${aRecent.img}-middle.png`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><strong>{{ aRecent.name }}</strong></h5>
                <div>{{ aRecent.description1 }}</div>
                <div>{{ aRecent.description2 }}</div>
            </div>
            <h5><b>${{ aRecent.price }}</b></h5>
            <br>
            </div>
          </router-link>
        </div>
      </div> -->
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { getAuth } from "firebase/auth";
let localhostproduct = "http://localhost:5001/products/";
let localhostcontact = "http://localhost:5001/contacts/";
let localhostorders = "http://localhost:5001/orders/";
export default {
  name: "Products",
  data() {
    return {
      emailregist: "",
      size: "",
      username: "",
      cId: "",
      Contact: {},
      p_qty: 1,
      Product: {
        _id: "",
        name: "",
        description1: "",
        description2: "",
        price: 0,
        img: "",
      },
    };
  },
  mounted() {
    //get product info.
    axios
      .get(localhostproduct + this.$route.params.productId)
      .then((response) => {
        this.Product = response.data;
        console.log(this.Product);
      })
      .catch((error) => {
        console.log(error);
      });

    //get customer id
    var auth = getAuth();
    var user = auth.currentUser;
    if (user !== null) {
      this.emailregist = user.email;
      this.username = user.email.split("@")[0];
      axios
      .get(localhostcontact + "email/" + this.emailregist)
      .then((response) => {
        this.Contact = response.data;
        this.cId = response.data._id;
        // this.cHistory = response.data.history
        // alert(this.Contact.history)
      })
      .catch((error) => {
        console.log(error);
      });
      //add history of customer
      setTimeout(() => {
        var productId = {
          _id: this.Product._id,
          name: this.Product.name,
          description1: this.Product.description1,
          description2: this.Product.description2,
          price: this.Product.price,
          img: this.Product.img,
        };
        axios
          .post(localhostcontact + this.cId, productId)
          .then((response) => {
            console.log("add to history");
            // alert("history")
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
    }
    
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
          .catch((error) => {
            alert(error.message);
          });
      }
    },
    AddToCart() {
      if (this.username != null) {
        var orderinfo = {
          productId: this.Product._id,
          name: this.Product.name,
          description1: this.Product.description1,
          description2: this.Product.description2,
          price: this.Product.price,
          img: this.Product.img,
          qty: this.Product.p_qty,
          size: this.Product.size,
        };
        axios
          .post(localhostorders + this.cId, orderinfo)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        // this.$router.replace('/cart')
      } else {
        this.$router.replace("/signin");
      }
    },
  },
};
</script>

<style>
@media screen and (min-width: 601px) {
  .caption {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  .logo {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 3.5rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #fff;
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
@media screen and (max-width: 600px) {
  .caption {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  .logo {
    text-align: left;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #fff;
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