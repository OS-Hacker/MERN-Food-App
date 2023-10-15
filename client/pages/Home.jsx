import React from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import { Button } from "../style/Button";

const Home = () => {
  const bgImage = {
    backgroundImage:
      "url('./images/81f3ff974d82520780078ba1cfbd453a1583259680.avif')",
    height: "80vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Wrapper>
      <Layout>
        <div className="main-section">
          <div style={bgImage}>
            <div className="d-flex justify-content-center align-items-center h-100 text-center flex-column">
              {/* <h1 className="text-light">FOODIE</h1> */}
              <h2 className="text-light">
                 Best restaurants, cafés <br />
                and bars in India
              </h2>
            </div>
          </div>

          <div className="row" style={{ backgroundColor: "#f5f3f3" }}>
            <div className="col-md-7 d-flex justify-content-center align-items-center flex-column text-center">
              <h3 className="text-secondary">NEW OPENING</h3>
              <h1>
                HEALTHY AND TASTY <br />
                FOOD
              </h1>
              <Button className="">Order Now</Button>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
              <img src="./images/food delevry.png" width="600px" alt="" />
            </div>
          </div>
        </div>
      </Layout>
    </Wrapper>
    
  );
};

const Wrapper = styled.section`
  .main-section{
    width: 100%;
    overflow-x: hidden;
  }
`;

export default Home;
