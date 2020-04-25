import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const todos = [
  { text: "First Todo", done: false },
  { text: "Second Todo", done: true }
];

test("should render the TodoList", () => {
  const onDone = jest.fn(() => {});
  const { getAllByTestId, getByTestId, rerender } = render(
    <TodoList
      todos={todos}
      noTodoMessage="No todos created yet!"
      onDone={onDone}
    />
  );

  let todoList = getByTestId("todo-list");
  let allTodos = getAllByTestId("todo");

  expect(todoList).toBeInTheDocument();
  expect(allTodos).toHaveLength(2);

  fireEvent.click(allTodos[0]);

  expect(onDone).toBeCalledTimes(1);

  rerender(
    <TodoList
      todos={null}
      noTodoMessage="No todos created yet!"
      onDone={onDone}
    />
  );

  todoList = getByTestId("todo-list");

  expect(todoList).toBeInTheDocument();
  expect(getByTestId("no-todo-message")).toBeInTheDocument();
});
