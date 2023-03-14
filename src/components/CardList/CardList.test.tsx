import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import CardList from "./CardList";
import { screen } from "@testing-library/react";
import { mockExercises } from "../../mocks/mocks";

describe("Given a CardList component", () => {
  describe("When it renders", () => {
    test("Then it should display a list of Cards", () => {
      renderWithProviders(<CardList />, {
        exercise: { exercises: mockExercises.exercises },
      });

      const expectedCard = screen.getByRole("list");

      expect(expectedCard).toBeInTheDocument();
    });
  });
});
