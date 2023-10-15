import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  deleteCart,
} from "../redux-tollkit/CartSlice";

const CartPage = ({ product }) => {
  const { _id, image, title, price, quantity } = product;

  const Dispatch = useDispatch();

  // increase cart quantity
  const increaseCartProduct = (product) => {
    Dispatch(addToCart(product));
  };

  // decrease cart quantity
  const decreaseCartProduct = (product) => {
    Dispatch(decreaseCart(product));
    console.log(product);
  };

  // delete cart product
  const DeleteCartProduct = (_id) => {
    Dispatch(deleteCart(_id));
  };

  return (
    <Wrapper>
      <div className="row">
        <div className="col-md-9 m-auto text-center mb-3">
          <div className="card shadow w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-lg-0">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/${image}`}
                    alt=""
                    className="cart-image"
                  />
                </div>
                <div className="col-lg-3 col-md-12 ">
                  <div className="alignColums">
                    <strong className="product-title">{title}</strong>
                    <strong className="product-price">{price}₹</strong>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="alignColums">
                    <i
                      className="bi bi-dash"
                      onClick={() => decreaseCartProduct(product)}
                    ></i>
                    <input
                      type="text"
                      name=""
                      value={quantity}
                      id=""
                      style={{
                        width: "50px",
                        textAlign: "center",
                      }}
                      readOnly
                    />
                    <i
                      className="bi bi-plus"
                      onClick={() => increaseCartProduct(product)}
                    ></i>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="alignColums">
                    <div className="total_price">
                      <strong>{price * quantity}₹</strong>
                    </div>
                    <div className="delete-product">
                      <i
                        className="bi bi-trash3-fill"
                        onClick={() => DeleteCartProduct(_id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .alignCart {
    margin-top: 10px;
    align-items: center;
  }
  .cart-image {
    border-radius: 10px;
    width: 100%;
    height: 80px;
  }

  .alignColums {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    gap: 10px;
  }

  .bi-dash,
  .bi-plus {
    font-size: 2rem;
    font-weight: 900;
    cursor: pointer;
    color: #e7e6e6;
    font-weight: bolder;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #5dd45b;
  }

  .bi-dash:hover,
  .bi-plus:hover {
    background-color: #09a81e;
  }

  .bi-trash3-fill {
    font-size: 2.2rem;
    cursor: pointer;
    color: #f35757;
  }

  .bi-trash3-fill:hover {
    color: #df2323;
  }

  @media (max-width: 700px) {
    .cart-image {
      height: 180px;
    }
  }
`;

export default CartPage;
