import React from "react";
import { SortTable, TestsTableType, OrderEnum } from "../../../types";
import { ColumnDefinitionType } from "../types";
import imgSort from "@images/svg/Chevron.svg";

type Props = {
  column: ColumnDefinitionType<TestsTableType, keyof TestsTableType>;
  sorting: SortTable;
  setSorting: (newSorting: SortTable) => void;
};

const HeaderCell = (props: Props) => {
  const { column, sorting, setSorting } = { ...props };
  const isDescSorting =
    sorting.column === column.key && sorting.order === OrderEnum.DESC;
  const isAscSorting =
    sorting.column === column.key && sorting.order === OrderEnum.ASC;
  const futureSortingOrder = isDescSorting ? OrderEnum.ASC : OrderEnum.DESC;

  const sortTable = (columnName: any) => {
    setSorting({ column: columnName, order: futureSortingOrder });
  };

  return (
    <th
      key={column.key}
      id={column.key.toString()}
      onClick={() => sortTable(column.key)}
    >
      <button>
        {column.header}
        {isDescSorting && (
          <img className="image-sort-desc" src={imgSort} alt="" />
        )}
        {isAscSorting && (
          <img className="image-sort-asc" src={imgSort} alt="" />
        )}
      </button>
    </th>
  );
};

export default HeaderCell;
