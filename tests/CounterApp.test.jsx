import { describe, test, expect } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("CounterApp testing", () => {
  const initialValue = 10;

  test("should match with snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("should shows the initial value 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText("100")).toBeTruthy();
  });

  test("should to increase with the button +1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });
  test("should to decrease with the button -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("should reset the value", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
