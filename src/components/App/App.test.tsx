import renderRouterWithProviders from "../../utils/testUtils/renderRouterWithProviders";
import { screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should display a Loader component", () => {
      const preloadedState = {
        ui: {
          modal: "",
          isError: false,
          isLoading: true,
        },
      };

      renderRouterWithProviders(<App />, preloadedState);

      const loader = screen.getByLabelText("progress-bar-loading");

      expect(loader).toBeInTheDocument();
    });
  });
});
