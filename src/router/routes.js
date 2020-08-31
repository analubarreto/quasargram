const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PageHome.vue"),
        path: "/camera",
        component: () => import("pages/PageCamera.vue")
      }
    ]
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
