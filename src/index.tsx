import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SWUIApp from "components/SWUIApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SWUIApp />
  </React.StrictMode>
);
