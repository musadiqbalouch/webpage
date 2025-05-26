import React from "react";
import "./Headerr.css"
import { IoIosContact } from "react-icons/io";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

function Headerr() {
  return (
    <div className="header">
      <div>
        <img className="img1" src="./src/assets/headerimg.png" />
      </div>
      <div className="info">
        <a className="headerlink" href="#Pageone"><h2 className="home"> Home</h2> </a>
        <a className="headerlink" href="#Pagefour"> <h2 className="about">About Us</h2> </a>
        <a className="headerlink" href="#Pagethree"> <h2 className="product">Our Product</h2> </a>
        <a className="headerlink" href="#Pagesix">  <h2 className="order">Pre-Order</h2> </a>
      </div>
      <div className="contact" >
        < IoIosContact className="icon" />
        <h2 className="cont">Contact Us</h2>
      </div>

    </div>
  )
}
export default Headerr

