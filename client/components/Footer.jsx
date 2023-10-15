import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="mb-4">
                <NavLink className="link">Privacy</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Security</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Terms</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Sitemap</NavLink>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-4">
                <NavLink className="link"> Press Kit</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Contact Us </NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Report Fraud</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link ">Partner With Us</NavLink>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-4">
                <NavLink className="link">Blog</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Work With Us</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Investor Relations</NavLink>
              </div>
              <div className="mb-4">
                <NavLink className="link">Feeding India</NavLink>
              </div>
            </div>
            <div className="col-md-3 ">
              <img
                src="../images/footer image.avif"
                width="180px"
                height="170px"
                style={{ borderRadius: "50%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-footer {
    width: 100%;
    height: 33vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #071952;
  }
  .link {
    color: white;
    align-items: center;
  }
  .link:hover {
    color: #f64328;
  }

  @media (max-width: 700px) {
    .main-footer {
      height: 100%;
      text-align: center;
    }
  }
`;

export default Footer;
