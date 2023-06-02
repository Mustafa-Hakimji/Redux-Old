import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeCintainer from "./Components/HooksCakeCintainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import ItemContainer from "./Components/ItemContainer";
import NewCake from "./Components/NewCake";
import UserContainer from "./Components/UserContainer";

function App() {
  return (
    <div className="App">
      {/* <CakeContainer />
      <HooksCakeCintainer />
      <IceCreamContainer /> */}
      <NewCake />
      <ItemContainer cake />
      <ItemContainer />
      <UserContainer />
    </div>
  );
}

export default App;
