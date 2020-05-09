<template>
  <section class="section about">
    <div class="container">
      <h2 class="title is-uppercase">Research</h2>
      <div class="columns" style="margin-top: 50px;">
        <div class="column" v-for="research in researches" :key="research.division">
          <span class="fa-stack fa-4x has-text-black-bis">
            <fa-layers class="fa-2x">
              <!-- <fa-icon :icon="['fas', 'circle', 'fa-stack-2x']" /> -->
              <fa-icon :icon="['fas', 'circle']" class="has-text-dark" />
              <!-- class="fas fa-stack-1x fa-inverse has-text-white-bis" -->
              <fa-icon
                :icon="['fas', research.fa_icon]"
                class="has-text-centered has-text-white"
                transform="shrink-8"
              />
            </fa-layers>
          </span>
          <p class="has-text-weight-bold">{{ research.division }}</p>
          <p class="sub-division">{{ research.sub_division }}</p>
        </div>
      </div>
      <br />
      <h2 class="is-size-3 is-uppercase">Publications</h2>
      <br />
      <div class="columns" v-for="(pub, index) in publications" :key="index">
        <div class="column is-four-fifths has-text-left-desktop">
          <span class="tag is-medium is-info">#{{ index + 1 }}</span> &nbsp;
          <a
            id="pub_title"
            class="has-text-white"
            :href="pub.url"
            target="_blank"
          >{{ pub.title }}</a>
        </div>
        <div class="column is-one-fifths has-text-right-desktop">
          <div class="tags has-addons are-medium">
            <span
              class="tag is-capitalized"
              :class="pub.status == 'published' ? 'is-primary' : 'is-warning'"
            >{{ pub.status }}</span>
            <span class="tag is-dark">{{ pub.published_year }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { researches, publications } from "@/assets/js/database";
export default {
  name: "Research",
  data() {
    return {
      researches: researches,
      publications: publications.sort(
        (a, b) => b.published_year - a.published_year
      ),
    };
  },
};
</script>

<style scoped>
.sub-division {
  opacity: 0.8;
}
.tags {
  display: inline-flex;
}

#pub_title:hover {
  text-decoration: none;
  padding: 7px 10px;
  background-color: #363636;
  border-radius: 4px;
}
</style>
