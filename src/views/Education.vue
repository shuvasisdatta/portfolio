<template>
  <section class="section education">
    <div class="container">
      <h2 class="title is-uppercase">Education</h2>
      <p class="is-italic">
        I attended B.Sc. degree under the Department of Electrical & Electronic
        Engineering at Chittagong University of Engineering & Technology
      </p>
      <p style="margin: 30px auto;">
        Here is a list of some online courses I have taken and currently taking
        so far
      </p>
      <br />
      <div v-for="edu in educations" :key="edu.title">
        <div class="columns has-background-black-bis">
          <div class="column has-text-left-desktop">
            <a
              v-if="edu.certificate"
              :href="edu.certificate"
              class="has-text-white"
              target="_blank"
              >{{ edu.title }}</a
            >
            <span v-else class="has-text-white">{{ edu.title }}</span>
          </div>
          <div class="column is-two-fifths">
            <div class="has-text-right-desktop">
              <div class="tags has-addons">
                <span class="tag is-medium is-dark">{{ edu.institute }}</span>
                <span class="tag is-medium is-info">{{ edu.year }}</span>
                <span class="tag is-medium is-success">{{ edu.mark }}</span>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </section>
</template>

<script>
import { educations } from "@/assets/js/database";
export default {
  name: "Education",
  components: {},
  data() {
    return {
      // sort for most recent year to be first
      educations: educations.sort((a, b) => b.year - a.year),
    };
  },
};
</script>

<style lang="scss" scoped>
.tags {
  display: inline-flex;
}
</style>
