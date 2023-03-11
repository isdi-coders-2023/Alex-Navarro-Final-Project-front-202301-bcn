import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "./types";

export const initialState: ModalPayload = {
  modal: "",
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    displayModal: (
      currentState,
      action: PayloadAction<ModalPayload>
    ): ModalPayload => ({
      ...currentState,
      modal: action.payload.modal,
      isError: action.payload.isError,
    }),
    setIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
    unSetIsLoading: (currentState): UiState => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  displayModal: displayModalActionCreator,
  setIsLoading: setIsLoadingActionCreator,
  unSetIsLoading: unSetIsLoadingActionCreator,
} = uiSlice.actions;
