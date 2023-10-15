import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Card } from "antd";
import { getData } from "../redux-tollkit/ProdutSlice";
const { Meta } = Card;
import { StarOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Button } from "../style/Button";
import { addToCart } from "../redux-tollkit/CartSlice";
import { useNavigate } from "react-router-dom";
import FilterNav from "../components/SearchBar";
import SearchBar from "../components/SearchBar";

const Food = () => {
  const Dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state?.foodData);

  useEffect(() => {
    Dispatch(getData());
  }, []);

  // modal
  const [Modle, setModle] = useState(false);

  // get single data
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [ratings, setRatings] = useState("");
  const [image, setImage] = useState("");
  const [_id, setId] = useState("");

  const Navigate = useNavigate();

  //  get cart date
  const addCartProduct = (e, product) => {
    e.preventDefault();
    Dispatch(addToCart(product));
    Navigate("/cart");
  };

  // Serach filter

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Layout>
        <Wrapper>
          <div className="main_div">
            {/* search bar  */}
            <SearchBar setSearchInput={setSearchInput} />

            {loading ? (
              <Loading />
            ) : error ? (
              <Error />
            ) : (
              <>
                <div className="grid mt-5">
                  {products
                    .filter((data) => {
                      if (data === "") {
                        return data;
                      } else {
                        return (
                          data.title.toLowerCase().includes(searchInput) ||
                          data.category.toLowerCase().includes(searchInput)
                        );
                      }
                    })
                    .map((product) => {
                      const {
                        _id,
                        title,
                        desc,
                        image,
                        price,
                        ratings,
                        category,
                      } = product;
                      return (
                        <div  key={_id}>
                          <Card
                            onClick={() => {
                              setModle(true),
                                setTitle(title),
                                setDesc(desc),
                                setPrice(price),
                                setCategory(category),
                                setQuantity(quantity),
                                setRatings(ratings);
                              setImage(image);
                              setId(_id)
                            }}
                            hoverable
                            style={{ width: 240, height: 280 }}
                            cover={
                              <img
                                src={`${
                                  import.meta.env.VITE_BASE_URL
                                }/${image}`}
                                alt=""
                                style={{ height: "150px", padding: "0px" }}
                              />
                            }
                          >
                            <div className="aligndiv">
                              <div className="">
                                <h5 className="">{title}</h5>
                              </div>
                              <div className="star_icon">
                                {ratings}
                                <StarOutlined className="ms-1" />
                              </div>
                            </div>
                            <div className="aligndiv">
                              <div className="">
                                <p>{desc.substring(0, 15)}...</p>
                              </div>
                              <strong className="mb-2">{price}₹</strong>
                            </div>
                            <Button
                              className="text-center w-100"
                              onClick={(e) =>
                                addCartProduct(e, product, setModle(false))
                              }
                            >
                              ADD TO CART
                            </Button>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </div>
          <Modal open={Modle} footer={null} onCancel={() => setModle(false)}>
            <div className="main" key={_id}>
              <h3 className="text-center">{title}</h3>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h5 className="category">{category}</h5>
                <div
                  style={{
                    backgroundColor: "#0e7800",
                    color: "#fff",
                    padding: "3px",
                    borderRadius: "10px",
                  }}
                >
                  {ratings}
                  <StarOutlined />
                </div>
              </div>
              <div
                className=" text-center"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "20px",
                  textAlign: "center",
                }}
              >
                <div className="">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/${image}`}
                    alt=""
                    width="200px"
                    height="180px"
                  />
                </div>
                <div className="">
                  <p>{desc}</p>
                  <h5 className="pb-2  text-center">Only {price}₹</h5>
                </div>
              </div>
            </div>
          </Modal>
        </Wrapper>
      </Layout>
    </>
  );
};

const Wrapper = styled.section`
  .main_div {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    gap: 30px 0px;
  }

  .aligndiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .star_icon {
    color: white;
    background-color: green;
    border-radius: 5px;
    padding: 0px 3px;
    font-size: 1.5rem;
    font-weight: 800;
  }

`;

export default Food;
