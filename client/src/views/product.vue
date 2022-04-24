<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-4">
                <h3><b>{{Product.name}}</b></h3>
                <div>{{Product.description1}}</div>
                <br>
                <h4><b>${{Product.price}}</b></h4>
                <br>
                <!-- <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select size
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">6 UK</a>
                    <a class="dropdown-item" href="#">6.5 UK</a>
                    <a class="dropdown-item" href="#">7 UK</a>
                    <a class="dropdown-item" href="#">7.5 UK</a>
                    <a class="dropdown-item" href="#">8 UK</a>
                </div>
            </div> -->
                <sui-dropdown selection placeholder="Select size" v-model="selected1"
                    :options="['6 UK', '6.5 UK', '7 UK', '7.5 UK', '8 UK', '8.5 UK']" />
                <br><br>
                <router-link :to="{ path: 'signin', name: 'Signin'} " style="text-decoration : none;">
                    <button type="button" class="btn btn-dark"> Add to cart </button>
                </router-link>
            </div>

            <div class="col-8">
                <div class="row">
                    <img v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-middle.png`" alt="...">
                </div>
                <div class="row">
                    <div class="col-6"><img
                            v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-left.png`"
                            class="card-img-top" alt="..."></div>
                    <div class="col-6"><img
                            v-bind:src="`../src/assets/imgproducts/${Product.img}/${Product.img}-right.png`"
                            class="card-img-top" alt="..."></div>
                </div>
            </div>
        </div>
    <br><hr>

    <h4><b>Suggestion</b></h4>
    <div class="container col-9">
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        <div class="col" v-for="product_alias in filterProducts" v-bind:key="product_alias._id" style="text-align : center;">
          <router-link :to="{ path: 'product', name: 'Product', params:{productId: product_alias._id} } " style="text-decoration : none;">
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <img v-bind:src="`./src/assets/imgproducts/${product_alias.img}/${product_alias.img}-middle.png`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ product_alias.name }}</strong></h5>
            <div>{{ product_alias.description1 }}</div>
            <div>{{ product_alias.description2 }}</div>
          </div>
          <h5><b>${{ product_alias.price }}</b></h5>
          <br>
          </div>
          </router-link>
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
        data() {
            return {
                Product: {
                    name: '',
                    description1: '',
                    description2: '',
                    price: '',
                    img: '',
                }
            }
        },
        mounted() {
            axios.get(localhost + this.$route.params.productId)
                .then((response) => {
                    this.Product = response.data
                    console.log(this.Product)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        methods: {

        }
    }
</script>

<style>

</style>