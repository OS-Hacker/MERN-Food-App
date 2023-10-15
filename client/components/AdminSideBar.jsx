import React from "react";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="row m-3">
      <div className="col-lg-6 m-auto text-uppercase">
        <div className="card shadow-lg p-2">
          <ul className="nav nav-pills flex-column flex-sm-row justify-content-center">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/Deshbored/admin/user-List"
                style={{ fontWeight: "900" }}
              >
                User-List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Deshbored/admin/create-product"
                style={{ fontWeight: "900" }}
              >
                Create-Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Deshbored/admin/show-product"
                style={{ fontWeight: "900" }}
              >
                Product-List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
