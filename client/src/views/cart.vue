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
        <h1><b>Checkout</b></h1>
        <div class="row pt-5">
            <div class="col-7">
                <div class="mb-3" style="border-right: 1px solid  rgb(176, 175, 175);">
                    <label class="form-label">Contact Infomation</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com">
                    <br>
                    <label class="form-label">Shipping address</label>
                    <div class="row">
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Firstname">
                        </div>
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Lastname">
                        </div>
                    </div><br>
                    <input type="email" class="form-control" placeholder="Company"><br>
                    <input type="email" class="form-control" placeholder="Address"><br>
                    <input type="email" class="form-control" placeholder="Apartment, suit, etc (optional)"><br>
                    <input type="email" class="form-control" placeholder="City"><br>
                    <div class="row">
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Country">
                        </div>
                        <div class="col-6">
                            <input type="email" class="form-control" placeholder="Postal code">
                        </div>
                    </div><br>
                    <input type="email" class="form-control" placeholder="Phone (optional)"><br>
                </div>
                <br><br>
                <button type="button" class="btn btn-dark">Done</button>
            </div>

            <div class="col-4">

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {ref, onBoardMount} from 'vue'
import firebase from 'firebase'

    export default {
        setup(){
            const user = firebase.auth().currentUser
            const name = ref("")

            onBoardMount(()=>{

            })
        }
    }
</script>

<style>
    
</style>