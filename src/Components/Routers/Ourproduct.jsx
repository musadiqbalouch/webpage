import React from "react";
import Content from "./Content";
import imag1 from "../../assets/Card1img.png"
import imag2 from "../../assets/Card2.png"
import imag3 from "../../assets/Card3.png"
import imag4 from "../../assets/Card4.png"
import imag5 from "../../assets/Card5.png"
import "./Ourproduct.css"


const data = [
    {
        image: imag1,
        title: "BAG-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View Button"
    }, {
        image: imag2,
        title: "CAN-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View button"
    }, {
        image: imag3,
        title: "BOTTLE-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "button"
    }, {
        image: imag4,
        title: "TRASH-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "button"
    }, {
        image: imag5,
        title: "TAKE-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "button"
    }
]
const Ourproduct = () => {
    return (
        <div className="ourproduct" id="Pagethree">

            <div className="page3headingss">
                <h1>Presenting Our <span className="h1color">Special Product</span> </h1>
            </div>
            <div className="fivecardsss">
                <Content image={imag1} title={"BAG-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Content image={imag2} title={"CAN-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Content image={imag3} title={"BOTTLE-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Content image={imag4} title={"TRASH-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Content image={imag5} title={"TAKE-IT"} detail={"Insulated and re-usable environment friendly grocery ."} button={"View button"} />
            </div>
        </div>
    )
}

export default Ourproduct