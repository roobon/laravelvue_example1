require("./bootstrap");

import { createApp } from "vue";
import FrontApp from "./FrontApp.vue"; // root app for frontend
// import BackApp from "./BackApp.vue"; // root app for backend
import frontrouter from "./frontroutes";
import backrouter from "./backroutes";

import Sidebar from "./back_components/Sidebar.vue";
import BackHome from "./back_components/Home.vue";

const appfront = createApp(FrontApp); // Application create for front
const appback = createApp({}); // Application create for back

appback.component("side-bar", Sidebar);

// app.use(router).mount("#front");

appfront.use(frontrouter);
appfront.mount("#front");

appback.use(backrouter);
appback.mount("#back");
