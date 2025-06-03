import React from "react";
import "./Page4.css"
import img from "../.././assets/page4img.png"

const page4 = () => {
    return (

        <div className="pagefour" id="Pagefour">
            <div className=""> <img className="imagee" src={img} /></div>
            <div className="pgfourbox">
                <h1 className="pg4heading">Our Mission</h1>
                <p className="ptagofpg4">At CAN-IT & BOTTLE-IT CORPORATION, LLC, we are dedicated to <br /> reducing plastic waste by recycling empty
                    plastic bottles, aluminum <br /> cans, and other consumer plastic items. We believe these materials <br /> should
                    no longer be seen as waste but as valuable resources that can be <br />reused. Our mission is to develop
                    products that help reduce pollution,<br />conserve natural resources, and save energy, all while working
                    towards a <br />cleaner planet. <br /> <br />  We strongly believe that effective recycling regulations and a national <br />
                    strategy to prevent plastic pollution are crucial for the future of our <br />  planet. Our trademarked
                    characters serve as “Campaign Ambassadors,” <br />  helping us educate the public and spread our message.
                    Tackling the <br /> pollution crisis requires global and local collaboration, and government <br /> intervention
                    is key to implementing strong recycling policies and laws.</p>
            </div>
        </div >
    )
}

export default page4