import { OrderEnum, SortTable, TestsTableType } from "../types";

export const SortData = (
  data: TestsTableType[],
  sortParams: SortTable
): TestsTableType[] => {
  const statusOrderAsc = ["ONLINE", "PAUSED", "STOPPED", "DRAFT"];
  const statusOrderDesc = ["DRAFT", "STOPPED", "PAUSED", "ONLINE"];

  switch (sortParams.column) {
    case "status":
      if (sortParams.order === OrderEnum.ASC) {
        const newData = data.sort(
          (a, b) =>
            statusOrderAsc.indexOf(a.status) - statusOrderAsc.indexOf(b.status)
        );
        return newData;
      } else {
        return data.sort(
          (a, b) =>
            statusOrderDesc.indexOf(a.status) -
            statusOrderDesc.indexOf(b.status)
        );
      }

    default:
      if (sortParams.order === OrderEnum.ASC) {
        return data.sort((a, b) => {
          return a[sortParams.column].localeCompare(b[sortParams.column]);
        });
      } else {
        return data.sort((a, b) => {
          return b[sortParams.column].localeCompare(a[sortParams.column]);
        });
      }
  }
};
