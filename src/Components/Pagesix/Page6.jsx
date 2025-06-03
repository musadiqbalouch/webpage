import React, { useState } from "react";
import "./Page6.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import video from "../.././assets/Page6video.mp4"
import video1 from "../.././assets/Can-It & Bottle-It 2023.mp4"

const Page6 = () => {

    const [selectArow, setSelectArow] = useState("arrowright")
    return (
        <div className="pagesix" id="Pagesix">
            <div className="pagesixheading"><h2 className="h222">CAN-IT & BOTTLE-IT VIDEO</h2></div>
            <div className="containerr">
                {selectArow === "arrowleft" ? (
                    <>
                        <img className="imgleft" src="src/assets/Left.png" />
                        <video controls autoPlay muted className="video1" src={video}></video>
                        <img className="imgright" src="src/assets/Right.png" />
                    </>
                ) : selectArow === "arrowright" ? (
                    <>
                        <img className="img2left" src="src/assets/trashit.png" />
                        <video controls autoPlay muted className="video2" src={video1}></video>
                        <img className="img2right" src="src/assets/Right.png" />
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