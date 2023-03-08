import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
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
          onSubmit={() => {}}
        >
          <label htmlFor="email" className="form__label">
            Email
            <input
              id="email"
              type="email"
              placeholder="Introduce your email"
              className="form__input"
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
            />
          </label>
        </form>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
