import React from "react";
import { ColumnDefinitionType } from "../types";
import { SortTable, TestsTableType } from "../../../types";
import HeaderCell from "../header-cell";

type Props = {
  columns: ColumnDefinitionType<TestsTableType, keyof TestsTableType>[];
  sorting: SortTable;
  setSorting: (newSorting: SortTable) => void;
};

const Header = (props: Props) => {
  const { columns, sorting, setSorting } = { ...props };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <HeaderCell
            key={column.key}
            column={column}
            sorting={sorting}
            setSorting={setSorting}
          />
        ))}
      </tr>
    </thead>
  );
};

export default Header;
