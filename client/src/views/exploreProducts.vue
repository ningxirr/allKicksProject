<template>

  <div class="container">

    <img src="../assets/homeexplore.jpeg" class="img-fluid" alt="Image" >
    <br>
    <div class="container col-9">
      <div class="row row-cols-1 row-cols-md-3 g-4" >
        <div class="col" v-for="product_alias in filterProducts" v-bind:key="product_alias._id" style="text-align : center;">
          <router-link :to="{ path: 'product', name: 'Product', params:{productId: product_alias._id} } " style="text-decoration : none;">
          <div class="card text-dark bg-light mb-3 h-100 " style="max-width: 18rem;">
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