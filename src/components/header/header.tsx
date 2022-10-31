import { BrowserRouter as Router, Link } from "react-router-dom";

import styles from "./header.module.scss";
export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div>
        {/*@ts-ignore */}
        <Link to={{ pathname: `/` }}>
          <p>Hacker News</p>
        </Link>
      </div>
    </div>
  );
};
