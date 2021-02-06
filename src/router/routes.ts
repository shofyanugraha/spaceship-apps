import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "routes" */ "@/components/Layouts/Main.vue"),
    children: [
      // ...App.getRoutes(),
      {
        path: "",
        name: "home",
        component: () => import(/* webpackChunkName: "routes" */ "@/views/Starship/Index.vue")
      }
    ]
  }
];

export default routes;
