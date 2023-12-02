import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-4"
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
        style={{ cursor: "pointer" }}
      >
        <div className="card-header">
          Dr.{doctor.firstName}
          {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization</b>:{doctor.specialization}
          </p>
          <p>
            <b>Experience</b>:{doctor.experience}
          </p>
          <p>
            <b>Fees Per Cunsaltation</b>:{doctor.feesPerCunsaltation}
            <b>$</b>
          </p>
          <p>
            <b>Status</b>:{doctor.status}
          </p>
          <p>
            <b>Timing</b>:{doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
