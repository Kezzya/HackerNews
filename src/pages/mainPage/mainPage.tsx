import { NewsList } from "../../components/newsList/newsList";
import { useEffect } from "react";
import styles from "./mainPage.module.scss";
import Loader from "../../components/loader/loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchIdPosts } from "../../store/reducers/actionCreater";

function MainPage(): JSX.Element {
  const { postsId, isLoading, error } = useAppSelector(
    (state) => state.postsIdReducer
  );
  const { posts } = useAppSelector((state) => state.postsReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchIdPosts());
  }, []);

  return (
    <div className={styles.wrapMainPage}>
      <div className={styles.mainContent}>
        <NewsList />
      </div>
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <img
          src="refresh-page.svg"
          className={styles.refreshImg}
          alt="refresh-image"
          onClick={() => {
            dispatch(fetchIdPosts());
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
