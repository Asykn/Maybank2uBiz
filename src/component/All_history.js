import React from "react";
import "../css/history.css";

const All_history = () => {
   return (
        
    <div className="history_container">
            
        <div className="history">
            <h1>All transaction history</h1>
            <div>
                <ul>
                    <li>Description</li>
                    <li>Date</li>
                    <li>Amount</li>
                </ul>
            </div>
        </div>
                <div className ="content">
                    <ul>
                    <li><img src={require('../images/Group 102.png')} />DuitNow QR Bizbox Cafe Sdn Bhd 745194971 Payment</li>
                    <li>23 Jan 2020</li>
                    <li>RM 100 000.00</li>
                    <li>....</li>
                    </ul>
                     <ul>
                        <li><img src={require('../images/sm.png')} />SME First Account</li>
                        <li>23 Jan 2020</li>
                        <li>RM 10,000,000.40</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />Timothy and Brothers Fresh Fruit Bentong Sdn Bhd</li>
                        <li>23 Jan 2020</li>
                        <li>-RM 99,900.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />Genting Commodities Trading Sdn Bhd</li>
                        <li>23 Jan 2020</li>
                        <li>-RM 20,000.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />DuitNow QR Bizbox Sdn Bhd DuitNow QR Bizbox</li>
                        <li>23 Jan 2020</li>
                        <li>RM 5,000,000.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />Timothy and Brothers Fresh Fruit Bentong Sdn Bhd</li>
                        <li>23 Jan 2020</li>
                        <li>RM 10,000,000.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />Timothy and Brothers Fresh Fruit Bentong Sdn Bhd</li>
                        <li>23 Jan 2020</li>
                        <li>RM 570,000.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />Timothy and Brothers Fresh Fruit Bentong Sdn Bhd</li>
                        <li>23 Jan 2020</li>
                        <li>RM 10,000,000.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />SME First Account</li>
                        <li>23 Jan 2020</li>
                        <li>RM 6,003.40</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />Timothy and Brothers Fresh Fruit Bentong Sdn Bhd</li>
                        <li>23 Jan 2020</li>
                        <li>RM 10,000,000.00</li>
                        <li>....</li>
                    </ul>
                    <ul>
                        <li><img src={require('../images/Group 102.png')} />SME First Account</li>
                        <li>23 Jan 2020</li>
                        <li>RM 6,003.40</li>
                        <li>....</li>
                    </ul>

                </div>
    </div>
       
    );
};
export default All_history;