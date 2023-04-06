import React from "react";
import "./Home.css";
import Patient from "../Asset/patient.jpg";

const Home = () => {
  return (
    <div className="major-container">
      <div className="patient">
        <div className="patient-image">
          <img src={Patient} alt="patient img" />
        </div>
        <div className="patient-info">
          <div className="heading-patient">
            <h2>Lisa Smith</h2>
          </div>
          <div className="data-patient">
            <div className="subdata">
              <p>HIN : SANC1234567890000</p>
              <p>Chief Complaint : Ankle Sprain</p>
            </div>
            <div className="subdata">
              <p>Mobile : 98356 20042</p>
              <p>Blood : A+</p>
            </div>
            <div className="subdata">
              <p>Female</p>
              <p>23Y | 07M | 09D</p>
            </div>
          </div>
        </div>
      </div>
      <div className="digital-main">
        <div className="digital-heading">
          <h2>
            Digital <span>HealthBook</span>
          </h2>
          <button>Help</button>
        </div>
        <div className="sub-container">
          <div className="dashboard">
            <div className="container-consultation">
              <div className="consultation-menu">
                <button>Dashboard</button>
                <h3 className="heading">Update Menu</h3>
                <button>K/C/O</button>
                <button>Family History</button>
                <button>Surgical History</button>
                <button>Allergies</button>
                <button>Habits</button>
                <button>Blood Group</button>
                <button>Blood weight</button>
                <button>Demographic Date</button>
              </div>
            </div>
          </div>
          <div className="Medicine">
            <div className="Upper-section">
              <div className="upper-heading">
                <h3>known Case of</h3>
                <h3 className="special">OPD105</h3>
              </div>
              <div className="disease">
                <p>Diabetes</p>
                <div className="check">
                  <button className="outline-btn">Active</button>
                  <button className="filled-btn">Cured</button>
                </div>
              </div>
              <div className="disease">
                <p>Hypertension</p>
                <div className="check">
                  <button className="outline-btn">Active</button>
                  <button className="filled-btn">Cured</button>
                </div>
              </div>
              <div className="disease">
                <p>Cancer</p>
                <div className="check">
                  <button className="outline-btn">Active</button>
                  <button className="filled-btn">Cured</button>
                </div>
              </div>
            </div>
            <div className="Lower-section">
              <h2>Update K/C/O</h2>
              <div className="search">
                <form action="#" method="get">
                  <input type="search" id="search" name="search" placeholder="Select Disease"/>
                </form>
                <div className="check">
                  <button className="outline-btn">Active</button>
                  <button className="filled-btn">Cured</button>
                </div>
              </div>
              <div className="main-lower">
                <button className="outline-btn">Add New</button>
                <div className="last-footer">
                  <button className="outline-btn">Add To Follow-Up</button>
                  <button className="outline-btn">Complete Examination</button>
                  <button className="outline-btn">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
