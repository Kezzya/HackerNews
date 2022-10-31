import styles from "./newsPage.module.scss";
import { useParams } from "react-router-dom";

import Comments from "../../components/comments/comments";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { cleanAllComments } from "../../store/mainStore";

export const NewsPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(cleanAllComments());
    };
  });
  const { id } = useParams<{ id?: string }>();
  return (
    <div className={styles.newsPageWrap}>
      <Comments commentId={id} />
    </div>
  );
};
