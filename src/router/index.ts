import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ListView from "@/views/ListView.vue";
import DetailPropertyView from "@/views/DetailPropertyView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About us",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "Get In Touch",
      component: ContactView,
    },
    {
      path: "/list",
      children: [
        {
          path: "",
          name: "Property List",
          component: ListView,
        },
        {
          path: ":type/:id",
          name: "Detail Property",
          component: DetailPropertyView,
        },
      ],
    },
  ],
});

export default router;
