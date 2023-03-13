import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExercisesStructure } from "./types";

const initialState: ExercisesStructure = [];

const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    loadExercises: (
      currentExerciseState,
      action: PayloadAction<ExercisesStructure>
    ) => [...action.payload],
  },
});

export const { loadExercises: loadExercisesActionCreator } =
  exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
