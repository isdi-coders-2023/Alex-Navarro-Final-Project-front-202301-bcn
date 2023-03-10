import { useAppDispatch } from "../../store/hooks";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/users/userSlice";
import { User } from "../../store/features/users/types";
import { errorToast } from "../../components/modals/modals";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API;

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { id, email } = tokenPayload;

      const logUser: User = {
        email,
        token,
        id,
      };

      dispatch(loginUserActionCreator(logUser));
      localStorage.setItem("token", token);
    } catch {
      errorToast("Wrong credentials");
    }
  };
  return { loginUser };
};

export default useUser;
