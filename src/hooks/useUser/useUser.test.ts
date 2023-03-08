import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store";
import { CustomTokenPayload, UserCredentials } from "./types";
import useUser from "./useUser";
import decodeToken from "jwt-decode";
import { User } from "../../store/features/userSlice/types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";

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
});
