import React from "react";
import "./Page3.css"
import Card from "./Card";
import imag1 from "../../assets/Card1img.png"
import imag2 from "../../assets/Card2.png"
import imag3 from "../../assets/Card3.png"
import imag4 from "../../assets/Card4.png"
import imag5 from "../../assets/Card5.png"


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
const Page3 = () => {
    return (
        <div className="page3">

            <div className="page3heading">
                <h1>Presenting Our <span className="h1color">Special Product</span> </h1>
            </div>
            <div className="fivecards">
                {/* {data?.length > 0 ? 
    data?.map((d, index) => {
        <Card key={index} image={d.image}
title={d.title}
detail={d.detail}
button={d.button} />
    }): (F
        <p> No data fund</p>
    )} */}
                <Card image={imag1} title={"BAG-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Card image={imag2} title={"CAN-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Card image={imag3} title={"BOTTLE-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Card image={imag4} title={"TRASH-IT"} detail={"Insulated and re-usable environment friendly grocery."} button={"View button"} />
                <Card image={imag5} title={"TAKE-IT"} detail={"Insulated and re-usable environment friendly grocery ."} button={"View button"} />
            </div>
        </div>
    )
}

export default Page3