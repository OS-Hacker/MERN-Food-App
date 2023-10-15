import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import EmptyPage from "../components/EmptyPage";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartPage from "../components/CartPage";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import Checkout from "../components/Checkout";

const Cart = () => {
  const { cartProduct } = useSelector((state) => state.cartData);
  console.log(cartProduct);

  // getTotalPrice
  const [totalPrice, setTotalPrice] = useState(0);

  const total = () => {
    let getTotalPrice = 0;

    cartProduct.map((e) => {
      getTotalPrice = e.price * e.quantity + getTotalPrice;
    });

    setTotalPrice(getTotalPrice);
  };

  useEffect(() => {
    total();
  }, [total]);

  // getTotleQuantity
  const [totleQuantity, setTotleQuantity] = useState(0);

  const Quantity = () => {
    let getTotleQuantity = 0;

    cartProduct.map((e) => {
      getTotleQuantity = e.quantity + getTotleQuantity;
    });

    setTotleQuantity(getTotleQuantity);
  };

  useEffect(() => {
    Quantity();
  }, [Quantity]);

  return (
    <>
      <Layout>
        {cartProduct <= 0 ? (
          <EmptyPage />
        ) : (
          <Wrapper>
            <div className="card bg-dark text-light p-3 my-5 w-75 header">
              <li className="text-uppercase">Food</li>
              <li className="text-uppercase">Title</li>
              <li className="text-uppercase">Price</li>
              <li className="text-uppercase">Quantity</li>
              <li className="text-uppercase">Totle Price</li>
            </div>
            <section className="cart_main-section">
              <Scrollbars width="300px" height="300px">
                {cartProduct.map((product) => {
                  return <CartPage product={product} key={product._id} />;
                })}
              </Scrollbars>
              <div className="col-lg-3 mb-5 mx-3 summary">
                <div className="card shadow mt-2">
                  <div className="card-header py-3 ">
                    <h3 className="mb-0">Summary</h3>
                  </div>
                  <div className="card-body w-100">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <h4>TotalQuntaity</h4>
                        <h5 className="ms-4">{totleQuantity}</h5>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        <h4>Subtotal</h4>
                        <h5>{totalPrice} ₹</h5>
                      </li>
                    </ul>
                    <div className="text-center">
                      <Checkout subtotal={totalPrice} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Wrapper>
        )}
      </Layout>
    </>
  );
};

const Wrapper = styled.section`
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 50px;
  }

  .textUppercase{
   text-transform: uppercase;
  }

  .cart_main-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70vh;
  }
  @media (max-width: 700px) {
    .cart_main-section {
      flex-wrap: wrap;
      margin-bottom: 200px;
    }
    .header {
      display: none;
    }
    .summary {
      width: 100%;
      height: 50%;
    }
  }
`;

export default Cart;
