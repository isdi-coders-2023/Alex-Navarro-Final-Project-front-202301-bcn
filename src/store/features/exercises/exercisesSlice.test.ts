import { mockBenchPress, mockSquat } from "../../../mocks/mocks";
import { exercisesReducer, loadExercisesActionCreator } from "./exercisesSlice";
import { ExercisesData, ExercisesStructure } from "./types";

const exercises: ExercisesStructure = [mockBenchPress, mockSquat];

const initialState: ExercisesData = {
  exercises: [],
};

describe("Given an exercises reducer", () => {
  describe("When it receives the load exercises action creator", () => {
    test.only("Then it should load bench press and squat exercises", () => {
      const loadExercisesAction = loadExercisesActionCreator(exercises);

      const expectedExercises: ExercisesData = { exercises: exercises };

      const newExercises = exercisesReducer(initialState, loadExercisesAction);

      expect(newExercises).toStrictEqual(expectedExercises);
    });
  });
});
