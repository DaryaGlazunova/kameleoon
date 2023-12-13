import React from "react";
import Button from "../button";
import "./_index.scss";

type Props = {
  setSearchValue: (value: string) => void;
};

const NoData: React.FC<Props> = (props) => {
  const { setSearchValue } = { ...props };

  return (
    <div className="no-data">
      <div className="no-data__title">
        Your search did not match any results.
      </div>
      <Button
        onClickButton={() => setSearchValue("")}
        ButtonText="Reset"
        ButtonColor="#2ee5ac"
      />
    </div>
  );
};

export default NoData;
