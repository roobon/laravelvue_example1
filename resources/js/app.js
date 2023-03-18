require("./bootstrap");

import { createApp } from "vue";
import FrontApp from "./FrontApp.vue"; // root app for frontend
import frontrouter from "./frontroutes";
import backrouter from "./backroutes";

import Sidebar from "./back_components/Sidebar.vue";
import Topbar from "./back_components/Topbar.vue";

const appfront = createApp(FrontApp); // Application create for front
const appback = createApp({}); // Application create for back

appback.component("side-bar", Sidebar);
appback.component("top-bar", Topbar);

// app.use(router).mount("#front");

appfront.use(frontrouter);
appfront.mount("#front");

appback.use(backrouter);
appback.mount("#back");
