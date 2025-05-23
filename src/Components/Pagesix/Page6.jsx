import React from "react";
import "./Page6.css"


const Page6 = () => {
    return (
        <div className="pagesix" id="Pagesix">
            <div className="pagesixheading"><h2 className="h222">CAN-IT & BOTTLE-IT VIDEO</h2></div>
            <div className="containerr">
                <img className="imgleft" src="src/assets/Left.png" />
                <video controls autoPlay muted className="video" src="src/assets/Page6video.mp4"></video>
                <img className="imgright" src="src/assets/Right.png" />
            </div>
        </div>
    )
}

export default Page6