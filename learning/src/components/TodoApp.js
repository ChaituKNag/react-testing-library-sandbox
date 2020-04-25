import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const handleDone = (idx, isDone) => {
    setTodos(todos.map((t, i) => (i === idx ? { ...t, done: isDone } : t)));
  };
  const handleTodoAdd = text => setTodos([...todos, { text, done: false }]);
  return (
    <div>
      <AddTodo onSubmit={handleTodoAdd} />
      <TodoList
        todos={todos}
        noTodoMessage="No todos yet!"
        onDone={handleDone}
      />
    </div>
  );
};

export default TodoApp;
