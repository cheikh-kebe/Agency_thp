import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
import { ThemeContextProvider } from "./Themecontext";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);
