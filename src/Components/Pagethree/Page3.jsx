import React from "react";
import "./Page3.css"
import Card from "./Card";
import imag1 from "../../assets/Card1img.png"
import imag2 from "../../assets/Card2.png"
import imag3 from "../../assets/Card3.png"
import imag4 from "../../assets/Card4.png"
import imag5 from "../../assets/Card5.png"

export const Products = [
    {
        id: 1,
        image: imag1,
        title: "BAG-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View Button"
    }, {
        id: 2,
        image: imag2,
        title: "CAN-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View Button"
    }, {
        id: 3,
        image: imag3,
        title: "BOTTLE-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View Button"
    }, {
        id: 4,
        image: imag4,
        title: "TRASH-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View Button"
    }, {
        id: 5,
        image: imag5,
        title: "TAKE-IT",
        detail: "Insulated and re-usable environment friendly grocery shopping bags.",
        button: "View Button"
    }
]

const Page3 = () => {
    return (
        <div className="page3" id="Pagethree">

            <div className="page3heading">
                <h1>Presenting Our <span className="h1color">Special Product</span> </h1>
            </div>
            <div className="fivecards">
                {
                    Products.map((product, index,) => (
                        <Card key={index} product={product} image={product.image} title={product.title} detail={product.detail} button={product.button} />
                    ))
                }
            </div>
        </div>
    )
}

export default Page3