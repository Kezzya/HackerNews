import { useEffect, useState } from "react";
import { News } from "../news/news";
import styles from "./newsList.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchIdPosts } from "../../store/reducers/actionCreater";
interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}
export const NewsList = ({ children }: Props) => {
  const { posts, postsId, isLoading, isLoadingPosts, error } = useAppSelector(
    (state) => state.postsReducer
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(isLoadingPosts);
  }, []);

  return (
    <ul className={styles.wrapUlList}>
      {!isLoadingPosts
        ? posts.title.map((el, i) => (
            <News
              number={`${postsId[i]}`}
              title={`${i}`}
              // score={score[i]}
              score={`${i}`}
              // nickname={nickname[i]}
              nickname={`${i}`}
              // date={date[i]}
              date={`${i}`}
              key={i}
            />
          ))
        : null}
    </ul>
  );
};
