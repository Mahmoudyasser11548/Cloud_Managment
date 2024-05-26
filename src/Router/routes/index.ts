import { lazy } from "react";

const Home = lazy(() => import("@views/Home"));
const Login = lazy(() => import("@views/Login"));
const Error = lazy(() => import("@views/Error"));
const NotAuthorized = lazy(() => import("@views/NotAuthorized"));
const SecondPage = lazy(() => import("@views/SecondPage"));

const Firewall = lazy(() => import("@views/Firewall"));
const FirewallDetails = lazy(() => import("@views/Firewall/Details"));

const routes = [
  {
    path: "/home",
    element: Home,
    meta: {
      // restricted: true,
    },
  },
  {
    path: "/second-page",
    element: SecondPage,
    meta: {
      // permission: "read_page"
    }
  },
  {
    path: "/firewall",
    element: Firewall,
    meta: {
      // permission: "read_page"
    }
  },
  {
    path: "/firewall-details",
    element: FirewallDetails,
    meta: {
      // permission: "read_page"
    }
  },
  {
    path: "/login",
    element: Login,
    meta: {
      // authRoute: true,
      layout: "blank",
    },
  },
  {
    path: "/misc/not-authorized",
    element: NotAuthorized,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: Error,
    meta: {
      layout: "blank",
    },
  },
];

export default routes;
