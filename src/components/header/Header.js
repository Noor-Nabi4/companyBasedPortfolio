import React from "react";
import "./Header.css";
import Navbar from "../nav/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/">Noor</Link>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
