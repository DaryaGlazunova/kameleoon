import React from "react";
import { TestsTableType } from "../../types";

type Props = {
  testData: TestsTableType;
};

const TestItem = (props: Props) => {
  const { testData } = { ...props };

  return (
    <div className="test-item__container ">
      <div className="test-item__name">{testData.name}</div>
      <div className="test-item__type">{testData.type}</div>
      <div className="test-item__status">{testData.status}</div>
      <div className="test-item__site">{testData.site}</div>
      <div className="test-item__btn">{testData.buttonText}</div>
    </div>
  );
};

export default TestItem;
