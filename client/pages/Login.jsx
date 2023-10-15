import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Button } from "../style/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux-tollkit/Actions";

const Login = ({ setModalCondition, setShow }) => {
  // get user & token
  const Dispatch = useDispatch();

  // getFormData
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = { email, password };

  const loginHandler = (e) => {
    e.preventDefault();
    Dispatch(loginUser(formData));
    setShow(false);
  };

  const { isLoading, token } = useSelector((state) => state?.auth);

  const Navigate = useNavigate();

  useEffect(() => {
    token && Navigate("/");
  }, [token, Navigate]);

  return (
    <Wrapper>
      {
        <>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              autoFocus
              name="email"
              placeholder="Enter Email"
              value={email}
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
              value={password}
              className="w-100"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex justify-content-end mb-3">
              <span className="me-2"> Not registered? </span>
              <NavLink className="" onClick={() => setModalCondition(true)}>
                Create An Account
              </NavLink>
            </div>
            <Button type="submit" className="w-100">
              Login
            </Button>
          </form>
        </>
      }
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main_form {
    font-size: 1.7rem;
    width: 450px;
  }

  #inp {
    border: none;
    outline: none;
    border-bottom: 2px solid #cfc4c4;
    margin: 10px;
  }
`;

export default Login;
