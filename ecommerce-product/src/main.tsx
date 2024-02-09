import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// styles
import "./styles/global.css";
import "./styles/largeDevice.css";
import "./styles/mobile.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
