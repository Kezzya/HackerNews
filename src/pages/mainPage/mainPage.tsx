import { NewsList } from "../../components/newsList/newsList";
import { useState, useEffect } from "react";
import styles from "./mainPage.module.scss";
import Loader from "../../components/loader/loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { postSlice } from "../../store/reducers/postSlice";
import { fetchPosts } from "../../store/reducers/actionCreater";

function MainPage(): JSX.Element {
  //redux toolkit
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.postsReducer
  );
  const {} = postSlice.actions;
  const dispatch = useAppDispatch();
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    dispatch(fetchPosts());
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
            setTrigger(!trigger);
            setTimeout(() => {
              setTrigger(false);
            }, 1000);
          }}
        />
      )}
    </div>
  );
}

export default MainPage;

const getDataAPIJson = async (url: string): Promise<any> => {
  const result = await fetch(url);
  if (result === undefined) {
    alert("API url is not correct");
  }
  const resultJson = await result.json();
  return resultJson;
};

const getIdFirstHundredPosts = async (JSONData: Promise<Number[]>) => {
  let arrayHundredPosts; // GET ARRAY OF FIRST 100 POSTS ID
  await JSONData.then((e: Array<Number>) => {
    arrayHundredPosts = e.slice(0, 99);
  });
  return arrayHundredPosts;
};

const Posts = {
  title: ["testTitle"],
  score: ["1"],
  nickname: ["testNickname"],
  date: ["testDate"],
};
