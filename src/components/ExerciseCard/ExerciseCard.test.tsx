import { screen } from "@testing-library/react";
import { mockBenchPress } from "../../mocks/mocks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import ExerciseCard from "./ExerciseCard";

describe("Given a ExerciseCard component", () => {
  describe("When it renders", () => {
    test("Then it should display an image of an exercise", () => {
      renderWithProviders(<ExerciseCard exercise={mockBenchPress} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should display a title included in a heading with the exercise's name", () => {
      const exerciseName = "Bench Press";

      renderWithProviders(<ExerciseCard exercise={mockBenchPress} />);

      const expectedHeading = screen.getByRole("heading", {
        name: exerciseName,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
