import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Button } from "../style/Button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { Route } from "react-router-dom";

const Profile = () => {
  //  GET USER DATA
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const { user } = useSelector((state) => state?.auth);

  useEffect(() => {
    setFname(user.fname);
    setLname(user.lname);
    setEmail(user.email);
    setAddress(user.address);
  }, []);

  // UPDATE USER

  const updateData = { fname, lname, email, address };

  const HandleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/update-user`,
        updateData
      );

      if (data.success) {
        let ls = localStorage.getItem("Auth");
        ls = JSON.parse(ls);
        ls.user = data.updateUserProfile;
        localStorage.setItem("Auth", JSON.stringify(ls));

        toast.success(data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Layout>
      <Wrapper>
        <div className="profile-main-div">
          <div className="row">
            <div className="col-md-12 m-auto text-center">
              <div className="card-header mt-5">
                <h3 className="text-uppercase">Edit Profile</h3>
                <div className="card-body">
                  <form onSubmit={HandleUpdate} className="main_form">
                    <input
                      type="text"
                      name=""
                      autoFocus
                      placeholder="First Name"
                      id="inp"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <input
                      type="text"
                      name=""
                      placeholder="Last Name"
                      id="inp"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                    <br />
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      id="inp"
                      className="w-100"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <textarea
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      className="w-100"
                      id="inp"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button type="submit" className="w-100">
                      Update Profile
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .profile-main-div {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    overflow-x: hidden;
    align-items: center;
  }
  #inp {
    border: none;
    background-color: #f0f0f0;
    outline: none;
    border-bottom: 2px solid #2e1f1f;
    margin: 10px;
  }

  input {
    width: 285px;
  }

  @media (max-width: 700px) {
    input ,textarea{
      width:90% !important;
    }
    button {
      width: 75% !important;
    }
  }
`;

export default Profile;
