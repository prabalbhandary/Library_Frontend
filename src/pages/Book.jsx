import React, { useEffect, useState } from "react";
import axios from "axios";
import BookSection from "../components/BookSection";

const Book = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/getBooks");
        setData(res.data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4 className="text-light">Books Section</h4>
      </div>
      {data ? (
        <BookSection data={data} />
      ) : (
        <div className="text-light">Loading...</div>
      )}
    </div>
  );
};

export default Book;
