import React from "react";

import "./App.css";
import TodoApp from "./components/TodoApp";

function App({ title }) {
  return (
    <div className="App">
      <h1 data-testid="title">{title}</h1>
      <TodoApp />
    </div>
  );
}

export default App;
