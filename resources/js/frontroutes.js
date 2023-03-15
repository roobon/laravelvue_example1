import { createRouter, createWebHistory } from "vue-router";

import Home from "./front_components/Home.vue";
import About from "./front_components/About.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
