import React, { useEffect } from "react";
import Layout from "../components/Layout";
import AdminSideBar from "../components/AdminSideBar";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux-tollkit/ProdutSlice";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;
import { EditOutlined, DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const ShowProduct = () => {
  const Dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.foodData);

  useEffect(() => {
    Dispatch(getData());
  }, [Dispatch]);

  const Navigate = useNavigate();

  // DELETE PRODUCT
  const deleteHandler = async (id) => {
    try {
      console.log(id);
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/delete-product/${id}`
      );

      if (data.success) {
        toast.success(data.msg);
        Dispatch(getData());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Wrapper>
          <AdminSideBar/>
        <div className="main_div">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error />
          ) : (
            <div className="row">
              <div className="col-md-12 mt-3">
                <div className="grid">
                  {products.map((product) => {
                    const { _id, title, desc, image, price, ratings } = product;
                    return (
                      <div className="" key={_id}>
                        <Card
                          hoverable
                          style={{ width: 240, height: 280 }}
                          cover={
                            <img
                              src={`${import.meta.env.VITE_BASE_URL}/${image}`}
                              alt=""
                              style={{ height: "150px", padding: "0px" }}
                            />
                          }
                        >
                          <h1></h1>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                              <h5 className="">{title}</h5>
                            </div>
                            <div className="star_icon">
                              {ratings}
                              <StarOutlined className="ms-1" />
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="">
                              <p>{desc.substring(0, 15)}...</p>
                            </div>
                            <div className="">{price}₹</div>
                          </div>
                          <div className="d-flex justify-content-around align-items-center">
                            <EditOutlined
                              key="edit"
                              onClick={() =>
                                Navigate(
                                  `/Deshbored/admin/update-product/${_id}`
                                )
                              }
                            />
                            <DeleteOutlined
                              onClick={() => deleteHandler(_id)}
                            />
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .main_div {
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px 0px;
    justify-items: center;
  }

  .star_icon {
    color: green;
    margin-right: 4px;
  }
`;

export default ShowProduct;
