import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MarcaComponent from "./components/MarcaComponent.vue";
import DetallesComponent from "./components/DetallesComponent.vue";
import LoginComponent from "./components/Login.vue";
import RegistroComponent from "./components/Registro.vue"

const myRoutes = [
    {
        path: "/", component : HomeComponent
    },
    {
        path: "/marca/:nombre?", component : MarcaComponent
    },
    {
        path: "/detalles/:idCubo?", component : DetallesComponent
    },
    {
        path: "/login", component : LoginComponent
    },
    {
        path: "/registro", component : RegistroComponent
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router
