import React from "react";
import "../PageEight/Page8.css"
import img1 from "../.././assets/Page8.png"

const page8 = () => {
    return (
        <div className="page8">
            <div className="page8imgg">
                <img className="page8img" src={img1} />
            </div>
            <div className="page8heading">
                <p>The <span className="spancolor">CAN-IT & BOTTLE-IT CORPORATION </span> supports having National Regulatory Laws <br /> and measures
                    designed to create systems for the reuse and recycling of consumer <br /> waste. Sometimes,
                    all it takes to protect our earth is to think outside the box.</p>
            </div>
            <div className="footer">
                <div>
                    <h2 className="h2heading">Subscribe to <br /> Our Newsletter</h2>
                    <p className="subcribeptag">Stay up-to-date with the latest trends in <br /> digital  marketingand receive exclusive tips <br />
                        and insights by subscribing to our newsletter.</p>
                    <div className="subbtn">
                        <input className="entermail" type="email" placeholder="Enter Your Email" />
                        <button className="subsribebtn">Subsribe</button>
                    </div>
                </div>
                <div className="links">
                    <h2 className="h2heading">Menu</h2>
                    <a className="link" href="">Home</a>
                    <a className="link" href="">About Us</a>
                    <a className="link" href="">Our Product</a>
                    <a className="link" href="">contact us for pre-order</a>
                    <a className="link" href="">Commercial videos</a>
                </div>
                <div className="links">
                    <h2 className="h2heading">Product</h2>
                    <a className="link" href="">Can-It</a>
                    <a className="link" href="">bottle-it</a>
                    <a className="link" href="">bag-it</a>
                    <a className="link" href="">trash-it</a>
                    <a className="link" href="">take-it</a>
                </div>
                <div className="h22heading">
                    <h2 className="h222heading">Contect Us</h2>
                    <h3 > <span className="contacts">Office: Address</span> <br /> 1704 N Park Drive, Suite #311,<br /> Wilmington, Delaware, 19806</h3>
                    <h3 > <span className="contacts">Mails:</span> <br /> info@canitandbottleitbags.com <br />  kirbyhudson@yahoo.com <br /> marvinjpowell13@verizon.net</h3>
                    <h3 > <span className="contacts">Phone:</span> <br /> Kirby:  +1 (302) 267-0554 <br />Marvin:+1 (610) 620-1275</h3>
                </div>
            </div>
            <div className="lasttitle">
                <p className="footerr"> <span className="cc">CC</span>   All Rights Reserved 2025 -Can-It & Bottle-It LLC . Powered by Apex Web Studios</p>
            </div>
        </div>
    )
}

export default page8