import React from "react";
import "./_index.scss";

type Props = {
  ButtonText: string;
  ButtonColor: string;
  onClickButton: (value: any) => void;
};

const Button: React.FC<Props> = (props) => {
  const { onClickButton, ButtonColor, ButtonText } = { ...props };
  return (
    <button
      className="button"
      onClick={(event) => onClickButton(event)}
      style={{ backgroundColor: ButtonColor }}
    >
      {ButtonText}
    </button>
  );
};

export default Button;
