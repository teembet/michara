import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/components/home";
import help from "@/components/help";
import menu from "@/components/menulist";
import about from "@/components/about";
import auth from "@/components/auth";
// import Vendor from "@/components/Vendor";
// import Vendor2 from "@/components/Vendor2";
// import Admin from "@/components/Admin";
// import LoginSignup from "@/components/LoginSignup";
// import LoginAdmin from "@/components/LoginAdmin";
// import Dashboard from "@/components/Dashboard";
// import Restaurants from "@/components/Restaurants";
// import Success from "@/components/Success";
// import Failed from "@/components/Failed";
// import Help from "@/components/Help";
// import Track from "@/components/Track";
// import Rep from "@/components/Rep";
// import Forgot from "@/components/Forgot";
// import firebase from "firebase";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    // {
    //   path: "/forgot",
    //   name: "Forgot",
    //   component: Forgot,
    // },
    // {
    //   path: "/rep",
    //   name: "Rep",
    //   component: Rep,
    // },
    // {
    //   path: "/track/:Ref",
    //   name: "Track",
    //   component: Track,
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: "/help",
    //   name: "Help",
    //   component: Help,
    // },
    // {
    //   path: "/failed",
    //   name: "Failed",
    //   component: Failed,
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: "/success",
    //   name: "Success",
    //   component: Success,
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    {
      path: "/menu",
      name: "Menu",
      component: menu,
    },
    {
      path: "/about",
      name: "About",
      component: about,
    },
    {
      path: "/",
      name: "Home",
      component: home,
    },
    {
      path: "/help",
      name: "Help",
      component: help,
    },
    // {
    //   path: "/vendor/:Ref",
    //   name: "Vendor",
    //   component: Vendor,
    // },
    // {
    //   path: "/admin",
    //   name: "Admin",
    //   component: Admin,
    // },
    {
      path: "/loginsignup",
      name: "Auth",
      component: auth,
      meta: {
        requiresGuest: true,
      },
    },
    // {
    //   path: "/adminlogin",
    //   name: "adminlogin",
    //   component: LoginAdmin,
    // },
    // {
    //   path: "/dashboard",
    //   name: "Dashboard",
    //   component: Dashboard,
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: "/restaurants",
    //   name: "Restaurants",
    //   component: Restaurants,
    // },
  ],
  mode: "history",
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!firebase.auth().currentUser) {
//       next({
//         path: "/loginsignup",
//         query: {
//           redirect: to.fullPath,
//         },
//       });
//     } else {
//       next();
//     }
//   } else if (to.matched.some((record) => record.meta.requiresGuest)) {
//     if (firebase.auth().currentUser) {
//       next({
//         path: "/dashboard",
//         query: {
//           redirect: to.fullPath,
//         },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
