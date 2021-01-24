import "./App.css";
import { FishList } from "./components/fish/Fishlist.js";
import { LocationList } from "./components/locations/LocationList.js";
import { Nav } from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <FishList />
        <LocationList />
      </main>
    </div>
  );
}

export default App;
