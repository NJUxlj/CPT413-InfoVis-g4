import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import routesList from "./routes.js";
import Loading from "../components/Loading";

const Router = () => {
  //懒加载需要Suspense   首次加载要loading一下
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routesList.map(({ path, element }) => {
          return <Route path={path} key={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};
export default Router;
