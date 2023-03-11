import { ModalPayload } from "./types";
import { initialState, displayModalActionCreator, uiReducer } from "./uiSlice";

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
  });
});
