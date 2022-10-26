import styles from "./news.module.scss";
interface Props {
  number: string;
  title: string;
  rating: string;
  nickname: string;
  date: string;
  // any props that come into the component
}
export const News = ({
  number,
  title,
  rating,
  nickname,
  date,
}: Props): JSX.Element => {
  return (
    <li className={styles.newsWrap}>
      <div className={styles.titleWrap}>
        <div>{number}</div>
        <div>{title}</div>
      </div>
      <div className={styles.restInfoWrap}>
        <div>{rating}</div>
        <div>by {nickname}</div>
        <div> {date}</div>
      </div>
    </li>
  );
};
