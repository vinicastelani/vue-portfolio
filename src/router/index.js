import Vue from "vue";
import VueRouter from "vue-router";

import Roadmap from "@/views/Roadmap/Roadmap.vue";
import Projects from "@/views/Projects/Projects.vue";
import Home from "@/views/Home/HomeComponent.vue";

Vue.use(VueRouter);

let routes = [
  { path: "*", component: () => import("@/views/NotFound/NotFound") },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/roadmap",
    name: "roadmap",
    component: Roadmap,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
