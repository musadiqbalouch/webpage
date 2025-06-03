import React, { useState } from "react";
import "./Page6.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import video from "../.././assets/Page6video.mp4"
import video1 from "../.././assets/Can-It & Bottle-It 2023.mp4"
import img1 from "../.././assets/Left.png"
import img2 from "../.././assets/Right.png"
import img3 from "../.././assets/trashit.png"
import img4 from "../.././assets/Right.png"

const Page6 = () => {

    const [selectArow, setSelectArow] = useState("arrowright")
    return (
        <div className="pagesix" id="Pagesix">
            <div className="pagesixheading"><h2 className="h222">CAN-IT & BOTTLE-IT VIDEO</h2></div>
            <div className="containerr">
                {selectArow === "arrowleft" ? (
                    <>
                        <img className="imgleft" src={img1} />
                        <video controls autoPlay muted className="video1" src={video}></video>
                        <img className="imgright" src={img2} />
                    </>
                ) : selectArow === "arrowright" ? (
                    <>
                        <img className="img2left" src={img3} />
                        <video controls autoPlay muted className="video2" src={video1}></video>
                        <img className="img2right" src={img4} />
                    </>
                ) : null}
            </div>
            <div className="bg">
                <FaArrowLeft className={`arrowleft ${selectArow === "arrowleft" ? "active" : ""}`} onClick={() => setSelectArow("arrowleft")} />
                <FaArrowRight className={`arrowright ${selectArow === "arrowright" ? "active" : ""}`} onClick={() => setSelectArow("arrowright")} />
            </div>
        </div>
    )
}
export default Page6