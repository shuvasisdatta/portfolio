<template>
  <section class="section notFound">
    <Particles />
    <div class="container">
      <fa-icon :icon="['fas', 'robot']" class="robot fa-4x has-text-success" />
      <h2 class="title">No Page Found!</h2>
      <router-link
        to="/"
        class="button is-link is-size-5-tablet is-rounded is-uppercase"
        >Home Page</router-link
      >
    </div>
  </section>
</template>

<script>
import Particles from "@/components/Particles";
export default {
  name: "notFound",
  components: { Particles },
};
</script>

<style scoped>
section.notFound div.container {
  margin-top: -60vh;
}

.robot {
  margin-bottom: 20px;
}
</style>
