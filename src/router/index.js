import {createRouter,createWebHistory} from "vue-router"

const routes = [
    {
        path: "/",
        component: ()=>import("../views/Register.vue")
    },
    {
        path: "/home",
        component: ()=>import("../views/MainPanel.vue")
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})