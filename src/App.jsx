import "./App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { GiHamburgerMenu } from "react-icons/gi";
import { ActivityList } from "./components/ActivityList/ActivityList";

function App() {
  /*   const [jwt, setJwt] = useState(localStorage.getItem("token")); */

  return (
    <div className="App">
      <nav className="Nav">
        <h1>AppCálculo</h1>
        <button>
          <GiHamburgerMenu />
        </button>
      </nav>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
