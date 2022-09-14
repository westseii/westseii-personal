import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//
// icons
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub, faLinkedin);

//
// global css
import "normalize.css/normalize.css";
import "./assets/main.css";

const app = createApp(App);

app.use(router);

//
// component registration; global
app.component("FontAwesomeIcon", FontAwesomeIcon);

//
// ditto
app.mount("#app");
