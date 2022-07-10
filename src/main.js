import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import pinia from "./pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import common from "./plugins/common";
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.use(common);
app.mount("#app");
