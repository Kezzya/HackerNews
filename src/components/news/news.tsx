import styles from "./news.module.scss";
import { Link } from "react-router-dom";
import { convertUnixTime } from "../../utils/utils";
interface Props {
  number: string;
  title: string;
  score: string;
  nickname: string;
  date: string;
  id: number;
  // any props that come into the component
}
export const News = ({
  number,
  title,
  score,
  nickname,
  date,
  id,
}: Props): JSX.Element => {
  return (
    <Link key={id} to={{ pathname: `news/${id}` }}>
      <li className={styles.newsWrap}>
        <div className={styles.titleWrap}>
          <div>{number}</div>
          <div>{title}</div>
        </div>
        <div className={styles.restInfoWrap}>
          <div>{score}</div>
          <div>by {nickname}</div>
          <div> {`${convertUnixTime(Number(date))}`}</div>
        </div>
      </li>
    </Link>
  );
};
