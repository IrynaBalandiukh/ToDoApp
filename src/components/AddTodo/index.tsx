import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/toDoSlice";
import "./index.css";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="addTodoForm">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Add a new task"
        className="addTodoInput"
      />
      <button type="submit" className="submitButton">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
