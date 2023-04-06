import React from "react";
import "./Sidebar.css";
import Doctor from "../Asset/doctor.jpg";
import { BiHomeAlt, BiLogOut } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="main-container">
      <div className="profile">
        <img src={Doctor} alt="Profile photo" />
        <div className="doc-info">
          <h2>Dr. Jayesh Yeola</h2>
          <p>Lifecare Hospital, Kondhwa, Pune</p>
        </div>
      </div>
      <div className="buttons">
        <button>
          <BiHomeAlt
            size={25}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <p className="btn-info">Home</p>
        </button>
        <button>
          <BiLogOut
            size={25}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <p className="btn-info">Logout</p>
        </button>
      </div>
      <div className="container-consultation">
      <div className="consultation-menu">
          <h3 className="heading">Consultation Menu</h3>
        <button>Patient Profile</button>
        <button>Sub Assessment</button>
        <button>Obj Assessment</button>
        <button>Diagnosis</button>
        <button>Prescription</button>
        <button>Others</button>
        </div>
        </div>
      <div className="lab-menu">
        <h3 className="heading">Lab</h3>
        <button>Refer Tests</button>
        <button>Perform Tests</button>
        <button>Reports</button>
        <button>Lab Billing</button>
      </div>
    </div>
  );
}

export default Sidebar;
