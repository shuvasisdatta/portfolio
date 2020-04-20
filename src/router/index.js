import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { title as APP_TITLE } from "@/../package.json";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/education",
    name: "education",
    component: () => import("@/views/Education.vue"),
    meta: {
      title: "Education",
    },
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("@/views/Skills.vue"),
    meta: {
      title: "Skills",
    },
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("@/views/Portfolio.vue"),
    meta: {
      title: "Portfolio",
    },
  },
  {
    path: "/research",
    name: "research",
    component: () => import("@/views/Research.vue"),
    meta: {
      title: "Research",
    },
  },
  {
    path: "/award&honor",
    name: "award&honor",
    component: () => import("@/views/Award&Honor.vue"),
    meta: {
      title: "Award & Honor",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
    meta: {
      title: "Contact",
    },
  },
  {
    // catch all 404 - define at the very end
    path: "*",
    component: () => import("@/components/404.vue"),
    meta: {
      title: "404",
    },
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

// app title update
router.beforeEach((to, from, next) => {
  document.title = APP_TITLE + " | " + to.meta.title;
  next();
});

export default router;
