// AppRouter.tsx
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import VerticalLayout from "../Layouts/VerticalLayout";
import BlankLayout from "../Layouts/BlankLayout";
import { isUserLoggedIn } from "../utility/Utils.ts";
import { Permission } from "../configs/permissions.ts";
import { useUser } from "../utility/hooks/useUser.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Navigate replace to={'/home'} />} />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<RouteWithLayout {...route} />}
        />
      ))}
    </Routes>
  );
};

const RouteWithLayout = (route: any) => {
  const {can} = useUser();
  const Layout = route.meta?.layout ? BlankLayout : VerticalLayout;
  const { element: Element, meta } = route;

  const permission: Permission = meta ? meta.permission : null;

  if (
    (!isUserLoggedIn() && !meta) ||
    (!isUserLoggedIn() && meta && !meta.authRoute && !meta.publicRoute)
  ) {
    return <Navigate to="/login" />;
  } else if (meta && meta.authRoute && isUserLoggedIn()) {
    return <Navigate to="/" />;
  } else if (isUserLoggedIn() && permission && !can(permission) ) {
    return <Navigate to="/misc/not-authorized" />;
  } else {
    return (
      <Layout>
        <Element />
      </Layout>
    );
  }
};
