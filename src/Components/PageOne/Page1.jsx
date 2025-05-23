import React from "react"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

import "./Page1.css"

const Page1 = () => {
    return (
        <div className="page1" id="Pageone">
            <div><h2 className="heading1">The <span className="h2color">Amazing IT Family </span>Of Products</h2></div>
            <div> <p className="ptag">The CAN-IT & BOTTLE-IT CORPORATION Is A Part Of The Eco-Friendly Movement. We Develop, Market And Sell Reusable Everyday <br /> Consumer Products That Use Green Technology.
                Our Products Are Commonly Referred To As <span className="pcolor">THE AMAZING IT-FAMILY OF PRODUCTS.</span></p></div>
            <img className="page1img" src="./src/assets/group.png" />
        </div>
    )
}

export default Page1