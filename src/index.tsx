import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/layout";
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
