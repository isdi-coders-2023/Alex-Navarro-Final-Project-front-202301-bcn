import { renderWithProviders } from "../utils/testUtils/renderWithProviders";
import LoginPage from "./LoginPage";
import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../utils/testUtils/renderRouterWithProviders";

describe("Given a Login Page", () => {
  describe("When it is rendered", () => {
    test("Then it should a button inside a Login Form, with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderWithProviders(<LoginPage />);

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user introduces wrong credentials at Login Page, and the modal property isError is set to true", () => {
    test("Then it should display this modal with the text 'Wrong credentials'", async () => {
      await renderRouterWithProviders(
        {
          ui: { modal: "Wrong credentials", isError: true, isLoading: false },
        },
        <LoginPage />
      );

      const modal = await screen.findByText("Wrong credentials");

      expect(modal).toBeInTheDocument();
    });
  });
});
