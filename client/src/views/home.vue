<template>
  
  <div>

    <img src="../assets/home.png" class="img-fluid" alt="Image" >
    <br><br>
    <div class="container col-8">
      <div class="row row-cols-1 row-cols-md-2 g-4" >
        <img src="../assets/home-1.png" class="img-fluid" alt="Image" >
        <img src="../assets/home-2.png" class="img-fluid" alt="Image" >
      </div>
      <br>
        <h2>New Arrival "Nike air max 97" </h2>
        <p class="p2">The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. The Air Max 97 was Nike's first shoe that introduced full-length air. The Air Max 97 also introduced a hidden lacing system. Due to the influence of Japanese bullet trains, the Air Max 97 silver colorway was nicknamed the "silver bullet."</p>
      <br>
      <div style="text-align:center;">
        <button type="button" class="btn btn-outline-dark">Add to Cart</button>
      </div>
      <br>
        
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
.p2 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>