import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { toggleTodo, deleteTodo } from "../../store/slices/toDoSlice";
import "./index.css";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id} className="todoItem">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            className="todoCheckbox"
          />
          <span
            className={`todoText ${todo.completed ? "completed" : ""}`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="deleteButton"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
