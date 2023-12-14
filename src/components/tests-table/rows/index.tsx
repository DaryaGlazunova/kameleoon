import React from "react";
import { ColumnDefinitionType } from "../types";
import { TestsTableType } from "../../../types";
import Button from "../../button";

type Props = {
  columns: ColumnDefinitionType<TestsTableType, keyof TestsTableType>[];
  data: TestsTableType[];
};

const statusColors = [
  { status: "paused", color: "orange" },
  { status: "online", color: "green" },
  { status: "draft", color: "grey" },
  { status: "stopped", color: "red" },
];

const siteColors = [
  { site: "market", color: "red" },
  { site: "delivery", color: "purple-light" },
  { site: "games", color: "purple-dark" },
];

const columnCellData = (
  row: TestsTableType,
  column: ColumnDefinitionType<TestsTableType, keyof TestsTableType>
) => {
  switch (column.key) {
    case "buttonText":
      return (
        <div className={"table__cell-content"}>
          <Button
            ButtonLink={
              String(row.status).toLocaleLowerCase() === "draft"
                ? `/finalize/${row.id}`
                : `/results/${row.id}`
            }
            onClickButton={() => ""}
            ButtonColor={
              String(row.status).toLocaleLowerCase() === "draft"
                ? "#7D7D7D"
                : "#2EE5AC"
            }
            ButtonText={
              String(row.status).toLocaleLowerCase() === "draft"
                ? "Finalize"
                : "Result"
            }
          />
        </div>
      );
    case "status": {
      const textColor = statusColors.find(
        (item) => item.status === row.status.toLocaleLowerCase()
      );

      return (
        <div
          className={`table__cell-content table__cell-status_${textColor?.color}`}
        >
          {String(row[column.key])}
        </div>
      );
    }
    case "type":
      return (
        <div
          className={
            row.type.length === 3
              ? "table__cell-content"
              : "table__cell-content lowercase"
          }
        >
          {String(row[column.key])}
        </div>
      );

    default:
      return (
        <div className={"table__cell-content"}>{String(row[column.key])}</div>
      );
  }
};

const TableRows = (props: Props) => {
  const { columns, data } = { ...props };

  const rows = data.map((row, index) => {
    const beforeElementColor = siteColors.find((item) =>
      row.site.toLocaleLowerCase().includes(item.site)
    );
    return (
      <tr
        className={`table__row table__row_${beforeElementColor?.color}`}
        key={`row-${index}`}
      >
        {columns.map((column, index2) => {
          return (
            <td
              key={`cell-${index2}`}
              className={`table__cell-${String(column.key)}`}
            >
              {/* <div className={"table__cell-content"}>
                {column.key !== "buttonText" ? (
                  String(row[column.key])
                ) : (
                  <Button
                    onClickButton={() => ""}
                    ButtonColor={
                      String(row.status).toLocaleLowerCase() === "draft"
                        ? "#7D7D7D"
                        : "#2EE5AC"
                    }
                    ButtonText={
                      String(row.status).toLocaleLowerCase() === "draft"
                        ? "Finalize"
                        : "Result"
                    }
                  />
                )}
              </div> */}

              {columnCellData(row, column)}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRows;
