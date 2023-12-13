import React from "react";
import searchSvg from "@images/svg/Search.svg";
import "./_search.scss";

type Props = {
  setSearchValue: (value: string) => void;
  searchValue: string;
  testsCount: number;
};

const Search: React.FC<Props> = (props) => {
  const { setSearchValue, searchValue, testsCount } = { ...props };

  return (
    <form className="search__form">
      <img className="search__image" src={searchSvg} alt="" />
      <input
        type="text"
        placeholder="What test are you looking for?"
        className="search__input"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
      <div className="search__tests-count">
        {testsCount} {testsCount === 1 ? " test" : " tests"}
      </div>
    </form>
  );
};

export default Search;
