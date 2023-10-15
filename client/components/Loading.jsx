import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Loading = () => {
  const Navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const Time = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && Navigate("/");
    return () => clearInterval(Time);
  }, [count, Navigate]);
  return (
   
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {}
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
         
        <h4>Please Wait {count}...</h4>
      </div>
  );
};

export default Loading;
