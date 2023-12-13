import React from "react";
import "./_index.scss";

type Props = {
  titleText: string;
};

const Title: React.FC<Props> = (props) => {
  const { titleText } = { ...props };
  return <h1 className="title">{titleText}</h1>;
};

export default Title;
