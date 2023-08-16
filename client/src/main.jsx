import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-max h-max overflow-scroll no-scrollbar scroll-smooth border mx-auto">
        <Router />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
