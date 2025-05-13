import React from "react"

import "./Page1.css"

const Page1 = () => {
    return(
        <div className="page1">
        <div><h2 className="heading1">The <span className="h2color">Amazing IT Family </span>Of Products</h2></div>
        <div> <p className="ptag">The CAN-IT & BOTTLE-IT CORPORATION Is A Part Of The Eco-Friendly Movement. We Develop, Market And Sell Reusable Everyday <br /> Consumer Products That Use Green Technology.
        Our Products Are Commonly Referred To As <span className="pcolor">THE AMAZING IT-FAMILY OF PRODUCTS.</span></p></div>
        <img  className="page1img"src="./src/assets/group.png"/>
        </div>
    )
}

export default Page1