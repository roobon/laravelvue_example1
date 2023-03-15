require("./bootstrap");

import { createApp } from "vue";
import FrontApp from "./FrontApp.vue";
import router from "./frontroutes";
import Navbar from "./front_components/Navbar.vue";

const app = createApp(FrontApp);
app.component("nav-bar", Navbar);

// app.use(router).mount("#front");

app.use(router);
app.mount("#front");
