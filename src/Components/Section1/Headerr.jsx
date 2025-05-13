import React from "react";
import "./Headerr.css"

function Headerr (){
    return(
    <div className="header">
    <div>
    <img  className="img1"src="./src/assets/headerimg.png"/>
    </div>
    <div className="info">
    <h2 className="home">Home</h2>
    <h2 className="about">About Us</h2>
    <h2 className="product">Our Product</h2>
    <h2 className="order">Pre-Order</h2>
    </div>
    <div className="contact" >
    <img className="header2img" src="./src/assets/user.png" />
      <h2 className="cont">Contact Us</h2>
    </div>
   
    </div>
    )
}
export default Headerr

