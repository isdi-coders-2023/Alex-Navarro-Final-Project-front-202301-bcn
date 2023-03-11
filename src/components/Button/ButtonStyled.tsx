import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 10px;
  border: solid 2px red;
  padding: 0.8rem;
  width: 100%;
  color: black;

  :disabled {
    :disabled {
      opacity: 70%;
    }
  }
`;

export default ButtonStyled;
