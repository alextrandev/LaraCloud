import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./components/DefaultLayout.vue"),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import("./pages/Home.vue")
      },
      {
        path: '/images',
        name: 'Images',
        component: () => import("./pages/Images.vue")
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./pages/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("./pages/Signup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;