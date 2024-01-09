import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const addNewItemContext = useContext(TodoItemsContext);

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItemContext.addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            onClick={() => handleAddButtonClicked()}
          >
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
