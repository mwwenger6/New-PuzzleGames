import './App.css';
import {Puzzle} from './SlidingPuzzle/puzzle';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Home} from "./Home";
import {Tower} from "./Towers/Tower";
import WrappedPuzzle from "./SlidingPuzzle/WrappedPuzzle";

function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
            <Route path="/puzzle" Component={WrappedPuzzle}></Route>
          <Route path="/tower" Component={Tower}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

