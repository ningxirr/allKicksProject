import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import Cart from '../views/cart.vue'
import Explore from '../views/exploreProducts.vue'
import Home from '../views/home.vue'
import Signin from '../views/signin.vue'
import Signup from '../views/signup.vue'
import Product from '../views/product.vue'
import Aboutus from '../views/aboutus.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/:catchAll(.*)',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/explore',
        name: 'Explore',
        component: Explore
      },
      {
        path: '/product/:productId',
        name: 'Product',
        component: Product
      },
      {
        path: '/aboutus',
        name: 'Aboutus',
        component: Aboutus
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
          path: '/signin',
          name: 'Signin',
          component: Signin
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router