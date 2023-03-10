import { userReducer } from "./features/users/userSlice";

import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { uiReducer } from "./features/ui/uiSlice";
import { exercisesReducer } from "./features/exercises/exercisesSlice";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  exercise: exercisesReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
