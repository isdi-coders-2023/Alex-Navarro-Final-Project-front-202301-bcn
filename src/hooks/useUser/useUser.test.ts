import { act, renderHook } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import { store } from "../../store/store";
import { UserCredentials } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../store/features/users/types";
import { loginUserActionCreator } from "../../store/features/users/userSlice";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { CustomTokenPayload } from "../../types/types";

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const mockUserCredentials: UserCredentials = {
  email: "alex@gmail.com",
  password: "alex1234",
};

const mockTokenPayload: CustomTokenPayload = {
  id: "2845723",
  email: "alex@gmail.com",
};

const mockToken = "sda123-asd1!23.da?34";

const mockErrorToast = jest.fn();

jest.mock("../../modals/modals", () => ({
  ...jest.requireActual("../../modals/modals"),
  displayToast: () => mockErrorToast("Wrong credentials"),
}));

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is invoked to login the user with the email 'alex@gmail.com' and the password 'alex1234'", () => {
    test("Then the dispatch should be called with the action to log in the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockUserLogin: User = {
        id: mockTokenPayload.id,
        email: mockUserCredentials.email,
        token: mockToken,
      };

      await loginUser(mockUserCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockUserLogin));
    });
  });

  describe("When loginUser function is invoked with email 'alex@gmail.com' and password 'alex4321'", () => {
    test("Then it should call the errorToast function", async () => {
      server.use(...errorHandlers);
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const userCredentials: UserCredentials = {
        email: "alex@gmail.com",
        password: "alex4321",
      };

      await act(async () => loginUser(userCredentials));
      expect(mockErrorToast).toHaveBeenCalledWith("Wrong credentials");
    });
  });
});
