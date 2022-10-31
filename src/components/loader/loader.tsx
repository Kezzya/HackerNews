import { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import styles from "./loader.module.scss";
import { useAppDispatch } from "../../store/store";
import { cleanAllComments, cleanStore } from "../../store/mainStore";
const LoaderExampleInline = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);
  return (
    <div
      className={styles.wrapLoader}
      onClick={() => {
        dispatch(cleanAllComments());
        dispatch(cleanStore());
      }}
    >
      <Loader active inline />
    </div>
  );
};
export default LoaderExampleInline;
