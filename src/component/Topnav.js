import React from "react";
import "../css/topnav.css";


const Topnav = () => {
    return(
        <>
        <div className = "top_main">
        <div className="top_container">

        <div className="topnav">
            <div className = "FIcon">
                <img src={require('../images/Group 12.png')} />
            </div>    
            <div className="h-content">
              <div> Savings Account-i </div>
              <div className="h-subcontent"> RM1,000,000.00 </div>
            </div>
        </div>

        <div className="test">
            <div className="h-icon2">
              <img src={require("../images/shape.png")} />
            </div>

            <div className="h-icon3">
              <img src={require("../images/Fill 3.png")} />
            </div>
        </div>
             
        </div>
        </div>
        </>

    );
};
export default Topnav;
