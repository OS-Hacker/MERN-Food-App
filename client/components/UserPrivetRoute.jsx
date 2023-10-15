import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";

const UserPrivetRoute = () => {
  const { token } = useSelector((state) => state?.auth);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    
    const checkFunc = async () => {

      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/protect-user`
        );
        
        if (data.ok) {
       return setOk(true);
      } else {
       return setOk(false);
      }
    };
    
    if (token) {
      checkFunc();
    }
  }, [token]);
  
  return ok ? <Outlet /> : <Loading />;
};

export default UserPrivetRoute;
