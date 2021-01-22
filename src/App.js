import "./App.css";
import { FishList } from "./components/Fishlist";
import { Nav } from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <FishList />
    </div>
  );
}

export default App;
