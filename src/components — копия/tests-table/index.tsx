import { TestsTableType } from "../../types";
import React from "react";
import Table from "../table";
import { ColumnDefinitionType } from "../table/types";

import "./_index.scss";

const columns: ColumnDefinitionType<TestsTableType, keyof TestsTableType>[] = [
  {
    key: "name",
    header: "NAME",
    width: 389,
  },
  {
    key: "type",
    header: "TYPE",
    width: 100,
  },
  {
    key: "status",
    header: "STATUS",
    width: 62,
  },
  {
    key: "site",
    header: "SITE",
    width: 117,
  },
  {
    key: "buttonText",
    header: "",
    width: 95,
  },
];

type Props = {
  data: TestsTableType[];
};
const TestsTable: React.FC<Props> = (props) => {
  const { data } = { ...props };

  return <Table data={data} columns={columns} />;
};

export default TestsTable;
