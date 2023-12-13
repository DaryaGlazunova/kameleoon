import TableHeader from "./header";
import { TableProps } from "./types";
import TableRows from "./rows";
import React from "react";

const Table = <T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>): JSX.Element => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
};

export default Table;
