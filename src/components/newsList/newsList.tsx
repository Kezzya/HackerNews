import { News } from "../news/news";
import styles from "./newsList.module.scss";
interface Props {
  children?: React.ReactNode;
  // any props that come into the component
}
export const NewsList = ({ children }: Props) => {
  return (
    <ul className={styles.wrapUlList}>
      <News
        number={"1"}
        title={store.title}
        score={store.score}
        nickname={store.nickname}
        date={store.date}
      />
    </ul>
  );
};

const store = {
  title: "testTitle",
  score: "score",
  nickname: "testNickname",
  date: "testDate",
};
