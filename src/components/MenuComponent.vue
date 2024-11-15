<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">Cubos </router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Marcas
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div v-for="marca in marcas" :key="marca">
                <li class="nav-item"><router-link :to="'/marca/'+marca"  class="nav-link" >{{marca}}</router-link ></li>

            </div>
          
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Seguridad
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="nav-item"><router-link :to="'/login'"  class="nav-link" >Iniciar sesion</router-link ></li>
                <li class="nav-item"><router-link :to="'/registro'"  class="nav-link" >Registrarse</router-link ></li>


          
        </div>
      </li>
    </ul>
    
  </div>
</nav>

    
</template>
<script>
import axios from 'axios';
import Global from './../Global';
export default{
    name:"MenuComponent",
    data(){
        return{
            marcas:[],
            modelos:[]
        }
    },mounted(){
        let request = "api/Cubos/Marcas"
        let url = Global.apicubos+request
        axios.get(url).then(response=>{
            this.marcas=response.data
            console.log(response.data)
        })
        
        

    }
}
</script>