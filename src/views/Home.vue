<template>
  <section class="section home">
    <Particles />
    <div class="container">
      <h2 class="title is-uppercase is-size-2-tablet has-text-white">
        Welcome to my place!
      </h2>
      <h2 class="title is-uppercase is-size-3-tablet has-text-white">
        It's nice to meet you
      </h2>
      <router-link
        to="/about"
        class="button is-success is-size-5-tablet is-rounded is-uppercase"
        >Explore my world</router-link
      >
    </div>
  </section>
</template>

<script>
import Particles from "@/components/Particles";
export default {
  name: "Home",
  components: { Particles },
};
</script>

<style scoped>
section.home div.container {
  /* margin-top: 150px; */
  margin-top: -60vh;
}

/* remove underline when hover on router-link button */
.button {
  text-decoration: none;
}
</style>
