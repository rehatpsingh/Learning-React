import styles from "../Components/item.module.css";

console.log(styles);

const Item = ({ foodItems }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
    </li>
  );
};
export default Item;
