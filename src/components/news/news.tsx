import styles from "./news.module.scss";
import { Link } from "react-router-dom";
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
          <div> {`${ConvertUnixTime(Number(date))}`}</div>
        </div>
      </li>
    </Link>
  );
};

export const ConvertUnixTime = (unixTime: number): string => {
  const time = unixTime * 1000;
  const date = new Date(time);
  const hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};
