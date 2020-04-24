import React from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App({ title }) {
  return (
    <div className="App">
      <h1 data-testid="title">{title}</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
