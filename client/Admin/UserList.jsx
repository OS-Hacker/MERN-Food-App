import React, { useEffect, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import Layout from "../components/Layout";
import axios from "axios";

const UserList = () => {
  const getRegisterUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/get-user`
      );
      setUserData(data.user);
      console.log(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRegisterUser();
  }, []);

  const [userData, setUserData] = useState([]);

  return (
    <>
      <Layout>
        <AdminSideBar />
        <div className="main" style={{width:"100%",height:"100vh"}}>
          <div className="row">
            <div className="col-lg-8  m-auto text-center">
              <table className="table table-striped table-hover shadow-lg align-items-center">
                <thead className="table-dark" >
                  <tr className="text-uppercase">
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((users) => {
                    const {fname,lname,email,address} = users
                    return (
                      <tr>
                        <th scope="row">{fname} {lname}</th>
                        <th scope="row">{email}</th>
                        <th scope="row">{address}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default UserList;
