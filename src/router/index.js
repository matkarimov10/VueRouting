import {createRouter, createWebHistory} from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Car from "../view/Car.vue";
import NotFound from "../view/NotFound.vue";
import Dealer from "../view/Dealer.vue";
import Manufacturer from "../view/Manufacturer.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/car/:id",
            name: "Car",
            component: Car,
            children: [
                {
                    path:"dealer",
                    component: Dealer
                },
                {
                    path:"manufacturer",
                    component: Manufacturer
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name:"NotFound",
            component: NotFound
        }
    ]
})

export default router