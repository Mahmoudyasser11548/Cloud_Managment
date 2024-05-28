import { lazy } from "react";

const Home = lazy(() => import("../../views/Home"));
const Login = lazy(() => import("../../views/Login"));
const Error404 = lazy(() => import("../../views/Error404"));
const Error403 = lazy(() => import("../../views/Error403"));
const NotAuthorized = lazy(() => import("../../views/NotAuthorized"));
const SecondPage = lazy(() => import("../../views/SecondPage"));

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
    element: Error404,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/Error403",
    element: Error403,
    meta: {
      layout: "blank",
    },
  },
];

export default routes;
