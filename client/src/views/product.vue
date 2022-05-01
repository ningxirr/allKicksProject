<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a class="navbar-brand" href="/"><img src="/src/assets/allKicks.png" alt="Image" height="35" width="100"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link " href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/explore">Shop</a>
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

    <!-- print product information -->
     <div class="container pt-5" style="margin: 0cm 2cm 0cm 2cm">
        <div class="row">
            <div class="col-3" style="padding: 2px">
                <h3><b>{{Product.name}}</b></h3>
                <div>{{Product.description1}}</div>
                <br>
                <h4><b>${{Product.price}}</b></h4>
                <br>
                <div class="row">
                    <br>
                    <div class="btn-group">
                        <div class="dropdown">
                            <button class="btn btn-outline-dark dropdown-toggle " type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select size ({{Product.size}} UK)
                            </button>
                            <ul class="dropdown-menu text-center" aria-labelledby="dropdownMenu2">
                                <li><a class="dropdown-item" @click="Product.size=6" >6 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=6.5" >6.5 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=7.5" >7.5 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=8" >8 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=8.5" >8.5 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=9" >9 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=9.5" >9.5 UK</a></li>
                                <li><a class="dropdown-item" @click="Product.size=10" >10 UK</a></li>
                            </ul>
                        </div>
                    </div>
                    <br><br>
                </div>
                <br>
                <button type="button" class="btn btn-dark" @click="AddToCart" > Add to cart </button>
            </div>

            <div class="col-7" style="margin: 0cm 1cm 0cm 1.75cm">
          <div class="row">
            <img
              v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-middle.png`"
              alt="..."
              style="width: 80%"
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
    <br><hr>

    <!-- print history of product for customer -->
    <div v-if="username">
        <h4><b>Most Recent</b></h4>
        <br>
        <div class="container" style="text-align: center; align-content: center">
            <div class="row">
            <div
                class="col-sm"
                v-for="(aRecent, key) in Contact.history"
                :key="key"
                style="padding-bottom: 40px"
            >
                <a
                :href="
                    $router.resolve({
                    name: 'Product',
                    params: { productId: aRecent._id },
                    }).href
                "
                style="text-decoration: none"
                >
                <div
                    class="card text-dark bg-light mb-3 h-100 center"
                    style="width: 18rem;margin: 0px 30px 0px 30px;"
                >
                <br />
                <br />
                    <img
                    v-bind:src="`../src/assets/imgproducts/${aRecent.img}/${aRecent.img}-middle.png`"
                    class="card-img-top center"
                    alt="..."
                    style="width: 190px"
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
                    <br />
                    <br />
                </div>
                </a>
            </div>
            </div>
        </div>
    </div>
    
</div>
<br><br><br>
    </div>
</template>

<script>
import axios from 'axios'
import { getAuth } from "firebase/auth";
import {signOut } from 'firebase/auth'
let localhostproduct = "https://allkicks-backend.herokuapp.com/products/"
// let localhostproduct = "https://allkicks-backend.herokuapp.com/products"
let localhostcontact = "https://allkicks-backend.herokuapp.com/contacts/"
let localhostorders = "https://allkicks-backend.herokuapp.com/orders/"
export default {
    name: 'Products',
    data() {
        return {
            emailregist: '',
            username: '',
            cId: '',
            Contact: {},
            Product: {
                _id: '',
                name: '',
                description1: '',
                description2: '',
                p_qty: 1,
                price: 0,
                img: '',
                size: 0
            }
            
        }
    },
    mounted() {
        //get product information
        axios.get(localhostproduct + this.$route.params.productId)
            .then((response) => {
                this.Product = response.data
                this.Product.p_qty = 1
                this.Product.size = ' -'
                console.log(this.Product)
            })
            .catch((error) => {
                console.log(error)
            })
        
        //check user login
        var auth = getAuth();
        var user = auth.currentUser;
        if (user !== null) {
            this.emailregist = user.email
            this.username = user.email.split('@')[0];
            axios.get(localhostcontact+'email/'+this.emailregist)
            .then((response)=>{
                this.Contact = response.data
                this.cId = response.data._id
            })
            .catch((error)=>{
                console.log(error)
            })

            //add history of customer
            setTimeout(()=>{
                var productId = {
                    _id: this.Product._id,
                    name: this.Product.name,
                    description1: this.Product.description1,
                    description2: this.Product.description2,
                    price: this.Product.price,
                    img: this.Product.img
                }
                axios.post(localhostcontact+this.cId, productId)
                .then((response)=>{
                    console.log("add to history")
                })
                .catch((error)=>{
                    console.log(error)
                })
            },1000)
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
        // customer orders this product
        AddToCart(){
            if(this.username!=null){
                var orderinfo = {
                    productId: this.Product._id,
                    name: this.Product.name,
                    description1: this.Product.description1,
                    description2: this.Product.description2,
                    price: this.Product.price,
                    img: this.Product.img,
                    qty: this.Product.p_qty,
                    size: this.Product.size
                }
                // alert(orderinfo.size)
                if(orderinfo.size>0){
                    axios.post(localhostorders+this.cId, orderinfo)
                    .then((response)=>{
                        console.log(response)
                        window.location='/cart'
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                    
                }
                else{
                    alert("Please Select Size")
                } 
            }else{
                this.$router.replace('/signin')
            }
        },
    }
}
</script>

<style>
</style>