import { useState } from "react";
import Item from "../Components/Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, bought) => {
    const newItems = bought
      ? activeItems.filter((existingItem) => existingItem !== item)
      : [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item, activeItems.includes(item))}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
