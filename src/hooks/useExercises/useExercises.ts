import { useCallback } from "react";
import { loadExercisesActionCreator } from "../../store/features/exercises/exercisesSlice";
import { ExercisesStructure } from "../../store/features/exercises/types";
import { useAppDispatch } from "../../store/hooks";

const apiUrl = process.env.REACT_APP_URL_API;
const exercisesEndpoint = "/exercises";

const useExercises = () => {
  const dispatch = useAppDispatch();

  const getExercises = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}${exercisesEndpoint}`, {
        method: "GET",
        headers: { "Content-Type": "application/json;" },
      });
      const exercises = (await response.json()) as ExercisesStructure;

      if (!response.ok) {
        return;
      }

      dispatch(loadExercisesActionCreator(exercises));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getExercises };
};

export default useExercises;
