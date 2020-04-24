import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Todo from "./Todo";

test("should render Todo", async () => {
  const { getByText, rerender } = render(
    <Todo text="Learn Testing React Components" setDone={() => {}} />
  );

  let textElement = getByText("Learn Testing React Components");

  expect(textElement).toBeInTheDocument();
  expect(textElement).toBeVisible();

  fireEvent.click(textElement);

  textElement = getByText("Learn Testing React Components");

  console.log("************** ", textElement.getAttribute("aria-label"));

  expect(textElement).toHaveAttribute(
    "aria-label",
    `Learn Testing React Components - done`
  );
});
