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
              <a class="nav-link" aria-current="page" href="/explore"
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

    <div class="container col-10 pt-5">
        <h1><b>Checkout </b></h1>
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
                <button type="button" class="btn btn-dark" style="background-color:black" @click="UpdateInfo">Update</button> &nbsp;
                <br><br>
            </div>
            <div class="col">
                <!-- if new customer hasn't ordered (order document hasn't created) -->
                <div v-if="Order.order==undefined" style="text-align: center">
                    <br><br><br><br>
                    <p >No order</p><br>
                    <a href="/explore" style="text-decoration: none">
                        <button type="button" class="btn btn-outline-dark" style="margin-left:20px">
                            <a style="padding: 0">Go to Shopping</a>
                        </button>
                    </a>
                </div>
                <!-- if Customer has oredered and showed item -->
                <div v-else-if="Order.order!=0" style="text-align: center">
                    <table class="table">
                        <tbody>
                            <tr v-for = "(aProduct, key) in Order.order" :key='key' > 
                                <div class="row" style="border-bottom: 1pt solid #C0C0C0; margin:15px;">
                                    <div class="col">
                                        <img v-bind:src="`/src/assets/imgproducts/${aProduct.img}/${aProduct.img}-middle.png`" class="card-img-top" alt="...">
                                    </div>
                                    <div class="col" >
                                        <h5><b>{{aProduct.name}} <i class="bi bi-trash-fill" style="color:grey;" @click="editQty(aProduct.productId, aProduct.size, 0)"></i></b></h5>
                                        <p class="p" style="color:black;">{{aProduct.description1}} {{aProduct.description2}}</p>
                                        <div class="input-group input-group-sm">
                                            <span class="input-group-text" id="basic-addon1" style="background-color:black; color:white;">SIZE</span>
                                            <span class="input-group-text" id="basic-addon1" style="background-color:white;">{{aProduct.size}}</span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span class="input-group-text" id="basic-addon1" style="background-color:black; color:white;">QTY</span>
                                            <input type="number" min="1" max="100" style="text-align:right; width:50px;" v-model="aProduct.qty" onkeydown="return false" @change="editQty(aProduct.productId, aProduct.size, aProduct.qty)">  
                                        </div>

                                        <br>
                                        <h5><b>${{aProduct.price}}</b> </h5>
                                    </div>
                                </div >
                            </tr>
                            <tr>
                                <p class="p" style="float: left;">Subtotal</p><p class="p" style="float:right;">$ {{this.subtotal}}</p>
                            </tr>
                            <tr style="border-bottom: 1pt solid #C0C0C0;">
                                <p class="p" style="float: left;">Shipping</p><p class="p" style="float:right;">$ {{this.shipping}}</p>
                            </tr>
                            <tr>
                                <div style="margin-top:10px">
                                    <p style="float: left;">Total</p><h3 style="float:right;"><b>$ {{this.total}}</b></h3>
                                </div>
                            </tr>
                            <div style="text-align:center;">
                                <button type="button" class="btn btn-dark" style="background-color:black" @click="ReceiptPDF">Receipt</button>
                            </div>
                        </tbody>
                    </table>
                </div>
                <!-- if Customer has oredered and deleted item -->
                <div v-else style="text-align: center">
                    <br><br><br><br>
                    <p >No order</p><br>
                    <a href="/explore" style="text-decoration: none">
                        <button type="button" class="btn btn-outline-dark" style="margin-left:20px">
                            <a style="padding: 0">Go to Shopping</a>
                        </button>
                    </a>
                </div>
                <br>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import { getAuth } from "firebase/auth";
import {signOut } from 'firebase/auth'
import axios from 'axios'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
let localhostcontact = "http://localhost:5001/contacts/"
let localhostorder = "http://localhost:5001/orders/"
let localhostupdateorder = "http://localhost:5001/updateorders/"
/* let localhostcontact = "https://allkicks-backend.herokuapp.com/contacts/"
let localhostorder = "https://allkicks-backend.herokuapp.com/orders/"
let localhostupdateorder = "https://allkicks-backend.herokuapp.com/updateorders/" */
    export default {
        name: 'Cart',
        data() {
            return {
                username: '',
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
                Order: {},
                subtotal: 0,
                shipping: 10,
                total: 0,
                orderlength: 0
            }
        },
        mounted() {
            // check user login (show username on navbar)
            var auth = getAuth();
            var user = auth.currentUser;
            if (user !== null) {
                this.emailregist = user.email
                this.username = user.email.split('@')[0];
                console.log("get customer order")
                // get customer detail
                axios.get(localhostcontact+'email/'+this.emailregist)
                .then((response)=>{
                    console.log(this.emailregist)
                    this.Contact = response.data
                    console.log(this.Contact)
                })
                .catch((error)=>{
                    console.log(error)
                })
                setTimeout(()=> {
                    // get orders of customer
                    axios.get(localhostorder+this.Contact._id)
                    .then((response)=>{
                        this.Order = response.data
                        console.log(`order : ${this.Order.order}`)
                        for(var i=0; i<this.Order.order.length; i++){
                            console.log(this.Order.order.price)
                            this.subtotal += parseInt(this.Order.order[i].price*this.Order.order[i].qty)
                        }
                        this.total = this.subtotal+this.shipping
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                },1000)
            }
            else{
                alert("please log in")
                this.$router.replace('/signin')
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
            // customer updated his information
            UpdateInfo(){
                let newContact = {
                    email: this.emailregist,
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
                let postal_num = /^\d{5}$/
                let phone_num = /^\d{10}$/
                if(newContact.firstName!=null&&newContact.lastName!=null&&newContact.address!=null&&newContact.city!=null&&newContact.country!=null&&newContact.postal!=null){
                    if(newContact.firstName!=''&&newContact.lastName!=''&&newContact.address!=''&&newContact.city!=''&&newContact.country!=''&&newContact.postal!=''){
                        if(!newContact.postal.match(postal_num)){
                            alert("Please enter 'Postal' in the correct format and enter only number")
                        }
                        else if((newContact.phone!=null&&newContact.phone.match(phone_num))||newContact.phone==null||newContact.phone==''){
                            axios.post(localhostcontact+'edit/'+this.emailregist, newContact)
                                .then((response)=>{
                                    console.log(response)
                                    alert("update succuss")
                                })
                                .catch((error)=>{
                                    console.log(error)
                                })
                        }
                        else{
                            alert("Please enter 'Phone No' in the correct format and enter only number")
                        }
                    }
                    else{
                        alert("Field cannot be left blank")
                    } 
                }
                else{
                    alert("Field cannot be left blank")
                }
                
            },
            // customer edited quality of his order
            editQty(id, shoesize, q){
                let Orders = {
                    productId: id,
                    size: shoesize,
                    qty: q
                }
                if(!Orders.qty||Orders.qty<0){
                    Orders.qty=0
                }

                axios.post(localhostupdateorder+this.Contact._id, Orders)
                .then((response)=>{
                    console.log(response)
                    this.subtotal = 0
                    for(var i=0; i<this.Order.order.length; i++){
                        console.log(this.Order.order.price)
                        this.subtotal += parseInt(this.Order.order[i].price*this.Order.order[i].qty)
                    }
                    this.total = this.subtotal+this.shipping
                    if(Orders.qty==0){
                        location.reload();
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            },
            // print receipt order
            ReceiptPDF(){
                console.log("RecievePDF")
                
                // get customer detail FROM database
                var ContactReceipt = {}
                axios.get(localhostcontact+'email/'+this.emailregist)
                .then((response)=>{
                    console.log(this.emailregist)
                    ContactReceipt = response.data
                })
                .catch((error)=>{
                    console.log(error)
                })

                // get orders of customer FROM database
                var OrderReceipt = {}
                axios.get(localhostorder+this.Contact._id)
                .then((response)=>{
                    OrderReceipt = response.data
                    console.log(`order : ${OrderReceipt.order}`)
                })
                .catch((error)=>{
                    console.log(error)
                })
                setTimeout(()=> {
                    if(ContactReceipt.firstName!=null && this.subtotal!=0){
                        var receipt = new Array(OrderReceipt.order.length);
                        var length = 75
                        for (var i = 0; i < OrderReceipt.order.length; i++) {
                            receipt[i] = new Array(5);
                            length+=17
                        }

                        for(let i=0; i<OrderReceipt.order.length; i++){
                            receipt[i][0]=OrderReceipt.order[i].name
                            receipt[i][1]=OrderReceipt.order[i].description1
                            receipt[i][2]=OrderReceipt.order[i].size
                            receipt[i][3]=OrderReceipt.order[i].price
                            receipt[i][4]=OrderReceipt.order[i].qty
                        }

                        var doc = new jsPDF()
                        var img = '/src/assets/allKickspdf.png'
                        doc.addImage(img, 'png', 12, 10, 65, 18)
                        doc.setFontSize(12)
                        doc.setFont(undefined, 'bold');
                        doc.text(`Customer:`,15,40)
                        doc.setFont(undefined, 'normal');
                        doc.text(`${ContactReceipt.firstName} ${ContactReceipt.lastName}`,40,40)

                        doc.setFont(undefined, 'bold');
                        doc.text(`Address:`,15,47)
                        doc.setFont(undefined, 'normal');
                        var company, appartment, phone
                        if(ContactReceipt.company==undefined){
                            company = ''
                        }
                        else{
                            company = ContactReceipt.company
                        }
                        if(ContactReceipt.appartment==undefined){
                            appartment = ''
                        }
                        else{
                            appartment = ContactReceipt.appartment
                        }
                        if(ContactReceipt.phone == undefined){
                            phone = '-'
                        }
                        else{
                            phone = ContactReceipt.phone
                        }
                        doc.text(`${company} ${ContactReceipt.address} ${appartment}`,40,47)
                        doc.text(`${ContactReceipt.city}, ${ContactReceipt.country} ${ContactReceipt.postal}`,40,54)

                        doc.setFont(undefined, 'bold');
                        doc.text(`Phone:`,15,61)
                        doc.setFont(undefined, 'normal');
                        doc.text(`${phone}`,40,61)
                        doc.line(15, 67, 190, 67, 'F')

                        autoTable(doc, {
                            head: [['Brand', 'Description', 'Size(UK)', 'Price', 'Qty']],
                            margin: {top:75},
                            body: receipt,
                            theme: 'plain'               
                        })
                        doc.line(15, length, 190, length, 'F')
                        doc.setFont(undefined, 'bold');
                        doc.text(`Subtotal        ${this.subtotal}`, 185, length+12, 'right');
                        doc.text(`Shipping           ${this.shipping}`, 185, length+19, 'right');
                        doc.text(`Total         ${this.total}`, 185, length+26, 'right');
                        doc.save('allKicks-receipt.pdf')
                    }
                },1000)
                
            }
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC&family=Poppins:wght@200;700&display=swap");
    /* font responsive for matching with screen */
    @media screen and (min-width: 801px) {
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
        .h2 {
            font-size: 3rem;
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            color: #fff;
        }
        .p {
            font-size: 1.2rem;
            font-family: "Poppins", sans-serif;
            font-weight: normal;
        }
    }
    /* font responsive for matching with screen */
    @media screen and (max-width: 800px) {
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
        .h2 {
            font-size: 1.75rem;
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            color: #fff;
        }
        .p {
            font-size: 0.75rem;
            font-family: "Poppins", sans-serif;
            font-weight: normal;
        }
    }
</style>