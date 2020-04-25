import React, { useState } from "react";

const AddTodo = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };
  return (
    <div data-testid="add-todo">
      <form data-testid="add-todo-form" onSubmit={handleSubmit}>
        <input
          data-testid="add-todo-input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
