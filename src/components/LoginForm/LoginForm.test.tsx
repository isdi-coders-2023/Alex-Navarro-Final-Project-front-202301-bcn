import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LoginForm from "./LoginForm";
import { act, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the logo", () => {
      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedImage = screen.getByRole("img", { name: "App logo" });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Email'", () => {
      const label = "Email";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedLabel = screen.getByLabelText(label);

      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show a label with the text 'Password'", () => {
      const label = "Password";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const expectedLabel = screen.getByLabelText(label);

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  test("Then it should show a label with the text 'Email'", () => {
    const label = "Email";

    renderWithProviders(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );

    const expectedLabel = screen.getByLabelText(label);

    expect(expectedLabel).toBeInTheDocument();
  });

  describe("When the user types in its email 'alex@gmail.com' in the input", () => {
    test("Then 'alex@gmail.com' should be displayed in the input", async () => {
      const label = "Email";
      const introducedEmail = "alex@gmail.com";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const emailInput = screen.getByLabelText(label);

      await act(async () => await userEvent.type(emailInput, introducedEmail));

      expect(emailInput).toHaveValue(introducedEmail);
    });
  });

  describe("When the user types in its password", () => {
    test("Then the password input should display hidden value in it", async () => {
      const label = "Password";
      const introducedPassword = "admin12345";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const passwordInput = screen.getByLabelText(label);

      await act(
        async () => await userEvent.type(passwordInput, introducedPassword)
      );

      expect(passwordInput).toHaveValue(introducedPassword);
    });
  });

  describe("When the user submits the form with values in it", () => {
    test("The loginUser function from the useUser hook should be called", async () => {
      const emailInputPlaceholderText = "Introduce your email";
      const passwordInputPlaceholderText = "Introduce your password";

      const mockUser: UserCredentials = {
        email: "alex@gmail.com",
        password: "admin12345",
      };

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );

      const emailInputPlaceholder = screen.getByPlaceholderText(
        emailInputPlaceholderText
      );

      const passwordInputPlaceholder = screen.getByPlaceholderText(
        passwordInputPlaceholderText
      );

      const submitButton = screen.getByRole("button");

      await act(
        async () => await userEvent.type(emailInputPlaceholder, mockUser.email)
      );

      await act(
        async () =>
          await userEvent.type(passwordInputPlaceholder, mockUser.password)
      );
      await act(async () => await userEvent.click(submitButton));

      expect(mockLoginUser).toHaveBeenCalledWith(mockUser);
    });
  });
});
