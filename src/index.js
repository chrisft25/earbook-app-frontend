import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LoadPage from "./Components/LoadPage";
// const App = lazy(() => import("./App"));
const Register = lazy(() => import("./Pages/Register"));
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Suspense fallback={<LoadPage />}>
    <Register />
  </Suspense>,
  document.getElementById("app")
);
