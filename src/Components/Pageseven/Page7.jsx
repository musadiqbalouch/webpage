import React from "react";
import "./Page7.css"
import "../Pageseven/Page7.css"

const page7 = () => {
    return (
        <div className="page7">
            <div className="heading"><h2>Contact Us For Pre-Orders</h2></div>
            <div className="infomation">
                <input className="text" type="text" placeholder="First Name" />
                <input className="email" type="email" placeholder="Email" /> </div>
            <div> <textarea className="textarea" name="Subject" placeholder="Subject" id=""></textarea></div>
            <div >
                <h2 className="headinggtwo">Please select the products you are most interested in</h2>
            </div>
            <div className="checkboxpart1">
                <div className="check1">
                    <input className="xox" type="checkbox" />
                    <label className="label">CAN-IT BAGS</label>
                </div>
                <div className="check1">
                    <input className="xox" type="checkbox" />
                    <label className="label">BOTTLE-IT BAGS</label>
                </div>
                <div className="check1">
                    <input className="xox" type="checkbox" />
                    <label className="label">BAG-IT BAGS</label>
                </div>
                <div className="check1">
                    <input className="xox" type="checkbox" />
                    <label className="label">TAKE-IT BAGS - CUSTOMER TAKE OUT BAGS</label>
                </div>
                <div className="check1">
                    <input className="xox" type="checkbox" />
                    <label className="label">TRASH-IT BAGS 13 GAL - TALL KITCHEN DRAWSTRING <span className="gap">TRASH BAGS </span></label>
                </div>
                <div className="check1">
                    <input className="xox" type="checkbox" />
                    <label className="label">TRASH-IT BAGS 33 GAL - LARGE TRASH BAGS</label>
                </div>
                <div className="check2">
                    <input className="xox" type="checkbox" />
                    <label className="label">BAG-IT BAGS</label>
                </div>
            </div>
            <div>
                <button className="btnn">Submit</button>
            </div>
        </div>
    )
}
export default page7