<template>
  <section class="section about">
    <div class="container">
      <h2 class="title is-uppercase">Portfolio</h2>
      <p class="is-italic">
        Some of my Professinoal & University life projects
      </p>
      <br />
      <div id="category" class="tags are-medium">
        <span
          class="tag is-rounded"
          v-for="category in categories"
          :key="category"
          :class="
            selected_category === category ? 'is-success' : 'is-secondary'
          "
          @click="selected_category = category"
          >{{ category }}</span
        >
      </div>
      <br />
      <div class="columns is-multiline">
        <div
          id="portfolio"
          class="column is-one-third"
          @click="
            is_detail_portfolio_active = true;
            selected_portfolio = portfolio.title;
          "
          v-for="portfolio in filtered_portfolios"
          :key="portfolio.title"
        >
          <figure class="image is-5by4">
            <img
              :src="require(`@/assets/img/portfolios/${portfolio.image_url}`)"
            />
          </figure>
          <p class="pf_title">
            {{ portfolio.title }} |
            <span class="tag is-success is-rounded">{{ portfolio.year }}</span>
          </p>
          <p class="pf_category">
            <span class="tag is-secondary">{{ portfolio.category }}</span>
          </p>
          <div class="tags are-medium pf_keys">
            <span
              class="tag is-dark"
              v-for="key in portfolio.keys"
              :key="key"
              >{{ key }}</span
            >
          </div>
        </div>
      </div>

      <DetailPortfolio
        :is_modal_active="is_detail_portfolio_active"
        @close="
          is_detail_portfolio_active = false;
          selected_portfolio = null;
        "
        :portfolio="
          portfolios.find((portfolio) => portfolio.title === selected_portfolio)
        "
      />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import DetailPortfolio from "@/components/DetailPortfolio";
import { portfolios } from "@/assets/js/database";
export default {
  name: "Portfolio",
  components: { DetailPortfolio },
  data() {
    return {
      is_detail_portfolio_active: false,
      selected_portfolio: null,
      selected_category: "All",
      portfolios: portfolios,
    };
  },
  computed: {
    categories() {
      // unique category mapping
      return ["All", ...new Set(this.portfolios.map((x) => x.category))];
    },
    filtered_portfolios() {
      let portfolios = null;

      if (this.selected_category !== "All")
        portfolios = this.portfolios.filter(
          (x) => x.category === this.selected_category
        );
      else portfolios = this.portfolios;

      return portfolios.sort((a, b) => b.year - a.year); // Desc Type Sort
    },
  },
};
</script>

<style scoped>
.tags {
  justify-content: center;
}

#category .tag,
#portfolio {
  cursor: pointer;
}

#portfolio {
  margin: 10px auto;
}

.pf_title,
.pf_category,
.pf_keys {
  margin: 10px auto;
}
</style>
