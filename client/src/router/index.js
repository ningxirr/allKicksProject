import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
// import firebase from 'firebase'
import Cart from '../views/cart.vue'
import Explore from '../views/exploreProducts.vue'
import Home from '../views/home.vue'
import Signin from '../views/signin.vue'
import Signup from '../views/signup.vue'
import Product from '../views/product.vue'
import Aboutus from '../views/aboutus.vue'


//const routerHistory = createWebHistory()

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


/* router.beforeEach((to, from, next) => {
    const currentUser = getAuth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) {
      console.log("You are not authorized to access this area.");
      next('Product')
    } else if (!requiresAuth && currentUser) {
      console.log("You are authorized to access this area.");
      next('cart')
    } else {
      next()
    }
  }) */

export default router