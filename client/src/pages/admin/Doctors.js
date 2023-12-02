import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOuts";
import axios from "axios";
import { Table, message } from "antd";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const getDoctor = async () => {
    try {
      const res = await axios.get("/api/vi/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {}
  };
  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/vi/admin/changeAccountStatus",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };
  useEffect(() => {
    getDoctor();
  }, []);
  //antd table col
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName}
          {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => handleAccountStatus(record, "reject")}
            >
              Reject
            </button>
          )}
        </div>
      ),
    },
  ];
  return (
    <LayOut>
      <h1>Doctor List</h1>
      <Table columns={columns} dataSource={doctors}></Table>
    </LayOut>
  );
};

export default Doctors;
