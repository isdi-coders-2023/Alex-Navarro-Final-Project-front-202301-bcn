import renderWithProviders from "../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";
import { screen } from "@testing-library/react";

describe("Given a Login Page", () => {
  describe("When it is rendered", () => {
    test("Then it should a button inside a Login Form, with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
