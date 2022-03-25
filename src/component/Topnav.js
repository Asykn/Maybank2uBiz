import React from "react";
import "../css/topnav.css";


const Topnav = () => {
    return(
        <>
        <div>
        <div className="top_container">
        <div className="topnav">
            <div>
                <ul>
                <li><img src={require('../images/Group 12.png')} /></li>
                <li>Business Account<br/> RM 100,000.00</li>
                <li><img src={require('../images/shape.png')} /></li>
                <li><img src={require('../images/Fill 3.png')} /></li>
            </ul>
            </div>
        </div>
        </div>
        </div>
        </>

    );
};
export default Topnav;