import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOuts";
import axios from "axios";
import { Table } from "antd";
const Users = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    try {
      const res = await axios.get("/api/vi/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUser();
  }, []);
  //antd table col
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          <button className="btn btn-danger">Block</button>
        </div>
      ),
    },
  ];
  return (
    <LayOut>
      <h1>User List</h1>
      <Table columns={columns} dataSource={users}></Table>
    </LayOut>
  );
};

export default Users;
