<template>
  <section class="section about has-text-white">
    <div class="container">
      <h2 class="title is-uppercase">About</h2>
      <div class="columns">
        <div class="column is-one-quarter is-centered">
          <div class="colums">
            <div class="column">
              <figure class="image is-128x128" style="margin: 0 auto">
                <img
                  class="is-rounded"
                  :src="require(`@/assets/img/${profileImageUrl}`)"
                />
              </figure>
            </div>
            <div class="column">
              <h4 class="has-text-weight-semibold">{{ $parent.app_title }}</h4>
            </div>
            <div class="column">
              <div class="buttons is-centered">
                <a
                  v-for="socialProfile in socialProfiles"
                  :key="socialProfile.url"
                  class="button"
                  :class="socialProfile.bg_class"
                  :href="socialProfile.url"
                  target="_blank"
                >
                  <span class="icon">
                    <fa-icon
                      :icon="[socialProfile.icon_prefix, socialProfile.icon]"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column">
            <article class="has-text-justified">
              Hi, I am Shuvasis Datta graduated in Electrical & Electronic
              Engineering from Chittagong University of Engineering & Technology
              in March 2017. I enjoyed learning and working in Robo Mechatronics
              Association, Bangladesh as IT secretary during my undergraduate. I
              believe in sharing knowledge that's why I am an open source
              minded. I am expert in DCS (Emerson DeltaV S & M Series, ABB
              800xA), PLC (Allen-Bradley, Siemens), SCADA(Indusoft Web Studio,
              HMI (PanelView), Embedded Systems (Microcontroller, Arduino, ESP,
              Raspberry Pi), Robotics, AutoCAD, MATLAB, IoT, and Full Stack App
              Development. I have keen interest in Machine Learning, Image
              Processing, Embedded Systems, Robotics, Automation, and
              Mathematics. Besides, I love to read books, online technical and
              non-technical articles. In short, I enjoy coding, watching movies
              and tv-series in my spare time.
            </article>
          </div>
          <div class="column has-text-left-desktop">
            <a
              class="button is-link is-rounded"
              :href="academicCvUrl"
              target="_blank"
              >Academic CV</a
            >
            &nbsp;
            <a
              class="button is-link is-rounded"
              :href="resumeUrl"
              target="_blank"
              >Professional Resume</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  socialProfiles,
  resumeUrl,
  academicCvUrl,
  profileImageUrl,
} from "@/assets/js/database";
export default {
  name: "About",
  components: {},
  data() {
    return {
      socialProfiles: socialProfiles,
      resumeUrl: resumeUrl,
      academicCvUrl: academicCvUrl,
      profileImageUrl: profileImageUrl,
    };
  },
};
</script>

<style scoped>
section.about {
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1d2671,
    #c33764
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* remove underline when hover on router-link button */
.button {
  text-decoration: none;
}
</style>
