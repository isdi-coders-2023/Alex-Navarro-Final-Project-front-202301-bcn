import Burger from "../Burger/Burger";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="header">
        <h1 className="logo">Spotter</h1>
      </div>
      <Burger />
    </HeaderStyled>
  );
};

export default Header;
