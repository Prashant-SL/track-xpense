import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="text-primary-900 w-max px-4 h-max overflow-scroll no-scrollbar scroll-smooth mt-2 border-2 mx-auto">
        <Router />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
