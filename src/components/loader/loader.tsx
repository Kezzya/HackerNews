import { Loader } from "semantic-ui-react";
import styles from "./loader.module.scss";
const LoaderExampleInline = () => (
  <div className={styles.wrapLoader}>
    <Loader active inline />
  </div>
);

export default LoaderExampleInline;
