import AllVehicles from "./Dashboard/Components/AllVehicles";
import Drivers from "./Dashboard/Components/Drivers";
import Earnings from "./Dashboard/Components/Earnings";
import Vehicle from "./Dashboard/Components/Vehicle";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Home />
      <Drivers />
      <AllVehicles />
      <Earnings />
      <Vehicle />
    </>
  );
}

export default App;
