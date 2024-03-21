import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateBook = ({ _id }) => {
  const [data, setData] = useState({
    bookName: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/books/:${_id}`);
        setData(response.data); // Assuming the response.data structure matches the initial state
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [_id]);

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/v1/books/:${_id}`, data)
      .then((res) => {
        alert(res.data.message);
      });
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "91.5vh" }}>
      <div className="container p-4">
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label text-light">Book Name</label>
          <input type="text" className="form-control" id="bookName" placeholder="Enter Book Name" name="bookName" onChange={change} value={data.bookName} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label text-light">Author</label>
          <input type="text" className="form-control" id="author" placeholder="Enter the name of Author" name="author" onChange={change} value={data.author} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-light">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Enter Description for the book" name="description" onChange={change} value={data.description} />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label text-light">Image URL</label>
          <input type="text" className="form-control" id="image" placeholder="Enter URL for image" name="image" onChange={change} value={data.image} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label text-light">Price</label>
          <input type="number" className="form-control" id="price" placeholder="Enter Price" name="price" onChange={change} value={data.price} />
        </div>
        <button className="btn btn-primary" onClick={submit}>Update</button>
      </div>
    </div>
  );
};

export default UpdateBook;
