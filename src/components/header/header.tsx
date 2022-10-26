import { BrowserRouter as Router, Link } from "react-router-dom";

import styles from "./header.module.scss";
export const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Router>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Hacker News</p>
          </Link>
        </div>
      </Router>
    </div>
  );
};
