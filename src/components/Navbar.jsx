import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in when component mounts
    const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
    if (storedLoggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false"); // Set isLoggedIn to "false" when logging out
    setIsLoggedIn(false);
    navigate("/"); // Redirect to homepage after logout
  };

  const handleLogin = () => {
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" style={{ borderBottom: '1px solid #fff' }}>
        <div className="container">
          <Link className="navbar-brand text-light" to="/">
            Book Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-item nav-link active text-light">
                Home
              </Link>
              <Link to="/books" className="nav-item nav-link text-light">
                Books
              </Link>
              <Link to="/addbooks" className="nav-item nav-link text-light">
                Add Books
              </Link>
              {isLoggedIn ? ( 
                <Link to='/login' style={{textDecoration: "none"}}><button className="nav-item nav-link btn btn-link text-light" onClick={handleLogout}>
                Logout
              </button></Link>
              ) : ( 
                <button className="nav-item nav-link btn btn-link text-light" onClick={handleLogin}>
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
