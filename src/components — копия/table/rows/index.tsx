import { ColumnDefinitionType } from "../types";
import React from "react";

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>) => {
  const rows = data.map((row, index) => {
    return (
      <tr className="table__row" key={`row-${index}`}>
        {columns.map((column, index2) => {
          return (
            <td
              key={`cell-${index2}`}
              className={`table__cell-${String(column.key)}`}
            >
              <div className={"table__cell-content"}>
                {String(row[column.key])}
              </div>
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
