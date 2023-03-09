import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useUser();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await loginUser({
      email,
      password,
    });
  };

  return (
    <>
      <LoginFormStyled>
        <img
          className="form__image"
          src="../img/spotter.svg"
          alt="App logo"
          width={267}
          height={64}
        />
        <form
          autoComplete="off"
          className="form"
          aria-label="Login user"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="form__label">
            Email
            <input
              id="email"
              type="email"
              placeholder="Introduce your email"
              className="form__input"
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <Button className="form-button" isDisabled={false} text={"Log in"} />
        </form>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
