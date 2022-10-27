import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/layout";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import MainPage from "./pages/mainPage/mainPage";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Layout>
      <MainPage />
    </Layout>
  </React.StrictMode>
);
