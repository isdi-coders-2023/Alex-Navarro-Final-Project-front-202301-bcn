import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("Given a Button component", () => {
  describe("When rendered with the className sigin-button", () => {
    test("It should render a button with the class 'signin-button', the text 'Sign in'", () => {
      const action = jest.fn();

      render(
        <Button
          isDisabled={false}
          className="signin-button"
          text={"Sign in"}
          action={action}
        />
      );

      const genericButton = screen.getByRole("button", {
        name: "Sign in",
      });

      expect(genericButton).toHaveClass("signin-button");
      expect(genericButton).toHaveTextContent("Sign in");
    });
  });

  describe("When it receives an action when the user clicks on the button", () => {
    test("Then the action should be invoked", async () => {
      const action = jest.fn();

      render(
        <Button
          isDisabled={false}
          className="form-button"
          text={"confirm"}
          action={action}
        />
      );

      const genericButton = screen.getByRole("button", {
        name: "confirm",
      });

      await userEvent.click(genericButton);
      expect(action).toHaveBeenCalled();
    });
  });
});
