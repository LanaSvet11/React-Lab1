import React from "react";
import ReactDOM from "react-dom/client";
import { App, MyApp } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MyApp /> {/* Render the MyApp component */}
  </React.StrictMode>
);
