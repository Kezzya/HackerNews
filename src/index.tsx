import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/layout";
import "./index.scss";
import App from "./pages/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
