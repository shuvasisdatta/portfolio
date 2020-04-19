<template>
  <section>
    <div
      class="modal"
      :class="is_modal_active ? 'is-active' : false"
      @keyup.esc="$emit('close')"
      tabindex="-1"
    >
      <div class="modal-background"></div>
      <div class="modal-content has-background-grey-lighter">
        <div class="columns">
          <div class="column is-half">
            <p class="image is-4by3">
              <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" alt /> -->
              <img
                v-if="portfolio"
                :src="require(`@/assets/img/portfolios/${portfolio.image_url}`)"
                alt
              />
            </p>
          </div>
          <div class="column is-half">
            <p v-if="portfolio" class="title has-text-dark">
              {{ portfolio.title }}
            </p>
            <div v-if="portfolio" class="tags are-medium">
              <span class="tag is-success">{{ portfolio.year }}</span>
              <span
                class="tag is-dark"
                v-for="key in portfolio.keys"
                :key="key"
                >{{ key }}</span
              >
            </div>
            <div v-if="portfolio" class="tags has-addons">
              <span class="tag is-dark">Date</span>
              <span class="tag">{{ portfolio.month }}</span>
              <span class="tag is-primary">{{ portfolio.year }}</span>
            </div>

            <article
              v-if="portfolio"
              class="subtitle has-text-dark has-text-justified"
            >
              {{ portfolio.description }}
            </article>
          </div>
        </div>
      </div>
      <button
        class="modal-close is-large has-background-danger"
        @click="$emit('close')"
        aria-label="close"
      ></button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    is_modal_active: {
      type: Boolean,
      default: false,
    },
    portfolio: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
div.modal-content {
  width: 95%;
  margin: 0 auto;
}

div.modal-content .columns {
  margin: 20px;
}

.tags {
  justify-content: center;
}
</style>
