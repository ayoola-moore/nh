import React from "react";
import { render } from "react-dom";
import App from "./app/app";
import ErrorBoundary from "./components/errorBoundary";
import ErrorMessage from "./components/errorBoundary/renderError";
import * as serviceWorker from "./serviceWorker";

render(
  <ErrorBoundary render={() => <ErrorMessage />}>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);

serviceWorker.register();
