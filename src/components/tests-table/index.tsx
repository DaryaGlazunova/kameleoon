import React from "react";
import "./_index.scss";
import { SortTable, TestsTableType } from "../../types";
import { ColumnDefinitionType } from "./types";
import TableRows from "./rows";
import Header from "./header";

type Props = {
  data: TestsTableType[];
  sorting: SortTable;
  setSorting: (newSorting: SortTable) => void;
};

const TestsTable: React.FC<Props> = (props) => {
  const { data, sorting, setSorting } = { ...props };

  const columns: ColumnDefinitionType<TestsTableType, keyof TestsTableType>[] =
    [
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

  return (
    <table className="table">
      <Header setSorting={setSorting} sorting={sorting} columns={columns} />
      <TableRows columns={columns} data={data}></TableRows>
    </table>
  );
};

export default TestsTable;
