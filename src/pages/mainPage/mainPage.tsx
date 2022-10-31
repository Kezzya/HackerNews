import { useEffect } from "react";
import { NewsList } from "../../components/newsList/newsList";
import styles from "./mainPage.module.scss";
import Loader from "../../components/loader/loader";
import {
  cleanStore,
  fetchData,
  getNews,
  cleanAllComments,
} from "../../store/mainStore";
import { useAppDispatch, useAppSelector } from "../../store/store";

function MainPage(): JSX.Element {
  const { ids, isLoading } = useAppSelector((state) => state.mainStore);
  const dispatch = useAppDispatch();
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchData());
    return () => {
      dispatch(cleanAllComments());
    };
  }, []);

  setInterval(function () {
    //@ts-ignore
    dispatch(fetchData());
  }, 60000);
  useEffect(() => {
    //@ts-ignore
    ids?.map((id) => dispatch(getNews(id)));
  }, [ids]);
  return (
    <div className={styles.wrapMainPage}>
      <div className={styles.mainContent}>
        <NewsList />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <img
          src="refresh-page.svg"
          className={styles.refreshImg}
          alt="refresh-image"
          onClick={() => {
            dispatch(cleanStore());
            //@ts-ignore
            dispatch(fetchData());
            //@ts-ignore
            ids?.map((id) => dispatch(getNews(id)));
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
