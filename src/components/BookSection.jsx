import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookSection = ({ data, fetchData }) => {
  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/delete/${_id}`);
      fetchData(); // Fetch updated data after deletion
      alert("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book");
    }
  };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="m-3"
            style={{
              width: "200px",
              height: "350px",
              border: "1px solid #fff",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                style={{
                  width: "200px",
                  height: "210px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                className="img-fluid"
                src={item.image}
                alt=""
              />
            </div>
            <h6 style={{ fontSize: "15px" }} className="px-2 my-1 text-light">
              {item.bookName.slice(0, 20)}...
            </h6>
            <b
              style={{ fontSize: "30px", color: "#ff0000" }}
              className="mb-2 px-2"
            >
              Rs {item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center my-2">
              <Link to={`/update/${item._id}`}>
                <button className="btn btn-primary">UPDATE</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookSection;
