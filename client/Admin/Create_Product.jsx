import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import axios from "axios";
import Layout from "../components/Layout";
import AdminSideBar from "../components/AdminSideBar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Create_Product = () => {
  const [image, setImage] = useState("");

  // image
  const selectImage = (e) => {
    setImage(e.target.files[0]);
  };

  // formData
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [ratings, setRatings] = useState("");

  const Navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("ratings", ratings);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/create-product`,
        formData
      );

      console.log(data.product);
      if (data.success) {
        toast.success(data.msg);
        Navigate("/Deshbored/admin/show-product");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Layout>
        <AdminSideBar />
        <div className="row">
          <div className="container my-5">
            <section className="form-container">
              <form
                onSubmit={submitHandler}
                encType="multipart/form-data"
                className="shadow-lg p-4 m-3"
              >
                <h2 className="text-center text-uppercase">
                  Create Food Product
                </h2>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
                      name="title"
                      id="input"
                      onChange={(e) => setTitle(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      placeholder="Enter Price"
                      id="input"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="desc"
                  placeholder="Enter Desc"
                  id="input"
                  onChange={(e) => setDesc(e.target.value)}
                />

                <label htmlFor="My-File" className="parint" name="image">
                  {image ? (
                    <img src={URL.createObjectURL(image)} className="image" />
                  ) : (
                    <i className="bi bi-image alert alert-info w-100 text-center"></i>
                  )}
                </label>
                <input
                  type="file"
                  className="form-control file_style"
                  name="image"
                  placeholder="Enter Desc"
                  id="My-File"
                  accept="image/*"
                  hidden
                  onChange={selectImage}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  placeholder="Enter Category"
                  id="input"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="quantity"
                  placeholder="Enter Quantity"
                  id="input"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="ratings"
                  placeholder="Enter Ratings"
                  id="input"
                  onChange={(e) => setRatings(e.target.value)}
                />
                <Button className="mt-3 w-100" type="submit">
                  create
                </Button>
              </form>
            </section>
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    width: 100%;
  }

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 85vh;
    width: 100%;
  }
  #input {
    height: 6vh;
    font-size: 1.7rem;
  }

  form {
    width: 500px;
  }
  .file_style {
    width: 50%;
    height: 6vh;
    font-size: 1.6rem;
  }

  .file_Icon {
    cursor: pointer;
  }

  .uplode_file_container {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    align-items: center;
  }

  .parint {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0px;
    cursor: pointer;
  }

  .bi-image {
    font-size: 50px;
    color: #082608;
    margin-bottom: 0px;
  }

  .image {
    width: 200px;
    height: 120px;
    z-index: 9999;
    margin-top: 20px;
    margin: 0px;
  }

  @media (max-width: 700px) {
    form {
      width: 100%;
    }
  }
`;

export default Create_Product;
