import { User, UserState } from "./types";
import { loginUserActionCreator, userReducer, initialState } from "./userSlice";

describe("Given a user reducer", () => {
  describe("When it receives an initial state and an action to log in the user", () => {
    test("Then it should return the given user with the property isLogged set to true", () => {
      const user: User = {
        id: "",
        email: "alex@gmail.com",
        token: "asd23-asd4das458,.234mdf",
      };

      const expectedState: UserState = {
        id: "",
        email: "alex@gmail.com",
        token: "asd23-asd4das458,.234mdf",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(user);

      const newState = userReducer(initialState, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
