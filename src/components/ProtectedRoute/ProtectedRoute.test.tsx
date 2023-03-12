import { useAppSelector } from "../../store/hooks";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import ProtectedRoute from "./ProtectedRoute";
import { screen } from "@testing-library/react";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and a token exists", () => {
    test("Then it should show the component that it is receiving with props", () => {
      (useAppSelector as jest.Mock).mockReturnValueOnce({
        token: "a123l456e789x",
      });

      const component = <div>Login page</div>;

      renderWithProviders(<ProtectedRoute element={component} />);

      const expectedComponent = screen.getByText("Login page");

      expect(expectedComponent).toBeInTheDocument();
    });
  });
});
