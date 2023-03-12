import LoginPage from "../Pages/LoginPage";
import renderWithProviders from "../utils/testUtils/renderWithProviders";
import { screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When it renders", () => {
    test("Then it should a button with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
