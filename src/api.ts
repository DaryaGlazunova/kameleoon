import axios from "axios";
import { Site, Test, filterTestsParams } from "./types";

export const fetchTests = async (
  params: filterTestsParams
): Promise<Test[]> => {
  const { search } = params;
  const apiPath = `http://localhost:3100/tests?name_like=${search}`;
  const { data } = await axios.get<Test[]>(apiPath);
  console.log(apiPath);
  return data;
};

export const fetchSites = async (): Promise<Site[]> => {
  const apiPath = `http://localhost:3100/sites`;
  const { data } = await axios.get<Site[]>(apiPath);

  return data;
};
