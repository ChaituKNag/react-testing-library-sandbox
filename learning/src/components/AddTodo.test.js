import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";

test("should render AddTodo", () => {
  const handleSubmit = jest.fn(() => {});
  const { getByTestId } = render(<AddTodo onSubmit={handleSubmit} />);

  expect(getByTestId("add-todo")).toBeInTheDocument();
});

test("should call handleSubmit in AddTodo", () => {
  const handleSubmit = jest.fn(() => {});
  const { getByTestId } = render(<AddTodo onSubmit={handleSubmit} />);

  const addTodoForm = getByTestId("add-todo-form");
  const addTodoInput = getByTestId("add-todo-input");
  fireEvent.change(addTodoInput, { target: { value: "Hello" } });
  fireEvent.submit(addTodoForm);
  expect(handleSubmit).toBeCalledTimes(1);
  expect(handleSubmit).toBeCalledWith("Hello");
});
