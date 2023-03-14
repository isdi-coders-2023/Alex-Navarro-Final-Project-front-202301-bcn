import { PreloadedState } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RootState, setupStore, store } from "../../store/store";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={testStore}>
          <GlobalStyles />
          {children}
        </Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
