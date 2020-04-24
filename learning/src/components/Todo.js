import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";

const Todo = ({ text, done, setDone }) => {
  const [striked, setStriked] = useState();

  useEffect(() => {
    setStriked(done);
  }, []);

  const handleDone = () => {
    setDone(!done);
    setStriked(s => !s);
  };
  return (
    <div className={classes.todoWrapper}>
      <span
        className={`${classes.todo} ${striked ? classes.todoDone : ""}`}
        aria-label={`${text}${striked ? " - done" : ""}`}
        onClick={handleDone}
        role="button"
      >
        {text}
      </span>
    </div>
  );
};

export default Todo;
