import React from "react";
import { ColumnDefinitionType } from "../types";
import { TestsTableType } from "../../../types";

type Props = {
  columns: ColumnDefinitionType<TestsTableType, keyof TestsTableType>[];
  data: TestsTableType[];
};

const TableRows = (props: Props) => {
  const { columns, data } = { ...props };

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
