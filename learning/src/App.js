import React from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App({ title }) {
  return (
    <div className="App">
      <h1 data-testid="title">{title}</h1>
      <Todo text="Hello World" setDone={() => {}} />
      <Todo text="This is done" done setDone={() => {}} />
    </div>
  );
}

export default App;
