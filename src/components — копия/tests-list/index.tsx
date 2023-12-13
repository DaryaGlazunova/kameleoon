import React from "react";
import { TestsTableType } from "../../types";
import TestItem from "../test-item";

type Props = {
  data: TestsTableType[];
};

const TestsList = (props: Props) => {
  const { data } = { ...props };

  const testsListItems = data.map((item) => (
    <li key={item.id} className="tests-list__item test-item">
      <TestItem testData={item} />
    </li>
  ));

  const ColumnsList = ["name", "type", "status", "site", ""];

  return (
    <div className="tests-list">
      <div className="tests-list__header">{ColumnsList}</div>
      <div className="tests-list__body">{testsListItems}</div>
    </div>
  );
};

export default TestsList;
