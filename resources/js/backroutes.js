import { createRouter, createWebHistory } from "vue-router";

import BackHome from "./back_components/Home.vue";
import LoginPage from "./back_components/Login.vue";

const routes = [
    { path: "/dashboard", component: BackHome },
    { path: "/login", component: LoginPage, name: "login" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
