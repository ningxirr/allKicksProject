import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


let app
let auth


const firebaseConfig = {
    apiKey: "AIzaSyDIGPP0V-zHGn8tX3MP1SMFoxzNxrVcjkI",
    authDomain: "allkicks-project.firebaseapp.com",
    databaseURL: "https://allkicks-project-default-rtdb.firebaseio.com",
    projectId: "allkicks-project",
    storageBucket: "allkicks-project.appspot.com",
    messagingSenderId: "406888148868",
    appId: "1:406888148868:web:d4ff7b818e1644804237d1"
}; 
  
// Initialize Firebase
initializeApp(firebaseConfig);
auth = getAuth()


onAuthStateChanged(auth, (user)=>{
    if(!app){
        app = createApp(App).use(router).use(FomanticUI).mount('#app')
    }
})

