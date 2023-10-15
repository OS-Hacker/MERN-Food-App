import React from "react";
import styled from "styled-components";

const EmptyPage = () => {
  return (
    <Wrapper>
      <div className="main-Empty-div">
        <img
          src="../images/empty cart.png"
          alt="Image Not Food"
          className="Empty-img"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-Empty-div {
    /* width: 100%; */
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }

  .Empty-img {
    height: 100vh;
  }
`;

export default EmptyPage;
