import "./App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { GiHamburgerMenu } from "react-icons/gi";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { HamburgerMenu } from "./shared/components/HamburgerMenu/HamburgerMenu";
import { JwtContext } from "./shared/context/JwtContext";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
<<<<<<< HEAD
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </div>
    </JwtContext.Provider>
=======
   <JwtContext.Provider value={{ jwt, setJwt }}>
    <div className="App">
      <nav className="Nav">
        <h1>AppCálculo</h1>
        {/*         <HamburgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
        <button>
          <GiHamburgerMenu />
        </button>
        <HamburgerMenu />
      </nav>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
</JwtContext.Provider>
>>>>>>> 508d9d1c7bb0a311eb50880175cad7803d5fa7d7
  );
}

export default App;
