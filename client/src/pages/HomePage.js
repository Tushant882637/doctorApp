import React, { useEffect, useState } from "react";
import axios from "axios";
import LayOuts from "../components/LayOuts";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  // login user data
  const [doctors, setDoctors] = useState([]);
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/vi/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <LayOuts>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </LayOuts>
  );
};

export default HomePage;
