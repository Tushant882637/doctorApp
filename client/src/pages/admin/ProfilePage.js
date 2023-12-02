import React from "react";
import LayOuts from "../../components/LayOuts";
import { useSelector } from "react-redux";
const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <LayOuts>
      <h1 className="text-center">Profile of Information of Users</h1>
      {user && (
        <center>
          <div
            className="card"
            style={{
              width: "350px",
              height: "170px",
              backgroundColor: "#eee",
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="card-body">
              <h5 className="text-center">{user.name}</h5>
              <h5 className="text-center">Email:{user.email}</h5>
              <h5 className="text-center">id:{user._id}</h5>
            </div>
          </div>
        </center>
      )}
    </LayOuts>
  );
};

export default ProfilePage;
