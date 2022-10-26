import { NewsList } from "../../components/newsList/newsList";
import styles from "./mainPage.module.scss";
function MainPage(): JSX.Element {
  return (
    <div className={styles.mainContent}>
      <NewsList />
    </div>
  );
}

export default MainPage;
