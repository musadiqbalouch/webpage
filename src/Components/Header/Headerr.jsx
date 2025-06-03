import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./Headerr.css"
import { IoIosContact } from "react-icons/io";
import img from "../.././assets/headerimg.png"

function Headerr() {
  return (
    <div className="header">
      <div>
        <img className="img1" src={img} />
      </div>
      <div className="info">
        <NavLink to="/" className="headerlink" ><h2 className="home"> Home</h2> </NavLink>
        <NavLink to={"/about"} className="headerlink" > <h2 className="about">About Us</h2> </NavLink>
        <NavLink to={"/ourproduct"} className="headerlink" > <h2 className="product">Our Product</h2> </NavLink>
        <NavLink to={"/preorders"} className="headerlink" >  <h2 className="order">Pre-Order</h2> </NavLink>
      </div>
      <div className="contact" >
        < IoIosContact className="icon" />
        <h2 className="cont">Contact Us</h2>
      </div>

    </div>
  )
}
export default Headerr

