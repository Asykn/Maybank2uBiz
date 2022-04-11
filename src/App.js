import './App.css';
import Sidebar from './component/Sidebar';
import Topnav from './component/Topnav';
import Acc_details from './component/Acc_details';
import All_history from './component/All_history';


function App() {
  return(
    <>
    <div className ="barSide">
      <Sidebar/>
    <div className = "Topbar">
    <div className = "barTop">
      <Topnav/>
    </div>
    <div className = "History-Details">
    <div><Acc_details/></div>
    <div><All_history/></div>
    </div>
   </div> 
   </div>
    </>
  );
}

export default App;

