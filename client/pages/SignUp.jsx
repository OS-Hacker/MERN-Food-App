import React, { useEffect, useState } from "react";
import { Button } from "../style/Button";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux-tollkit/Actions";

const SignUp = ({ setModalCondition }) => {
  // getFormData
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const formData = { fname, lname, email, password, address };

  const Dispatch = useDispatch();

  const SignupHandler = (e) => {
    e.preventDefault();
    Dispatch(registerUser(formData));
  };

  const { token } = useSelector((state) => state?.auth);

  const Navigate = useNavigate();

  useEffect(() => {
    token && Navigate("/");
  }, [token]);

  return (
    <Wrapper>
      <div className="main">
        <div className="form_container">
          <form className="main_form" onSubmit={SignupHandler}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name=""
                  autoFocus
                  placeholder="First Name"
                  id="inp"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name=""
                  placeholder="Last Name"
                  id="inp"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              id="inp"
              className="w-100"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              id="inp"
              className="w-100"
              onChange={(e) => setPassword(e.target.value)}
            />
            <textarea
              type="text"
              name="address"
              placeholder="Enter Address"
              className="w-100"
              id="inp"
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="d-flex justify-content-end mb-3">
              <span> Already a member ?</span>
              <NavLink
                className="ms-2"
                onClick={() => setModalCondition(false)}
              >
                Login
              </NavLink>
            </div>
            <Button className="w-100" type="submit">
              Signup
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  #inp {
    border: none;
    outline: none;
    border-bottom: 2px solid #cfc4c4;
    margin: 10px;
  }

  @media (max-width: 700px) {
    input {
      width: 100%;
    }
  }
`;
export default SignUp;
