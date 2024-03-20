import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [data, setData] = useState({
    bookName: "",
    author: "",
    description: "",
    image: "",
    price: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault(); // Fixing typo here
    await axios.post("http://localhost:4000/api/v1/add", data)
      .then((res) => {
        alert(res.data.message);
      });
    setData({
      bookName: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "91.5vh" }}>
      <div className="container p-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-light">Book Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name" name="bookName" onChange={change} value={data.bookName} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-light">Author</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter the name of Author" name="author" onChange={change} value={data.author} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-light">Description</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description for the book" name="description" onChange={change} value={data.description} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-light">Image URL</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter URL for image" name="image" onChange={change} value={data.image} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-light">Price</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Price" name="price" onChange={change} value={data.price} />
        </div>
        <button className="btn btn-success" onClick={submit}>Submit</button>
      </div>
    </div>
  );
};

export default AddBook;
