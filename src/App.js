import './App.css';
import Sidebar from './component/Sidebar';
import Topnav from './component/Topnav';
import Acc_details from './component/Acc_details';
import All_history from './component/All_history';


const App = () => (
    <>
{/* <div><Sidebar/></div>
<div><Topnav/></div>
<div className = "first">SME First Account</div>

  <div><Acc_details/></div> 
  <div><All_history/></div>

<div>
      <button className="button">View Statements</button>
</div> */}
<div className = "main">
  <div className="container1">
    <div><Sidebar /></div>
    </div>
    <div className="container2">
      <div><Topnav /></div>
      <div className="first">SME First Account</div>
      <div className="container3"><Acc_details />
      <div className="conhis"><All_history/></div>
    </div>     
  </div>

</div>

</>
);

export default App;

