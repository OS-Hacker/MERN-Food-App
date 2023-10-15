import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { styled } from "styled-components";

const SearchBar = ({ setSearchInput }) => {
  return (
    <Wrapper>
      <div className="main-search-div">
        <div className="search">
          <SearchOutlined className="icon" />
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value).toLowerCase()}
            name=""
            className="shadow"
            id="serche-bar"
            placeholder="Search..."
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-search-div {
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
  }

  .search {
    position: relative;
  }

  #serche-bar {
    border: none;
    outline: none;
    width: 400px;
    height: 6vh;
    border-radius: 30px;
    padding-left: 25px;
  }

  .icon {
    position: absolute;
    left: 6px;
    bottom: 8px;
    font-weight: 900;
  }

  @media (max-width:700px) {
    #serche-bar{
      width: 100%;
    }
  }
`;

export default SearchBar;
