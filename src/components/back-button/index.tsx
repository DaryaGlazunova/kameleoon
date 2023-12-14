import React from "react";
import "./_index.scss";
import backImage from "@images/svg/back-button.svg";
import { Link } from "react-router-dom";

const BackButton: React.FC = () => {
  return (
    <Link to="/" className="button-back">
      <img className="button-back__image" src={backImage} alt="" />
      <div className="button-back__text">Back</div>
    </Link>
  );
};

export default BackButton;
