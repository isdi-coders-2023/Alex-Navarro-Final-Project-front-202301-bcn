import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { mockExercises } from "../../mocks/mocks";
import { server } from "../../mocks/server";
import { loadExercisesActionCreator } from "../../store/features/exercises/exercisesSlice";
import { store } from "../../store/store";
import Wrapper from "../../utils/Wrapper";
import useExercises from "./useExercises";

beforeAll(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a useExercises custom hook", () => {
  describe("When the getExercises function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { getExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getExercises();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadExercisesActionCreator(mockExercises.exercises)
      );
    });
  });

  describe("When the getExercise function is called, but the response from the request sent is failsed", () => {
    test("Then the dispatch should not be called", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getExercises },
        },
      } = renderHook(() => useExercises(), { wrapper: Wrapper });

      await getExercises();

      expect(spyDispatch).not.toHaveBeenCalled();
    });
  });
});
