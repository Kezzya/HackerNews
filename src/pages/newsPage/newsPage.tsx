import styles from "./newsPage.module.scss";
import { useParams } from "react-router-dom";

import Comments from "../../components/comments/comments";

export const NewsPage = () => {
  const { id } = useParams<{ id?: string }>();
  return (
    <div className={styles.newsPageWrap}>
      <Comments commentId={id} />
    </div>
  );
};
