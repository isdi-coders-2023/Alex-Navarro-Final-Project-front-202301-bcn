import styled from "styled-components";

const HeaderStyled = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.app};
    font-style: italic;
    font-size: 2.7rem;
    font-weight: 600;
  }
`;

export default HeaderStyled;
