import { NewsList } from "../../components/newsList/newsList";
import styles from "./mainPage.module.scss";
function MainPage(): JSX.Element {
  return (
    <div className={styles.wrapMainPage}>
      <div className={styles.mainContent}>
        <NewsList />
      </div>

      <img src="refresh-page.svg" className={styles.refreshImg} />
    </div>
  );
}

export default MainPage;
