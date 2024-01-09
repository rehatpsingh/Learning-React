import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  if (todoItems.length === 0) {
    return <p>Enjoy Your Day</p>;
  }
};

export default WelcomeMessage;
