import Vue from "vue";
import App from "./App.vue";
import router from "./router";

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
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faGoogle,
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
  faGoogle
);
Vue.component("fa-icon", FontAwesomeIcon);
Vue.component("fa-layers", FontAwesomeLayers);
// ./modular fontawesome integration

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
