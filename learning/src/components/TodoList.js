import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, noTodoMessage, onDone }) => {
  const handleDone = index => isDone => {
    onDone(index, isDone);
  };
  return (
    <div data-testid="todo-list">
      {todos && todos.length > 0 ? (
        todos.map((todo, i) => (
          <Todo
            key={`todo--${i}`}
            text={todo.text}
            done={todo.done}
            setDone={handleDone(i)}
          />
        ))
      ) : (
        <div data-testid="no-todo-message">{noTodoMessage || ""}</div>
      )}
    </div>
  );
};

export default TodoList;
