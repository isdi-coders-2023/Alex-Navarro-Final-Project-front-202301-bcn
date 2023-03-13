import {
  ExercisesStructure,
  ExerciseStructure,
} from "../store/features/exercises/types";

const mockBenchPress: ExerciseStructure = {
  name: "Bench Press",
  type: "strength",
  equipment: "Barbell, Bench",
  difficulty: 3,
  muscles: {
    primary: "Chest",
    secondary: ["Triceps", "Shoulders"],
  },
  description:
    "Lie on a bench with a barbell, lower it to your chest, and then push it back up.",
  sets: 3,
  reps: 10,
  rest: 60,
  duration: 0,
  image: "https://example.com/bench-press.jpg",
};

const mockSquat: ExerciseStructure = {
  name: "Squat",
  type: "strength",
  equipment: "Barbell, Power Rack",
  difficulty: 4,
  muscles: {
    primary: "Quadriceps",
    secondary: ["Glutes", "Hamstrings"],
  },
  description:
    "Place a barbell on your shoulders behind your neck, bend your knees to lower your hips until your thighs are parallel to the floor, then extend your legs to return to standing.",
  sets: 3,
  reps: 8,
  rest: 90,
  duration: 0,
  image: "https://example.com/squat.jpg",
};

export const mockExercises: ExercisesStructure = [mockBenchPress, mockSquat];