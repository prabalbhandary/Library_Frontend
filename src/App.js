import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Book";
import AddBooks from "./pages/AddBook";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import UpdateBook from "./pages/UpdateBook";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update/:id" element={<UpdateBook />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
