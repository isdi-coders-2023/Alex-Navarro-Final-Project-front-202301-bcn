import renderWithProviders from "../utils/testUtils/renderWithProviders";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it renders but the user is not logged", () => {
    test("Then it should display a LoginForm component", () => {
      renderWithProviders(<Layout />, {
        ui: { isLoading: true, isError: false, modal: "" },
      });

      const loader = screen.getByLabelText("progress-bar-loading");

      expect(loader).toBeInTheDocument();
    });
  });
});
