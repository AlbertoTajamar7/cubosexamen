<template>
    <div>
        <h1>Home components</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm" v-for="cubo in cubos" :key="cubo">
                    <img :src=cubo.imagen alt="">
                    <p class="text-nowrap bd-highlight">{{ cubo.nombre }}</p>
                    <h3>{{ cubo.precio }} €</h3>
                    <button type="button" class="btn btn-primary" v-on:click.prevent="this.$router.push('/detalles/'+cubo.idCubo)">Detalles</button>
                </div>
            
            </div>
        </div>
    </div>
    
</template>
<script>
import axios from "axios";
import Global from "./../Global"
export default {
    
 name:"HomeComponent",
 data(){
    return{
       cubos:[] 
    }
 },
 mounted(){
    let request = "/api/Cubos"
    let url =  Global.apicubos+request
    axios.get(url).then(response =>{
       this.cubos = response.data
    })

 }
}
</script>
<style>
img {
    width: 150px;
    height: 200px;
}
.col-sm{
    border: solid 1px;
    text-align: center;
    
}

</style>