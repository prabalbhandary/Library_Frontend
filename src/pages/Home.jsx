import React from "react";
import { Link } from 'react-router-dom'
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page bg-dark text-light container-fluid">
      <div className="row container">
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column"
          style={{ height: "91.5vh" }}
        >
          <h2 style={{ fontSize: "80px" }}>Book Store</h2>
          <h3 style={{ fontSize: "50px" }}>For You</h3>
          <p className="mb-0" style={{ color: "silver" }}>
            Checkout the books from here
          </p>
          <Link to="/books" className="view-book my-3 text-decoration-none">View Books</Link>
        </div>
        <div
          className="col-lg-6 d-flex justify-content-center align-items-center flex-column"
          style={{ height: "91.5vh" }}
        >
          <img
            className="img-fluid home-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6djb2_vfrztnrnrIRcPnMJRXXAYfTGbjYGWBrhiHdA&s"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
