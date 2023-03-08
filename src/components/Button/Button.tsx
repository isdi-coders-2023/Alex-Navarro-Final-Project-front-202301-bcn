import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  text: string | number;
  action?: () => void;
  isDisabled: boolean;
}

const Button = ({
  className,
  text,
  action,
  isDisabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} className={className} disabled={isDisabled}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
