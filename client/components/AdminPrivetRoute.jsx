import { useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";

const AdminPrivetRoute = () => {
  const [ok, setOk] = useState(false);
  const { token } = useSelector((state) => state?.auth);

  useEffect(() => {
    const checkFunc = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/protect-admin`
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

  return ok ? <Outlet /> : <Loading/>;
};

export default AdminPrivetRoute;
