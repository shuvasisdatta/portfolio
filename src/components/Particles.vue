<template>
  <div :id="id"></div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import "particles.js/particles";
import particlesJson from "@/assets/js/particles.json";

export default {
  name: "Particles",
  props: {
    id: {
      type: String,
      default: "particles-js",
    },
  },
  mounted() {
    window.particlesJS(this.id, particlesJson);
  },
};
</script>

<style scoped>
div#particles-js {
  height: calc(100vh - 20vh);
}
</style>
