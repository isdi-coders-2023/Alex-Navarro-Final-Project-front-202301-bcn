import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
  };
  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginUser({
      email,
      password,
    });
  };

  const areFieldsFilled = email === "" || password === "";

  return (
    <>
      <LoginFormStyled>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="form__label">
            Email
            <input
              id="email"
              type="email"
              placeholder="Introduce your email"
              className="form__input"
              onChange={handleEmail}
            />
          </label>
          <label htmlFor="password" className="form__label">
            Password
            <input
              id="password"
              type="password"
              placeholder="Introduce your password"
              required
              minLength={8}
              className="form__input"
              onChange={handlePassword}
            />
          </label>
          <Button
            className="form-button"
            isDisabled={areFieldsFilled}
            text={"Log in"}
            type="submit"
          />
        </form>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
