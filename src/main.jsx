import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
//Added Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <Analytics />
    </Router>
  </React.StrictMode>
);
