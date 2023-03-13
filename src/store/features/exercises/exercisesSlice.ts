import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExercisesDataStructure } from "./types";

const initialState: ExercisesDataStructure = [];

const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    loadExercises: (
      currentExerciseState,
      action: PayloadAction<ExercisesDataStructure>
    ) => [...action.payload],
  },
});

export const { loadExercises: loadExercisesActionCreator } =
  exercisesSlice.actions;
export const exercisesReducer = exercisesSlice.reducer;
