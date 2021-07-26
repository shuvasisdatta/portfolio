import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Google Analytics for VueJS
import VueGtag from "vue-gtag"; 

Vue.use(VueGtag, {
  config: { id: "UA-150064197-2" }
}, router);

// custom scss. where the bulma and other css or scss files are included.
import "@/assets/sass/app.scss";

// modular fontawesome integration
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPhoneAlt,
  faCircle,
  faImage,
  faMicrochip,
  faIndustry,
  faUniversity,
  faRobot,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faGoogle,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";

library.add(
  faPhoneAlt,
  faCircle,
  faImage,
  faMicrochip,
  faIndustry,
  faUniversity,
  faRobot,
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faGoogle,
  faSkype,
  faSnowflake,
);
Vue.component("fa-icon", FontAwesomeIcon);
Vue.component("fa-layers", FontAwesomeLayers);
// ./modular fontawesome integration

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
