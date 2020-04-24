import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("should render Todo", () => {
  const { getByText } = render(
    <Todo text="Learn Testing React Components" done="false" />
  );

  const textElement = getByText("Learn Testing React Components");

  expect(textElement).toBeInTheDocument();
  expect(textElement).toBeVisible();
});
