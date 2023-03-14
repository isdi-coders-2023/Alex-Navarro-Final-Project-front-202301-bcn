import styled from "styled-components";

const BurgerStyled = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }

  .logout {
    display: flex;
    background: ${(props) => props.theme.colors.app};
    opacity: 0.8;
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.secondary};
    justify-content: center;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${(props) => props.theme.colors.app};
    border-radius: 50px;
    width: 45px;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    left: 10px;
    margin-top: 10px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    display: flex;
    text-align: center;
    min-height: 32px;
    background: ${(props) => props.theme.colors.app};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${(props) => props.theme.colors.black};
    border: solid 1px ${(props) => props.theme.colors.app};
    border-radius: 15px 0 15px 15px;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .list {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.app};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 2rem;
    padding: 0.8em;
    gap: 30px;
    margin-top: 30px;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: ${(props) => props.theme.colors.app};
  }
`;

export default BurgerStyled;
