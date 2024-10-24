// import './assets/main.css'
import "./assets/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faStop,
    faPlay,
    faSpinner,
    faUpRightAndDownLeftFromCenter,
    faDownLeftAndUpRightToCenter,
    faVolumeLow,
    faVolumeHigh,
    faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
    faStop,
    faPlay,
    faSpinner,
    faUpRightAndDownLeftFromCenter,
    faDownLeftAndUpRightToCenter,
    faVolumeLow,
    faVolumeHigh,
    faVolumeXmark
);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
