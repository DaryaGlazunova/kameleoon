import React, { useState, useEffect } from "react";
import Title from "../../components/title";
import BackButton from "../../components/back-button";
import "./_index.scss";
import { useParams } from "react-router-dom";
import { fetchTest } from "../../api";
import { Test } from "../../types";

type Props = {
  title: string;
  subtitle: string;
};

const ItemInfo: React.FC<Props> = (props) => {
  const { title, subtitle } = { ...props };
  const [testItem, setTestItem] = useState<Test>();
  const ItemId = useParams().id;

  const getTest = async () => {
    if (ItemId) {
      const data = await fetchTest(ItemId);
      setTestItem(data);
    }
  };

  useEffect(() => {
    getTest();
  }, []);

  return (
    <div className="Item-info container">
      <div className="Item-info__title">
        <Title titleText={title} />
      </div>
      <div className="Item-info__subtitle subtitle">{subtitle}</div>
      <div className="Item-info__body">
        {testItem && (
          <div className="Item-info__container ">
            <div className="Item-info__name">{testItem.name}</div>
            <div className="Item-info__type">{testItem.type}</div>
            <div className="Item-info__status">{testItem.status}</div>
          </div>
        )}
      </div>
      <div className="Item-info__back-button">
        <BackButton />
      </div>
    </div>
  );
};

export default ItemInfo;
