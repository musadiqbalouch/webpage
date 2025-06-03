import React from "react";
import "./Page2.css"
import img from "../.././assets/page2img.jpg"

const Page2 = () => {
    return (
        <div className="backimgpg2">
            <div className="txtandimg">
                <div className="txtpg2">
                    <h2 className="headingg1">About CAN - IT & BOTTLE - IT Corporation</h2>
                    <h2 className="heading2">We Are Here <span className="headingscolor"> For You </span></h2>
                    <p className="heading3"> <span className="headingscolor">At CAN-IT & BOTTLE-IT CORPORATION, LLC, </span> we are proud to be <br /> part of the eco-friendly movement, developing
                        and selling <br />reusable consumer products using green technology. Our <br />products, known as <span className="headingscolor">THE AMAZING IT-FAMILY OF
                            PRODUCTS, <br /> </span> are designed to reduce littering, increase recycling rates, and <br />minimize plastic pollution. We aim to
                        raise public awareness on <br /> the importance of preventing non-biodegradable substances <br /> from entering our waterways
                        and landfills. <br />  <br />Our goal is to create a cleaner world by offering products that <br />promote recycling and reduce
                        plastic waste. We believe that <br /> national regulatory laws are essential for fostering systems of <br />reuse and
                        recycling, and we encourage everyone to take <br /> sustainable actions in their daily lives. It will take collective <br />
                        effort to gain public support and implement waste prevention <br /> initiatives, but together we can protect our
                        environment by <br />recovering, recycling, and reusing the waste we create.</p>
                </div>
                <div className="imgp2">
                    <img className="imgpg2" src={img} />
                </div>
            </div>
        </div>
        // absolute
    )
}

export default Page2