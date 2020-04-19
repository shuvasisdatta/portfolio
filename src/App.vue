<template>
  <div id="app" class="is-family-monospace">
    <Header />
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import {
  title as APP_TITLE,
  developer as APP_DEVELOPER,
  version as APP_VERSION,
} from "@/../package.json";

export default {
  name: "Index",
  data() {
    return {
      app_title: APP_TITLE,
      app_owner: APP_DEVELOPER,
      app_version: APP_VERSION,
    };
  },
  components: {
    Header,
    Navigation,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div#app section.section {
  min-height: calc(100vh - 122px);
  padding-top: 5rem;
}

div#app {
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1d2671,
    #c33764
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
}

div#app .title {
  color: white;
}
</style>
