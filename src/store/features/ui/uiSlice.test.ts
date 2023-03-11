import { ModalPayload, UiState } from "./types";
import {
  initialState,
  displayModalActionCreator,
  uiReducer,
  setIsLoadingActionCreator,
  unSetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its displayModal action creator is invoked, with the text 'Wrong credentials' and its property isError true", () => {
    test("Then it should set to modal the text 'Wrong crendentials' and set property isError to true", () => {
      const modal: ModalPayload = {
        isError: true,
        modal: "Wrong credentials.",
      };

      const expectedUiState: ModalPayload = {
        isError: modal.isError,
        modal: modal.modal,
      };

      const displayModal = displayModalActionCreator(modal);
      const newModalState = uiReducer(initialState, displayModal);

      expect(newModalState).toStrictEqual(expectedUiState);
    });

    describe("When its setIsLoading action creator is invoked", () => {
      test("Then it should set isLoading property to true", () => {
        const expectedUiState: UiState = {
          isError: false,
          isLoading: true,
          modal: "",
        };

        const newUiState = uiReducer(initialState, setIsLoadingActionCreator());

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });
  });

  describe("When its unSetIsLoading action creator is invoked", () => {
    test("Then it should set isLoading property to false", () => {
      const expectedUiState: UiState = {
        isError: false,
        isLoading: false,
        modal: "",
      };

      const currentUiState: UiState = {
        isError: false,
        isLoading: true,
        modal: "",
      };

      const newUiState = uiReducer(
        currentUiState,
        unSetIsLoadingActionCreator()
      );

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
