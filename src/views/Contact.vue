<template>
  <section class="section contact">
    <div class="container has-text-white">
      <h2 class="title is-uppercase">Contact</h2>
      <div class="columns">
        <div class="column has-text-warning">
          Phone: +8801676383470, +8801729062888
        </div>
        <div class="column has-text-warning">
          E-mail: shuvasisdatta@gmail.com
        </div>
      </div>

      <form
        @submit="checkContactForm"
        action="https://formspree.io/shuvasisdatta@gmail.com"
        method="POST"
        name="sentMessage"
      >
        <div class="columns">
          <div class="column is-6 control">
            <input
              type="text"
              class="input is-medium"
              :class="errors.includes('name') ? 'is-danger' : 'is-success'"
              name="name"
              v-model="name"
              placeholder="Your Name *"
            />
            <span v-if="errors.includes('name')" class="has-text-danger"
              >Your name is required</span
            >
          </div>
          <div class="column is-6 control">
            <input
              type="email"
              class="input is-medium"
              :class="errors.includes('email') ? 'is-danger' : 'is-success'"
              name="_replyto"
              v-model="email"
              placeholder="Your Email *"
            />
            <span v-if="errors.includes('email')" class="has-text-danger"
              >Your email is required</span
            >
          </div>
        </div>
        <div class="columns">
          <div class="column is-12 control">
            <textarea
              class="textarea is-medium"
              :class="errors.includes('msg') ? 'is-danger' : 'is-success'"
              name="InputMessage"
              v-model="msg"
              placeholder="Your Message *"
            ></textarea>
            <span v-if="errors.includes('msg')" class="has-text-danger"
              >Message Body is required</span
            >
          </div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <button
              type="submit"
              name="submit"
              class="button is-primary is-rounded"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Contact",
  data() {
    return {
      name: null,
      email: null,
      msg: null,
      errors: [],
    };
  },
  methods: {
    checkContactForm: function (e) {
      if (this.name && this.email && this.msg) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("name");
      }
      if (!this.email) {
        this.errors.push("email");
      }
      if (!this.msg) {
        this.errors.push("msg");
      }

      e.preventDefault();
    },
  },
};
</script>

<style scoped>
section.contact {
  /* background-color: #222; */
  background-image: url("../assets/img/map.png");
  background-position: center;
  background-repeat: no-repeat;
}
</style>
