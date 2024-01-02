import styles from "../Components/item.module.css";

const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button
        className={`${styles.button} btn btn-${
          bought === false ? "info" : "danger"
        }`}
        onClick={handleBuyButton}
      >
        {bought === false ? "Buy" : "Remove"}
      </button>
    </li>
  );
};
export default Item;
