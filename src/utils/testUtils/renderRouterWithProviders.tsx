import { PreloadedState } from "@reduxjs/toolkit";
import { RouterProvider } from "react-router-dom";
import { getComponentRouter, router } from "../../routes/routes";
import { RootState } from "../../store/store";
import renderWithProviders from "./renderWithProviders";

export const renderRouterWithProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};
