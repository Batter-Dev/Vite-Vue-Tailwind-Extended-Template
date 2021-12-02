import { createWebHistory, createRouter } from "vue-router";
import Landing from '../components/Landing-Test.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Landing,
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: About,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
