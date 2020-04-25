import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

test("should render TodoApp", () => {
  const { getByTestId, getAllByTestId } = render(<TodoApp />);

  const noTodoElement = getByTestId("no-todo-message");
  expect(noTodoElement).toBeInTheDocument();

  const addTodoInput = getByTestId("add-todo-input");
  fireEvent.change(addTodoInput, { target: { value: "Hello" } });
  expect(addTodoInput).toHaveValue("Hello");

  fireEvent.submit(getByTestId("add-todo-form"));
  const allTodos = getAllByTestId("todo");
  expect(allTodos).toHaveLength(1);
  expect(addTodoInput).toHaveValue("");
  fireEvent.click(allTodos[0]);
  expect(allTodos[0]).toHaveAttribute("aria-label", `Hello - done`);
});
