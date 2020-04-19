<template>
  <!-- Navigation -->
  <nav
    class="navbar is-danger is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
          {{ $parent.app_owner }}
        </div>

        <div
          role="button"
          aria-label="menu"
          aria-expanded="false"
          class="navbar-burger burger"
          :class="is_active ? 'is-active' : false"
          data-target="mainNavigation"
          @click="is_active = !is_active"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div
        id="mainNavigation"
        class="navbar-menu"
        :class="is_active ? 'is-active' : false"
      >
        <div class="navbar-start">
          <router-link
            class="navbar-item"
            v-for="menu in menus"
            :key="menu.url"
            :to="menu.url"
            @click="selected_menu = menu"
            >{{ menu.title }}</router-link
          >
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons are-small is-centered">
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
    </div>
  </nav>
</template>

<script>
import { socialProfiles } from "@/assets/js/database";
export default {
  name: "Navigation",
  data() {
    return {
      is_active: false,
      selected_menu: null,
      socialProfiles: socialProfiles,
      menus: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Education",
          url: "/education",
        },
        {
          title: "Skills",
          url: "/skills",
        },
        {
          title: "Portfolio",
          url: "/portfolio",
        },
        {
          title: "Research",
          url: "/research",
        },
        {
          title: "Award & Honor",
          url: "/award&honor",
        },
        {
          title: "Contact",
          url: "/contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$navSelectedOrHoveredColor: cyan;

nav {
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #004e92,
    #000428
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  a {
    &:hover,
    &.router-link-active,
    &.router-link-exact-active {
      cursor: pointer;
      text-decoration: none;
    }
    &.navbar-item.router-link-exact-active.router-link-active {
      color: $navSelectedOrHoveredColor;
    }
  }

  &.navbar .navbar-start > a.navbar-item {
    &:focus,
    &:hover {
      color: $navSelectedOrHoveredColor;
      background-color: transparent;
    }
  }
}
</style>
