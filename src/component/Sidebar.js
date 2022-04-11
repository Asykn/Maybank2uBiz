import React from "react";
import "../css/sidebar.css";

const Sidebar = () => {
    return (
        <>
    <div className ="SConatainer"> 
    <div className="sidebar">
        <div className="Logo">
            <div className = "Icon">
                <img src={require('../images/naviIcon.png')} />
            </div>

            <div className = "Mlogo">
                <img src={require('../images/M2U-Biz-Logo_Yellow.png')} />
            </div>

            <div className ="Logo2">
                <img src={require('../images/notificationIcon.png')} />
            </div>
        </div>

            <div className='SContain1'>
                <div className='SContext1'> Canvas Valley </div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Approvals</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Bill Payment</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Transfer </div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Scheduled Transactions</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Bulk Payment</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Request Payment</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> View Statements</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Business Dashboard</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Apply</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Investment</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Forex Counter</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Inbox</div>
            </div>

            <div className='SContain'>
                <div className='SContext'> Setting</div>
            </div>
            
        

        </div>
    </div>
        </>
    );
};
export default Sidebar;
