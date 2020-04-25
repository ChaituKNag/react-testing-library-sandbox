import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("should render Todo", async () => {
  const doneHandler = jest.fn(() => {});
  const text = "Learn Testing React Components";
  const { getByText, rerender } = render(
    <Todo text={text} setDone={doneHandler} done={false} />
  );

  let textElement = getByText(text);

  expect(textElement).toBeInTheDocument();
  expect(textElement).toBeVisible();

  fireEvent.click(textElement);

  expect(doneHandler).toBeCalledTimes(1);

  fireEvent.click(textElement);

  expect(doneHandler).toBeCalledTimes(2);
  expect(textElement).toHaveAttribute("aria-label", `${text}`);

  rerender(<Todo text={text} setDone={doneHandler} done={true} />);

  textElement = getByText(text);

  expect(textElement).toHaveAttribute("aria-label", `${text} - done`);
});
