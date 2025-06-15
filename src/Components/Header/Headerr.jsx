import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Headerr.css";
import { IoIosContact } from "react-icons/io";
import img from "../.././assets/headerimg.png";
import { RxHamburgerMenu } from "react-icons/rx";

function Headerr() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className="header">
      <div onClick={toggleMenu} className="ham">
        <RxHamburgerMenu className="hamm" />
      </div>
      <div>
        <img className="img1" src={img} />
      </div>
      <div className="info">
        <NavLink to="/" className="headerlink">
          <h2 className="home"> Home</h2>{" "}
        </NavLink>
        <NavLink to={"/about"} className="headerlink">
          {" "}
          <h2 className="about">About Us</h2>{" "}
        </NavLink>
        <NavLink to={"/ourproduct"} className="headerlink">
          {" "}
          <h2 className="product">Our Product</h2>{" "}
        </NavLink>
        <NavLink to={"/preorders"} className="headerlink">
          {" "}
          <h2 className="order">Pre-Order</h2>{" "}
        </NavLink>
      </div>
      <div className="inf">
        {isOpen ? (
          <>
            <div className="hamburger">
              <NavLink to="/" className="headerlink">
                <h2 className="home"> Home</h2>{" "}
              </NavLink>
              <NavLink to={"/about"} className="headerlink">
                {" "}
                <h2 className="about">About Us</h2>{" "}
              </NavLink>
              <NavLink to={"/ourproduct"} className="headerlink">
                {" "}
                <h2 className="product">Our Product</h2>{" "}
              </NavLink>
              <NavLink to={"/preorders"} className="headerlink">
                {" "}
                <h2 className="order">Pre-Order</h2>{" "}
              </NavLink>
            </div>
          </>
        ) : (
          <div className=""></div>
        )}
      </div>
      <div className="contact">
        <IoIosContact className="icon" />
        <h2 className="cont">Contact Us</h2>
      </div>
    </div>
  );
}
export default Headerr;
