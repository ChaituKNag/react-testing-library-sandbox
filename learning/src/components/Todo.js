import React from "react";
import classes from "./Todo.module.css";

const Todo = ({ text, done, setDone }) => {
  const handleDone = () => {
    setDone(!done);
  };
  return (
    <div className={classes.todoWrapper}>
      <span
        className={`${classes.todo} ${done ? classes.todoDone : ""}`}
        aria-label={`${text}${done ? " - done" : ""}`}
        onClick={handleDone}
        role="button"
        data-testid="todo"
      >
        {text}
      </span>
    </div>
  );
};

export default Todo;
