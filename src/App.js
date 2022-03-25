import './App.css';
import Sidebar from './component/Sidebar';
import Topnav from './component/Topnav';
import Acc_details from './component/Acc_details';
import All_history from './component/All_history';


const App = () => (
    <>
{/* <div><Sidebar/></div> */}
<div><Topnav/></div>
<div className = "first">SME First Account</div>
<div><Acc_details/></div> 
<div><All_history/></div>
<div>
      <button className="button">View Statements</button>
</div>

</>
  );

export default App;

