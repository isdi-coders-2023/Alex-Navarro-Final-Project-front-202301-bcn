export interface ExerciseDataStructure {
  name: string;
  image: string;
  type: "cardio" | "strength" | "hypertrophy";
  equipment: string;
  difficulty: number;
  muscles: {
    primary: string;
    secondary: string[];
  };
  description: string;
  sets: number;
  reps: number;
  rest: number;
  duration: number;
}

export type ExercisesDataStructure = ExerciseDataStructure[];
