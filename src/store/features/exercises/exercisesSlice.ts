import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExercisesData, ExercisesStructure } from "./types";

const initialState: ExercisesData = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    loadExercises: (
      currentExerciseState,
      action: PayloadAction<ExercisesStructure>
    ) => ({ ...currentExerciseState, exercises: action.payload }),
  },
});

export const { loadExercises: loadExercisesActionCreator } =
  exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
