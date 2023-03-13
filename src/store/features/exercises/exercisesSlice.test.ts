import { mockExercises } from "../../../mocks/mocks";
import { exercisesReducer, loadExercisesActionCreator } from "./exercisesSlice";
import { ExercisesStructure } from "./types";

describe("Given an exercises reducer", () => {
  describe("When it receives the load exercises action creator", () => {
    test("Then it should load bench press and squat exercises", () => {
      const loadExercises = loadExercisesActionCreator(mockExercises);

      const expectedExercises: ExercisesStructure = mockExercises;

      const newExercises = exercisesReducer([], loadExercises);

      expect(newExercises).toStrictEqual(expectedExercises);
    });
  });
});
