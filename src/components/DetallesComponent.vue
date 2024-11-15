<template>
    <div>
        <h1>Cubo Detallado</h1>
        <button v-on:click.prevent="this.$router.push('/marca/'+datos.marca)">Ver Marca</button>
        <div class="card" style="width: 18rem;">
            <img :src=datos.imagen class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">{{ datos.nombre }}</h3>
                <h4 class="card-title">Modelo {{ datos.modelo }}</h4>
                <h4 class="card-title">Color {{ datos.Color }}</h4>
                <h4 class="card-title">{{ datos.precio }}€</h4>
                <h4 class="card-title">Valoracion: {{ datos.valoracion }}</h4>
            </div>
        </div>
        <h2>Comentarios</h2>
        <div class="comentarios" v-for="comentario in comentarios" :key="comentario">
            <h4>IDusuario: {{ comentario.idUsuario }}</h4>
            <p>{{ comentario.comentario }}</p>
            <p>fecha del Comentario: <b> {{comentario.fechaComentario  }}</b></p>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import Global from './../Global';
    export default{
        name:"DetallesComponent",
        data(){
            return{
                datos:[],
                comentarios : []
            }
        },
        mounted(){
            let request ="api/Cubos/"+this.$route.params.idCubo
            let comentario =Global.apicubos+"api/ComentariosCubo/GetComentariosCubo/"+this.$route.params.idCubo
            let url = Global.apicubos+request
            axios.get(url).then(response=>{
                this.datos=response.data
                console.log(response.data)
            }),
            axios.get(comentario).then(response=>{
                this.comentarios=response.data
                console.log(response.data)
            })

        }
    }
</script>
<style>
img{
    width: 150px;
}
.comentarios{
    border: solid 1px;
    border-radius: 2vw;
    width: 30%;
}
.comentarios *{
  margin-left: 2%;
}
</style>
