import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
