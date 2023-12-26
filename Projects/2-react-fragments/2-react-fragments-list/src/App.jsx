import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = ["Dal"];
  return (
    <>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
