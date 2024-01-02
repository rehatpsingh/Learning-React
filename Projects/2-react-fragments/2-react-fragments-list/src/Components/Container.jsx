import styles from "./Container.module.css";

const container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default container;
