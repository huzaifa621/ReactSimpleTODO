import "./TodoItem.module.css";

const TodoItem = ({ prop }) => {
  return prop.map((el) => {
    return (
      <div>
        <p>{el}</p>
      </div>
    );
  });
};

export default TodoItem;
