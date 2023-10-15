import React from "react";

const Error = () => {
  return (
    <>
      <div
        className=""
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:"#efe2e2",
          flexDirection:"column"
        }}
      >
        <h1 className="text-danger">
          SORRY,
          <span className="text-secondary" style={{ fontSize: "4rem" }}>
            Page Not Found
          </span>
        </h1>
        <h1 style={{color:"#ce0d0d"}}>404  <span className="text-secondary" style={{ fontSize: "4rem" }}>
            ERROR
          </span></h1>
      </div>
    </>
  );
};

export default Error;
