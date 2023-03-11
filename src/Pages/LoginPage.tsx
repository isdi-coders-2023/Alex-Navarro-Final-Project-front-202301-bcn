import LoginForm from "../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <img
        className="spotter"
        src="../img/spotter.svg"
        alt="App logo"
        width={307}
        height={74}
      />
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
