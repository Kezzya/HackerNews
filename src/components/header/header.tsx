import { BrowserRouter, Route } from "react-router-dom";
import styles from "./header.module.scss";
export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p>Hacker News</p>
    </div>
  );
};
