import { createRouter, createWebHistory } from "vue-router";

import BackHome from "./back_components/Home.vue";

const routes = [{ path: "/dashboard", component: BackHome }];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
