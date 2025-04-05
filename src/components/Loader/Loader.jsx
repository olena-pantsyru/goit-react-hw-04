import { ClipLoader } from "react-spinners"; 
import styles from "./Loader.module.css"; 

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader color="#00BFFF" size={50} />
    </div>
  );
};

export default Loader;