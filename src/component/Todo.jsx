import { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todo.module.css";

function Todo() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleClick = () => {
    setTodoList([...todoList, todoItem]);
  };
  return (
    <div>
      <TodoItem prop={todoList} />
      <div>
        <input
          type="text"
          value={todoItem}
          placeholder="Write Something"
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

export default Todo;
