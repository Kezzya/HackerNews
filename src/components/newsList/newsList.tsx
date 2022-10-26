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
        rating={store.rating}
        nickname={store.nickname}
        date={store.date}
      />
    </ul>
  );
};

const store = {
  title: "testTitle",
  rating: "rating",
  nickname: "testNickname",
  date: "testDate",
};
