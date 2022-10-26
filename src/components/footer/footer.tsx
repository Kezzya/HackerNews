import styles from "./footer.module.scss";
export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <p>
        сreated by {""}
        <a href="https://github.com/Kezzya/HackerNews" target={"_blank"}>
          Kezzya
        </a>
      </p>
    </footer>
  );
};
