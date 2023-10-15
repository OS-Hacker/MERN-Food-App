import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { Button, Modal, Dropdown, Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
// icons
import { SiIfood } from "react-icons/Si";
import { CgProfile } from "react-icons/Cg";
import { PiShoppingCartBold } from "react-icons/Pi";
import { BiFoodMenu } from "react-icons/Bi";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  // NavLink
  const Navstyle = ({ isActive }) => {
    return {
      color: isActive ? "#da4b3b" : "black",
      fontSize: isActive ? "1.8rem" : "1.7rem",
      fontWeight: isActive ? "bold" : "",
    };
  };

  // Sign up modal
  const [show, setShow] = useState(false);

  const [modalCondition, setModalCondition] = useState(false);

  const { user, token } = useSelector((state) => state?.auth);

  // logout
  const LogoutHandler = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    Route.relode();
  };

  // Dropdown
  const items = [
    {
      label: (
        <NavLink
          rel="noopener noreferrer"
          to={`/Deshbored/${user?.isAdmin ? "admin" : "user"}`}
        >
          {user?.isAdmin ? "Deshbored" : "Profile"}
        </NavLink>
      ),
      key: "1",
      icon: <CgProfile style={{ fontSize: "2rem" }} />,
    },
    {
      label: (
        <NavLink
          rel="noopener noreferrer"
          to={`/Deshbored/${user?.isAdmin ? "admin/orders" : "orders"}`}
        >
          Orders
        </NavLink>
      ),
      key: "2",
      icon: <BiFoodMenu className="icon" style={{ fontSize: "2rem" }} />,
    },
    {
      label: (
        <NavLink rel="noopener noreferrer" onClick={LogoutHandler}>
          Logout
        </NavLink>
      ),
      key: "3",
      icon: <LogoutOutlined className="icon" style={{ fontSize: "2rem" }} />,
    },
  ];

  const menuProps = {
    items,
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    }
  }, [token]);

  // cart
  const { cartProduct } = useSelector((state) => state.cartData);

  // category
  const { products } = useSelector((state) => state?.foodData);

  const getcategorys = (data, proparty) => {
    let category = data.map((item) => {
      return item[proparty];
    });

    return (category = [...new Set(category)]);
  };

  const getUniqCategory = getcategorys(products, "category");

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg bg-light shadow-lg p-3 rounded ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <SiIfood className="icon" style={{ color: "#f64328" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item me-3 ">
                <NavLink
                  style={Navstyle}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink style={Navstyle} className="nav-link" to="/Food">
                  FOOD
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORYS
                </a>
                <ul className="dropdown-menu">
                  {getUniqCategory.map((category) => {
                    return (
                      <li>
                        <Link className="dropdown-item" href="#">
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <li className="nav-item">
            <NavLink className="nav-link me-5" to="/Cart">
              <Badge count={cartProduct.length}>
                <PiShoppingCartBold className="cart-icon" />
              </Badge>
            </NavLink>
          </li>
          <li className="nav-item">
            {!user ? (
              <>
                <Button
                  className="Login-btn"
                  onClick={() => setShow(true)}
                  aria-current="page"
                  style={{ width: "80px" }}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Dropdown.Button menu={menuProps} icon={<UserOutlined />}>
                  <h5>{user.fname}</h5>
                </Dropdown.Button>
              </>
            )}
          </li>
        </div>
      </nav>

      {/* Modal*/}
      <Modal
        style={{ textAlign: "center" }}
        title={modalCondition ? "SIGN UP" : "LOGIN"}
        centered
        footer={null}
        open={show}
        onCancel={() => setShow(false)}
      >
        {modalCondition ? (
          <SignUp setModalCondition={setModalCondition} setShow={setShow} />
        ) : (
          <Login setModalCondition={setModalCondition} setShow={setShow} />
        )}
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .navbar {
    width: 100%;
    font-size: 1.6rem;
    height: 9vh;
    color: #f1efef;
    z-index: 999;
  }

  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .Login-btn {
    font-weight: 900;
    background: #e4f1ff;
  }

  .nav-link {
    font-weight: 600;
    font-size: 1.8rem;
  }

  .icon {
    font-size: 3.3rem;
  }

  .cart-icon {
    font-size: 2.5rem;
  }
`;

export default Navbar;
