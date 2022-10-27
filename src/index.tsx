import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout/layout";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import MainPage from "./pages/mainPage/mainPage";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <MainPage />
      </Layout>
    </Provider>
  </React.StrictMode>
);
