import { NewsList } from "../../components/newsList/newsList";
import { useState } from "react";
import styles from "./mainPage.module.scss";
import Loader from "../../components/loader/loader";

function MainPage(): JSX.Element {
  const [trigger, setTrigger] = useState(false);
  return (
    <div className={styles.wrapMainPage}>
      <div className={styles.mainContent}>
        <NewsList />
      </div>

      {trigger ? (
        <Loader />
      ) : (
        <img
          src="refresh-page.svg"
          className={styles.refreshImg}
          alt="refresh-image"
          onClick={() => {
            setTrigger(!trigger);
            setTimeout(() => {
              setTrigger(false);
            }, 1000);
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
