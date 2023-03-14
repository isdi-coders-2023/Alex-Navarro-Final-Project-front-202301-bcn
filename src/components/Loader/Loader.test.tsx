import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import Loader from "./Loader";
import "@testing-library/jest-dom";

describe("Given a Loader component", () => {
  describe("When it renders", () => {
    test("Then it should show a progress bar loading", () => {
      renderWithProviders(<Loader />);

      const loader = screen.getByLabelText("progress-bar-loading");
      expect(loader).toBeInTheDocument();
    });
  });
});
