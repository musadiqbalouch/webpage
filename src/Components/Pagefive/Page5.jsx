import React, { useState } from "react";
import "./Page5.css"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const Page5 = () => {
    const [selectCountry, setSelectCountry] = useState("usa")

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <div className="pagefivee">
            <div className="pg5section1">
                <div>

                    <img className="imgpg5" src="src/assets/Page5img1.png" />
                </div>
                <div className="pgsection11">
                    <h2 className="h2ofpg51">The <span className="h2color">  Importance </span> of <br />Recycling</h2>
                    <p className="pofpg5">It is imperative for everyone, from individuals to large organizations to <br />  rethink and
                        come up with new ideas and products that will improve our <br /> relationship with plastic
                        bottle and aluminum can disposal. If we all work <br /> together, we can reduce the number
                        of wasted aluminum cans and plastic <br /> bottles by reusing these waste materials to produce
                        new products from <br />  waste. <br /> If all of us were able to recycle just a few items per day
                        that we would <br /> normally throw away, our participation is helping to protect the
                        environment, brconserve natural resources, and sustain our planet for future generations.</p>
                </div>
            </div >
            <div className="bottle">
                <h2>Bottle <span className="h2color">Bill States</span></h2>
            </div>
            <div className="pg5section2">
                <button className="usa" onClick={() => setSelectCountry("usa")}>USA</button>
                <button className="canada" onClick={() => setSelectCountry("canada")}>CANADA</button>
            </div>

            <div className="pg5section3" >
                {selectCountry === "usa" ? (
                    <>
                        <img className="imgpg51" src="src/assets/Page5img2.png" />
                        <p className="pofpg51">
                            Around 45 billion aluminum beverage cans are recycled each <br /> year in the United States,
                            enough to reach to the moon and <br /> back 85 times!  Amazingly, all these returned aluminu cans <br />
                            only make up about 1 % percent of the total solid waste <br /> collected in the United States.
                            In addition, US beverage <br />companies annually produce 100 billion plastic bottles to sell <br />
                            their soda, water, beer, energy drinks and juices. <br />  <br />In order to help with the enormous
                            problem of empty <br /> aluminum can and  plastic bottle disposal, ten (10) US States <br />plus Guam,
                            have adopted legislation commonly referred as <br /> the “BOTTLE BILL LAWS”.  These Laws require
                            all beverage <br />sretailers to give a cash refund of 5¢ or 10¢ back to customer <br /> for each
                            empty aluminum can, and plastic bottle returned to br the retailer.
                        </p>
                    </>
                ) : selectCountry === "canada" ? (
                    <>
                        <img className="imgpg511" src="src/assets/Canada.webp" />
                        <p className="pofpg511">
                            Canadian provinces and territories with a deposit- <br />return program recycle over three quarters
                            of their <br /> returned plastic bottles and aluminum cans. An <br /> estimated 1 billion cans and bottles
                            end up in landfills <br /> and the environment each year. In some provinces <br />like New Brunswick, the
                            deposit program generates <br /> money that goes directly to an environmental fund. <br />
                            <br />In the Provinces of Canada, there is a National <br />Provincial Bottle Bill Deposit  Laws.
                            Container Deposit <br />  Laws often known as Bottle Bills, requires a small, <br /> refundable deposit
                            on each beverage container. The <br /> refund value of the container provides a monetary <br /> incentive
                            to return the beverage container for <br /> recycling. Bottle Bills have proven to be highly <br />
                            effective in reducing litter and waste, while <br /> promoting and enjoying strong public support.
                            "Hover <br /> over the highlighted states to view the respective <br /> deposit rate"
                        </p>
                    </>
                ) : null}
            </div>
        </div>
    )
}
export default Page5