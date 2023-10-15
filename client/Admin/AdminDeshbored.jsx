import React from "react";
import Layout from "../components/Layout";
import AdminSideBar from "../components/AdminSideBar";
import { useSelector } from "react-redux";

const AdminDeshbored = () => {
  const { user } = useSelector((state) => state?.auth);
  return (
    <Layout>
      <AdminSideBar />
      <div className="" style={{ width: "100%", height: "80vh" }}>
        <div className="row">
          <div className="col-md-8 text-center m-auto">
            <h1 className="alert alert-danger">Well-Come</h1>
            <h3 className="">Name : {user.fname}</h3>
            <h3 className="">Email : {user.email}</h3>
            <h3 className="">Address : {user.address}</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDeshbored;
