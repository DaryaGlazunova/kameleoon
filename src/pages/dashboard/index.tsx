import React, { useState, useEffect } from "react";
import {
  Test,
  Site,
  Status,
  TestsTableType,
  SortTable,
  OrderEnum,
} from "../../types";
import "./_index.scss";
import Title from "../../components/title";
import Search from "../../components/search/search";
import { fetchSites, fetchTests } from "../../api";
import TestsTable from "../../components/tests-table";
import { removeProtocol } from "../../utils/removeProtocol";
import { SortData } from "../../utils/sortData";
import NoData from "../../components/no-data";

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [testsItems, setTestsItems] = useState<Test[]>([]);
  const [sitesItems, setSitesItems] = useState<Site[]>([]);
  const [tableData, setTableData] = useState<TestsTableType[]>([]);
  const [sitesItemsCount, setSitesItemsCount] = useState(0);
  const [sorting, setSorting] = useState<SortTable>({
    column: "type",
    order: OrderEnum.ASC,
  });

  const getTests = async () => {
    const order = sorting?.order || "";
    const sortBy = sorting?.column || "";
    const search = searchValue;
    const data = await fetchTests({ order, sortBy, search });
    setTestsItems(data);
  };
  const getSites = async () => {
    const data = await fetchSites();
    setSitesItems(data);
  };

  useEffect(() => {
    getTests();
    getSites();
  }, [searchValue]);

  useEffect(() => {
    const items = testsItems.map((testObject) => {
      const site = removeProtocol(
        sitesItems.find((siteObj) => siteObj.id === testObject.siteId)?.url
      );
      const buttonText =
        testObject.status == Status.DRAFT ? "Finalize" : "Results";
      return {
        ...testObject,
        site,
        buttonText,
      };
    });
    setTableData(SortData(items, sorting));
    setSitesItemsCount(items.length);
  }, [sorting, testsItems]);

  return (
    <div className="dashboard container">
      <div className="dashboard__title">
        <Title titleText="Dashboard" />
      </div>
      <div className="dashboard__search">
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          testsCount={sitesItemsCount}
        />
      </div>
      <div className="dashboard__body">
        {sitesItemsCount ? (
          <div className="dashboard__tests-list">
            <TestsTable
              setSorting={setSorting}
              sorting={sorting}
              data={tableData}
            />
          </div>
        ) : (
          <NoData setSearchValue={setSearchValue} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
