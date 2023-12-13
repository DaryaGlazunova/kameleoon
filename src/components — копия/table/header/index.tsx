import { TableHeaderProps } from "../types";
import React = require("react");

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100,
    };
    return (
      <th key={`headCell-${index}`} id={column.key.toString()} style={style}>
        <button></button>
        {column.header}
      </th>
    );
  });

  return (
    <thead>
      <tr className="table__column">{headers}</tr>
    </thead>
  );
};

export default TableHeader;
