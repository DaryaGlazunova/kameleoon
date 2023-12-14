import React from "react";
import "./_index.scss";
import { Link } from "react-router-dom";

type Props = {
  ButtonText: string;
  ButtonColor: string;
  ButtonLink?: string;
  onClickButton: (value: any) => void;
};

const Button: React.FC<Props> = (props) => {
  const {
    onClickButton,
    ButtonColor,
    ButtonText,
    ButtonLink = "",
  } = { ...props };
  return (
    <Link
      to={ButtonLink}
      className="button"
      onClick={(event) => onClickButton(event)}
      style={{
        backgroundColor: ButtonColor,
        border: `1px solid ${ButtonColor}`,
      }}
    >
      {ButtonText}
    </Link>
  );
};

export default Button;
