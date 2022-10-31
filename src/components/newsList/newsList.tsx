import { News } from "../news/news";
import styles from "./newsList.module.scss";
import { useAppSelector } from "../../store/store";

export const NewsList = () => {
  const { news, isLoading } = useAppSelector((state) => state.mainStore);

  return (
    <ul className={styles.wrapUlList}>
      {isLoading ? (
        <div>Идёт загрузка...</div>
      ) : (
        <div>
          {
            //@ts-ignore
            news?.map((el, i) => (
              <News
                number={`${i}`}
                title={`${el.title}`}
                //@ts-ignore
                score={`score: ${el.score}`}
                //@ts-ignore
                nickname={`${el.by}`}
                //@ts-ignore
                date={el.time}
                id={el.id}
                key={i}
              />
            ))
          }
        </div>
      )}
    </ul>
  );
};
