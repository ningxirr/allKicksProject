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
          <a class="nav-link" href="/cart"><i class="bi bi-bag-check-fill" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
          <a class="nav-link" href="/signin"><i class="bi bi-person-circle" style="font-size: 1.5rem; color: rgb(255, 255, 255);"></i></a>
        </form>
      </div>
    </div>
  </nav>

    <div class="container col-10 pt-5">
        <h1><b>Checkout </b></h1>
        {{this.Order}}
        <div class="row pt-5">
            <div class="col-7" style="border-right: 1px solid  rgb(176, 175, 175); margin-right: 30px;">
                <div class="mb-3">
                    <label class="form-label">Contact Infomation <span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"  v-model="this.emailregist" disabled>
                    <br>
                    <label class="form-label">Shipping address</label>
                    <div class="row">
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Firstname *" v-model="Contact.firstName">
                        </div>
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Lastname *" v-model="Contact.lastName">
                        </div>
                    </div><br>
                    <input type="email" class="form-control" placeholder="Company" v-model="Contact.company"><br>
                    <input type="email" class="form-control" placeholder="Address*" v-model="Contact.address"><br>
                    <input type="email" class="form-control" placeholder="Apartment, suit, etc (optional)" v-model="Contact.appartment"><br>
                    <input type="email" class="form-control" placeholder="City*" v-model="Contact.city"><br>
                    <div class="row">
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Country *" v-model="Contact.country">
                        </div>
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Postal code *" v-model="Contact.postal">
                        </div>
                    </div><br>
                    <input type="email" class="form-control" placeholder="Phone (optional)" v-model="Contact.phone"><br>
                </div>
                <br>
                <button type="button" class="btn btn-dark" @click="AddShipping" >Done</button>
                <br><br>
            </div>
            <!-- {{this.Contact}} -->
<!--             <div class="col">
                <table class="table">
                    <tbody>
                        <tr>
                            <div class="row">
                                <div class="col-4">
                                    <img v-bind:src="`/src/assets/imgproducts/${Contact.order.img}/${Contact.order.img}-middle.png`" class="card-img-top" alt="...">
                                </div>
                                <div class="col">
                                    <h5><b>{{this.Contact.order.name}}</b></h5>
                                    <p>{{this.Contact.order.description1}} {{this.Contact.order.description2}}</p>
                                    <h5><b>${{this.Contact.order.price}}</b> </h5>
                                </div>
                            </div>
                            <hr>
                        </tr>
                        <tr>
                            <div>
                                <p style="float: left;">Subtotal</p><p style="float:right;">$ {{subtotal}}</p>
                            </div>
                            
                            <p>Shipping </p>
                            <hr>
                        </tr>
                        <tr>
                            <p>Total </p>
                        </tr>
                    </tbody>

                </table>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
import { getAuth } from "firebase/auth";
import axios from 'axios'
let localhostcontact = "http://localhost:5001/contacts/"
let localhostorder = "http://localhost:5001/order/"
    export default {
        name: 'Cart',
        data() {
            return {
                emailregist: '',
                Contact : {
                    _id: '',
                    email: '',
                    firstName: '',
                    lastName: '',
                    company: '',
                    address: '',
                    appartment: '',
                    city: '',
                    country: '',
                    postal: '',
                    phone: ''
                },
                Order: {
                    customerId: '',
                    order: []
                }
            }
        },
        mounted() {
            var auth = getAuth();
            var user = auth.currentUser;
            if (user !== null) {
                this.emailregist = user.email;
                console.log(this.emailregist)
            }
            //get customer info
            axios.get(localhostcontact+'email/'+this.emailregist)
            .then((response)=>{
                this.Contact = response.data
                console.log(this.Contact)
            })
            .catch((error)=>{
                console.log(error)
            })

            //get customer order
            axios.get(localhostorder+this.Contact._id)
            .then((response)=>{
                this.Order = response.data
                console.log(`order = ${this.Order}`)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        methods: {
            /* AddShipping(){
                let newContact = {
                    email: this.Contact.email,
                    firstName: this.Contact.firstName,
                    lastName: this.Contact.lastName,
                    company: this.Contact.company,
                    address: this.Contact.address,
                    appartment: this.Contact.appartment,
                    city: this.Contact.city,
                    country: this.Contact.country,
                    postal: this.Contact.postal,
                    phone: this.Contact.phone
                }
                console.log(newContact)
                let mail = /\S+@\S+\.\S+/
                let postal_num = /^\d{5}$/
                let phone_num = /^\d{10}$/
                if(!newContact.phone.match(phone_num)){
                    alert("Please enter 'Phone No' in the correct format and enter only number")
                }
                else if(!newContact.postal.match(postal_num)){
                    alert("Please enter 'Postal' in the correct format and enter only number")
                }
                else if(newContact.firstName!=''||newContact.lastName!=''||newContact.address!=''||newContact.city!=''||newContact.country!=''){
                    if((newContact.email!=''&&newContact.email.match(mail))||newContact.email==''){
                        axios.post(localhost+this.emailregist, newContact)
                        .then((response)=>{
                            console.log(response)
                            alert("succuss")
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                        this.$router.replace('/explore')
                    }
                    else{
                        alert("Please enter 'Email' in the correct format")
                        this.$router.replace('/cart')
                    }
                }
                else{
                    alert("Field cannot be left blank")
                } 
            },
            subtotal(){
                var total
                // console.log(this.Contact.order.size())
                for(var i=0; i<this.Contact.order.size(); i++){

                }
            } */
        }
    }
</script>

<style>
    
</style>