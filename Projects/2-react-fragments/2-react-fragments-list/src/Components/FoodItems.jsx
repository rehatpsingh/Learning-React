import Item from "../Components/Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
