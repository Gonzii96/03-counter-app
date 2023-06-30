import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/> ", () => {
  const title = "Hola soy Goku";
  const subTitle = "te meto una ostia";

  test("should do match with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the msg "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show the las title in h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show the send subtible by props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
