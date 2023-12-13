export enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface Site {
  id: number;
  url: string;
}

export interface Test {
  id: number;
  name: string;
  type: Type;
  status: Status;
  siteId: number;
}

export type filterTestsParams = {
  sortBy?: string;
  order?: string;
  search: string;
};

export type TestsTableType = Omit<Test, "siteId"> & {
  buttonText: string;
  site: string;
};

export enum OrderEnum {
  ASC = "asc",
  DESC = "desc",
}

export const sortColumns = ["name", "type", "site", "status"];

export type sortColumns = Omit<TestsTableType, "buttonText" | "id">;

export type SortTable = {
  column: keyof sortColumns;
  order: OrderEnum;
};

// export type SortTable<T, K extends keyof T> = {
//   column: K;
//   order: OrderEnum;
// };
