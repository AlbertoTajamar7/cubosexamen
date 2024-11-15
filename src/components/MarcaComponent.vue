<template>
    <div>
        <h1>Cubos de la marca <span style="color: blue;">{{ this.$route.params.nombre }}</span></h1>
        <hr style="color: red; he">
        <div class="container">
            <div class="row">
                <div class="col-sm" v-for="cubo in marca" :key="cubo">
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
import axios from 'axios';
import Global from './../Global';
export default {
    name:"MarcaComponent",
    data(){
        return{
            marca:[]
        }
    },
    mounted(){
        let request = "api/Cubos/CubosMarca/"+this.$route.params.nombre
        let url = Global.apicubos+request
        console.log(url)
        axios.get(url).then(response=>{
            this.marca=response.data
            console.log(response.data)
        })

    },
    watch:{
        "$route.params.nombre"(nextVal,oldVal){
            if (nextVal !=oldVal) {
                this.$router.push('/marca/'+this.$route.params.nombre)
                let request = "api/Cubos/CubosMarca/"+this.$route.params.nombre
                let url = Global.apicubos+request
                axios.get(url).then(response=>{
                this.marca=response.data
                console.log(response.data)
        })
            }
        }
    }
}
</script>
<style>
img {
    width: 100px;
    height: 100px;
}
.col-sm{
    height: 300px;
}
</style>