import './App.css';
import {Puzzle} from './SlidingPuzzle/puzzle';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Home} from "./Home";
import {DisplayTowers} from "./Towers/DisplayTowers";


function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/puzzle" Component={Puzzle}></Route>
          <Route path="/tower" Component={DisplayTowers}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

