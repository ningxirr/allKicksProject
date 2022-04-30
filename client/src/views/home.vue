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
              <a class="nav-link" href="/explore">Shop</a>
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
            <!-- <a class="nav-link" href="/signin"><i class="bi bi-person-circle" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a> -->
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
              <li><a class="dropdown-item" @click="logout()">Signout</a></li>
            </ul>
          </form>
        </div>
      </div>
    </nav>

    <div class="bg-img">
      <div class="container">
        <div class="row" style="padding: 2cm">
          <div class="col">
            <h1 class="logo">allKicks All you need</h1>
            <h1 class="caption">You’ll always land on your feet,</h1>
            <h1 class="caption">no matter which path you choose.</h1>
            <h1 class="caption">Wear the shoes to explore.</h1>
            <br />
            <router-link to="/explore">
              <button type="button" class="btn btn-outline-light">
                <a style="padding: 0">Go to Shopping</a>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <section>
      <video class="img-fluid" style="width: 100%" autoplay loop muted>
        <source src="../assets/jordan shoes b-roll.mp4" type="video/mp4" />
      </video>
      <!-- <div class="centered" style="text-align: center">Find your favorite shoes</div> -->
    </section>
    
    <div class="reveal" style="padding: 3cm;">
      <h1 class="logo" style="color:black;text-align: center;">Find your happy place. Find your happy pair. </h1>
      <h1 class="caption" style="color:black;text-align: center;">Lace up your sneaks, get out there and make it happen.</h1>
    </div>
    <!-- <img src="../assets/homepage/road.png" class="img-fluid" alt="Image" > -->

    <div class="reveal bg-color" style="padding:2cm;text-align: center;">
      <div class="row row-cols-1 row-cols-md-3 g-3">
        <img src="../assets/hp-1.jpg" class="img-fluid " alt="Image" />
        <img src="../assets/hp-2.jpg" class="img-fluid " alt="Image" />
        <div class="col">
          <h1 class="logo bg-white" style="color:black;text-align: left; padding:1cm;">EXCLUSIVE <br>DEALS </h1>
          <h1 class="caption" style="text-align: left; padding:2cm 1cm 2cm 1cm;font-size:">The finest deals on the world’s finest brands. Discover the best deals and discounts available on your (soon-to-be) favourite luxury brands.</h1>
        </div>
      </div>
    </div>
    <div class="reveal bg-color" style="padding:0;text-align: center;">
      <img src="../assets/hp-3.png" class="img-fluid " alt="Image" />
    </div>
    <div class="container bg-color reveal" style="margin:2cm;padding:2cm;text-align: center;">
      <h1 class="logo">It’s Not Just An Outfit, It’s An Attitude: Style Tips For The Travis Scott Sneakers</h1>
      <h1 class="caption">Travis Scott is a man that does not let up. He’s constantly creating—music, film, endorsement deals, clothing, and of course, an unending line of luxury kicks. His footwear output ranges from multi-layered challenges to clean minimalist looks, meaning you have a fantastic range of options when it comes to planning your outfit from the shoes up.</h1>
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
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC&family=Poppins:wght@200;700&display=swap");
/* .logo {
  text-align: left;
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #fff;
} */
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
}
.h1 {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
.p2 {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
}
.centered {
  position: absolute;
  color: #fff;
  font-size: 4em;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  transform: translate(-50%, -50%);
}
.bg-img {
  /* background-image: url("../assets/bg-home.png"); */
  position: absolute;
  z-index: 1;
}
.bg-color {
  background-color: black;
  background-size: 100%;
}
.bg-white {
  background-color: rgb(255, 255, 255);
  width: 100%;
}
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>