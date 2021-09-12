import NavBar from "./Components/NavBar";
import SideNavbar from "./Components/SideNavbar";
import "./Components/App.css"
import BeginPage from "./Components/BeginPage";
import AreaChart from "./Components/AreaChart";

function App() {
  return (
    <div id="wrapper">
      <SideNavbar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">

          <NavBar />
          <BeginPage monthlyEarning = "$40,000" annualEarning="$215,000" taskCompleted ={40} pendingRequests ={18}/>
          <AreaChart/>
        </div>
      </div>
    </div>
  );
}

export default App;
