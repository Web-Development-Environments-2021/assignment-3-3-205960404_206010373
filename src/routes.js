import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("./pages/PersonalPage")
  },
  {
    path: "/mymatches",
    name: "mymatches",
    component: () => import("./pages/MyMatches")
  },
  {
    path: "/myplayers",
    name: "myplayers",
    component: () => import("./pages/MyPlayers")
  },
  {
    path: "/currentstage",
    name: "currentstage",
    component: () => import("./pages/CurrentStage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About")
  },
  {
    path: "/myteams",
    name: "myteams",
    component: () => import("./pages/MyTeams")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("./pages/AdminsPage")
  },
  {
    path: "/PersonalPage/:playerID",
    name: "PersonalPage",
    component: () => import("./pages/PersonalPage")
  },
  {
    path: "/TeamPage/:teamID",
    name: "TeamPage",
    component: () => import("./pages/TeamPage")
  },
  
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
