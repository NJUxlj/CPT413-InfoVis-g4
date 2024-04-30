import React, { lazy } from "react";
const Charts = lazy(() => import("../components/Charts"));

const routesList = [
  { path: "/", element: <Charts /> },
];

export default routesList;
