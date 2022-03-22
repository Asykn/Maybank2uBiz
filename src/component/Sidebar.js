import React from "react";
import "../css/sidebar.css";
import "../css/sidebar.css";

const Sidebar = () => {
    return (
        <>
        <div> 
    <div className="sidebar">
        <img src={require('../images/M2U-Biz-Logo_Yellow.png')} />
          <ul className="nav_list">
              <li>
                  <a ><span className="links_name">Canvas Valley</span></a>
              </li>
              <li>
                <a ><span className="links_name">Approvals</span></a>
            </li>
            <li>
                <a><span className="links_name">Bill Payment</span></a>
            </li>
            <li>
                <a><span className="links_name">Transfer</span></a>
            </li>
            <li>
                <a><span className="links_name">Scheduled Transactions</span></a>
            </li>
            <li>
                <a><span className="links_name">Bulk Payment</span></a>
            </li>
            <li>
                <a><span className="links_name">Request Payment</span></a>
            </li>
            <li>
                <a><span className="links_name">View Statements</span> </a>
            </li>
            <li>
                <a><span className="links_name">Business Dashboard</span></a>
            </li>
            <li>
                <a><span className="links_name">Apply</span>
                </a>
            </li>
            <li>
                <a><span className="links_name">Investment</span>
                </a>
            </li>
            <li>
                <a ><span className="links_name">Forex Counter</span>
                </a>
            </li>
            <li>
                <a ><span className="links_name">Inbox</span>
                </a>
            </li>
            <li>
                <a ><span className="links_name">Setting</span>
                </a>
            </li>
          </ul>
        </div>
    </div>
        </>
    );
};
export default Sidebar;
