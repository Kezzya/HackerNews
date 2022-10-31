import ReactDOM from "react-dom/client";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";
import MainPage from "./pages/mainPage/mainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NewsPage } from "./pages/newsPage/newsPage";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        {/*@ts-ignore*/}
        <Route exact path="/">
          <MainPage />
        </Route>
        {/*@ts-ignore*/}
        <Route exact path="/news/:id">
          <NewsPage />
        </Route>
      </Layout>
    </Provider>
  </BrowserRouter>
);
